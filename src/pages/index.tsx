import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import Date from '../components/Date'
import { Intro, Blog } from '../styles/pages/Home'
import { getSortedPostsData } from '../utils/posts'

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
    id: string
    title: string
    description: string
    date: string
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
        remotely at{' '}
        <a
          href='https://joinmassive.com/team'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Massive'
        >
          Massive
        </a>
        , where we develop alternatives to fight intrusive advertising. I&apos;m
        interested in GNU/Linux, open-source software, privacy and
        cybersecurity.
      </p>
    </Intro>
    <Blog>
      <h2>Blog</h2>
      {allPostsData.map(({ id, title, description, date }) => (
        <Link href={`/posts/${id}`} key={id}>
          <a>
            <span>
              {title}
              <small>
                <Date date={date} />
              </small>
            </span>
            <p>{description}</p>
          </a>
        </Link>
      ))}
    </Blog>
  </Layout>
)

export default Home
