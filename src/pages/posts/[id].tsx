import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

import Portrait from '../../components/svgs/Portrait'
import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { PostData, getAllPostIds, getPostData } from '../../lib/posts'
import { Body, Separator, ShortBio, MorePosts } from '../../styles/pages/Post'

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
  postData: PostData
}

const Post = ({ postData }: Props): JSX.Element => (
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
      <ShortBio>
        <Portrait width={80} height={80} />
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
          privacy violations. He is interested in GNU/Linux, shell scripting and
          front end web technologies.
        </p>
      </ShortBio>
      <MorePosts>
        {postData.previousPost ? (
          <Link href={`/posts/${postData.previousPost.id}`}>
            <a className='left'>
              <span>Previous</span>
              {postData.previousPost.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {postData.nextPost ? (
          <Link href={`/posts/${postData.nextPost.id}`}>
            <a className='right'>
              <span>Next</span>
              {postData.nextPost.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
      </MorePosts>
    </>
  </Layout>
)

export default Post
