import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkToc from 'remark-toc'
import remarkPrism from 'remark-prism'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

interface MatterResultData {
  title: string
  description: string
  date: string
}

export interface Post extends MatterResultData {
  id: string
}

interface FileName {
  params: {
    id: string
  }
}

interface MorePosts {
  nextPost: Post | null
  previousPost: Post | null
}

export interface PostData extends Post, MorePosts {
  contentHtml: string
}

const postsDirectory = path.join(process.cwd(), 'src/posts')

export const getSortedPostsData = (): Post[] => {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as MatterResultData)
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1

    return -1
  })
}

export const getAllPostIds = (): FileName[] => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))
}

const getMorePosts = (currentPostId: string): MorePosts => {
  const allPostsData = getSortedPostsData()

  const currentPostIndex = allPostsData.findIndex(
    post => post.id === currentPostId
  )

  let nextPost = null
  let previousPost = null

  if (currentPostIndex === 0) {
    previousPost = allPostsData[currentPostIndex + 1]
  } else if (currentPostIndex === allPostsData.length - 1) {
    nextPost = allPostsData[currentPostIndex - 1]
  } else {
    nextPost = allPostsData[currentPostIndex - 1]
    previousPost = allPostsData[currentPostIndex + 1]
  }

  return { nextPost, previousPost }
}

export const getPostData = async (id: string): Promise<PostData> => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkToc)
    .use(remarkPrism, {
      plugins: ['line-numbers', 'command-line']
    })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(matterResult.content)
  const contentHtml = String(processedContent)

  const { title, description, date } = matterResult.data

  const { nextPost, previousPost } = getMorePosts(id)

  return {
    id,
    title,
    description,
    date,
    contentHtml,
    nextPost,
    previousPost
  }
}
