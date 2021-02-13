import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

import Date from '../../components/Date'
import Layout from '../../components/Layout'
import {
  Body,
  Separator,
  ShortBio,
  BackToHome,
  MorePosts
} from '../../styles/pages/Post'
import { getAllPostIds, getPostData } from '../../utils/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

interface Post {
  id: string
  title: string
  description: string
  date: string
}

interface Props {
  postData: {
    title: string
    description: string
    date: string
    contentHtml: string
    nextPost: Post | null
    previousPost: Post | null
  }
}

const Post = ({ postData }: Props): JSX.Element => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <BackToHome>
      <Link href='/'>
        <a>← Back to home</a>
      </Link>
    </BackToHome>
    <article>
      <h1>{postData.title}</h1>
      <Date date={postData.date} />
      <Body dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
    <>
      <Separator />
      <ShortBio>
        <Image
          src='/images/profile.jpg'
          alt='Breno Baptista'
          width={80}
          height={80}
        />
        <p>
          Breno Baptista is a full-stack developer at{' '}
          <a
            href='https://joinmassive.com/team'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='Massive'
          >
            Massive
          </a>
          , where he develops web apps to fight advertising, data selling and
          privacy violations. He is interested in GNU/Linux, open-source
          software, privacy and cybersecurity.
        </p>
      </ShortBio>
      <MorePosts>
        {postData.previousPost ? (
          <Link href={`/posts/${postData.previousPost.id}`}>
            <a>← {postData.previousPost.title}</a>
          </Link>
        ) : (
          <div />
        )}
        {postData.nextPost ? (
          <Link href={`/posts/${postData.nextPost.id}`}>
            <a className='right'>{postData.nextPost.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </MorePosts>
    </>
  </Layout>
)

export default Post
