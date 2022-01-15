import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Email from '../components/svgs/Email'
import GitHub from '../components/svgs/GitHub'
import Portrait from '../components/svgs/Portrait'
import RSS from '../components/svgs/RSS'
import Date from '../components/Date'
import Layout from '../components/Layout'
import Retro from '../components/Retro'
import Search from '../components/Search'
import { Post, getSortedPostsData } from '../lib/posts'
import generateRss from '../lib/rss'
import generateSitemap from '../lib/sitemap'
import {
  HomeHeader,
  PortraitWrapper,
  SocialIcons,
  Intro,
  Blog,
  Card
} from '../styles/pages/Home'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  generateRss(allPostsData)

  await generateSitemap()

  return {
    props: {
      allPostsData
    }
  }
}

interface Props {
  allPostsData: Post[]
}

const Home = ({ allPostsData }: Props): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>(allPostsData)

  return (
    <Layout home>
      <Head>
        <title>Breno Baptista</title>
        <meta
          name='description'
          content="I'm a full-stack developer from Brazil."
        />
      </Head>
      <HomeHeader>
        <PortraitWrapper>
          <Portrait width={128} height={128} />
        </PortraitWrapper>
        <h1>Breno Baptista</h1>
        <SocialIcons>
          <a
            href='https://github.com/brenobaptista/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GitHub width={40} height={40} />
          </a>
          <a
            href='https://brenobaptista.vercel.app/rss.xml'
            target='_blank'
            rel='noreferrer noopener'
          >
            <RSS width={40} height={40} />
          </a>
          <a href='mailto:brenobaptista@protonmail.com'>
            <Email width={40} height={40} />
          </a>
        </SocialIcons>
      </HomeHeader>
      <Intro>
        <p>
          I’m a developer from Brazil. I work as a software engineer at{' '}
          <a
            href='https://joinmassive.com/team'
            target='_blank'
            rel='noreferrer noopener'
          >
            Massive
          </a>
          . I write blog posts about things I’ve found interesting during my
          daily explorations on the web. I’m interested in Linux, shell
          scripting, open-source software, privacy and front-end development.
        </p>
      </Intro>
      <Retro />
      <Blog>
        <h2>Blog</h2>
        <Search allPostsData={allPostsData} setPosts={setPosts} />
        {posts.length ? (
          posts.map(({ id, title, description, date }) => (
            <Link href={`/posts/${id}`} key={id}>
              <a>
                <Card>
                  <div>
                    <span>{title}</span>
                    <small>
                      <Date date={date} />
                    </small>
                  </div>
                  <p>{description}</p>
                </Card>
              </a>
            </Link>
          ))
        ) : (
          <div>
            <p className='not-found'>No posts found.</p>
          </div>
        )}
      </Blog>
    </Layout>
  )
}

export default Home
