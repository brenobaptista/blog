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
      <p>
        I&apos;m a full-stack developer based in Fortaleza, Brazil. I work
        remotely at Massive, where we develop alternatives to fight intrusive
        advertising. I&apos;m interested in GNU/Linux, open-source software,
        privacy and cybersecurity.
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
