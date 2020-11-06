import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import Date from '../../components/Date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/Utils.module.css'

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
      <title>
        {postData.title}
      </title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>
        {postData.title}
      </h1>
      <div className={utilStyles.lightText}>
        <Date date={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
)

export default Post
