import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

import profile from 'public/images/profile.jpg'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import { PostData, getAllPostIds, getPostData } from '@/lib/posts'
import {
  Body,
  Separator,
  ShortBio,
  ProfileWrapper,
  MorePosts
} from '@/styles/pages/Post'

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
      <Separator />
      <ProfileWrapper>
        <Image src={profile} alt='Profile picture' width={80} height={80} />
      </ProfileWrapper>
      <ShortBio>
        Breno Baptista is a software engineer who likes to explore new things
        every day. He is interested in Linux, open-source software, digital
        privacy and front-end development.
      </ShortBio>
      <MorePosts>
        {postData.previousPost ? (
          <Link href={`/posts/${postData.previousPost.id}`}>
            <span>Previous</span>
            {postData.previousPost.title}
          </Link>
        ) : (
          <div />
        )}
        {postData.nextPost ? (
          <Link href={`/posts/${postData.nextPost.id}`}>
            <span>Next</span>
            {postData.nextPost.title}
          </Link>
        ) : (
          <div />
        )}
      </MorePosts>
    </>
  </Layout>
)

export default Post
