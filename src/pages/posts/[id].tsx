import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

import Date from '@/components/Date'
import Layout from '@/components/Layout'
import Separator from '@/components/Separator'
import { PostData, getAllPostIds, getPostData } from '@/lib/posts'
import { Body, MorePosts, Card, Placeholder } from '@/styles/pages/Post'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)

  return {
    props: {
      postData
    }
  }
}

interface IPost {
  postData: PostData
}

const Post = ({ postData }: IPost) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
      <meta name='description' content={postData.description} />
    </Head>
    <article>
      <h1>{postData.title}</h1>
      <Date date={postData.date} />
      <Body dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
    <>
      <Separator margin='24px 0 0 0' />
      <MorePosts>
        {postData.previousPost ? (
          <Card>
            <span>Previous</span>
            <Link href={`/posts/${postData.previousPost.id}`}>
              {postData.previousPost.title}
            </Link>
          </Card>
        ) : (
          <Placeholder />
        )}
        {postData.nextPost ? (
          <Card>
            <span>Next</span>
            <Link href={`/posts/${postData.nextPost.id}`}>
              {postData.nextPost.title}
            </Link>
          </Card>
        ) : (
          <Placeholder />
        )}
      </MorePosts>
    </>
  </Layout>
)

export default Post
