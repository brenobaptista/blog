import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'
import Prism from 'prismjs'

import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { Separator, ShortBio, BackToHome } from '../../styles/components/Layout'
import Body from '../../styles/pages/Post'
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

interface Props {
  postData: {
    title: string
    description: string
    date: string
    contentHtml: string
  }
}

const Post = ({ postData }: Props): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
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
        <BackToHome>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      </>
    </Layout>
  )
}

export default Post
