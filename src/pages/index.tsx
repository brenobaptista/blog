import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import Email from '../components/icons/Email'
import GitHub from '../components/icons/GitHub'
import Date from '../components/Date'
import Layout, { siteTitle } from '../components/Layout'
import { HomeHeader, SocialIcons, Intro, Blog } from '../styles/pages/Home'
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
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <HomeHeader>
      <Image
        src='/images/profile.jpg'
        alt='Breno Baptista'
        width={128}
        height={128}
        priority
      />
      <h1>Breno Baptista</h1>
      <SocialIcons>
        <a
          href='https://github.com/brenobaptista/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <GitHub width={40} height={40} />
        </a>
        <a href='mailto:brenobaptista@protonmail.com'>
          <Email width={40} height={40} />
        </a>
      </SocialIcons>
    </HomeHeader>
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
            <div>
              <span>
                {title}
                <small>
                  <Date date={date} />
                </small>
              </span>
              <p>{description}</p>
            </div>
          </a>
        </Link>
      ))}
    </Blog>
  </Layout>
)

export default Home
