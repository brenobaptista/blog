import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import Date from '../../components/Date'
import Article from '../../styles/pages/Article'
import { getAllPostIds, getPostData } from '../../lib/posts'

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
    date: string
    contentHtml: string
  }
}

const Post = ({ postData }: Props): JSX.Element => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <Article>
      <h1>{postData.title}</h1>
      <Date date={postData.date} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Article>
  </Layout>
)

export default Post
