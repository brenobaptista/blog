import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import Date from '../components/Date'
import { Intro, Blog } from '../styles/pages/Home'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

interface Props {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

const Home = ({ allPostsData }: Props): JSX.Element => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Intro>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this in{' '}
        <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
        .)
      </p>
    </Intro>
    <Blog>
      <h2>Blog</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date date={date} />
            </small>
          </li>
        ))}
      </ul>
    </Blog>
  </Layout>
)

export default Home
