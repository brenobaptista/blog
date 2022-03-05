import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import toc from 'remark-toc'

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

  const processedContent = await remark()
    .use(slug)
    .use(headings)
    .use(toc)
    .use(html)
    .use(prism, {
      plugins: ['line-numbers', 'command-line']
    })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

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
