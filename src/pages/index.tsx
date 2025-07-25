import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { GitHub, LinkedIn, RSS } from '@/components/Icons'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import RetroHomeSection from '@/components/RetroHomeSection'
import Search from '@/components/Search'
import Separator from '@/components/Separator'
import { Post, getSortedPostsData } from '@/lib/posts'
import generateRss from '@/lib/rss'
import generateSitemap from '@/lib/sitemap'
import {
  HomeHeader,
  SocialIcons,
  Intro,
  BlogHeader,
  CardsWrapper,
  Card
} from '@/styles/pages/Home'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  generateRss(allPostsData)
  generateSitemap(allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}

interface IHome {
  allPostsData: Post[]
}

const Home = ({ allPostsData }: IHome) => {
  const [posts, setPosts] = useState<Post[]>(allPostsData)

  return (
    <Layout>
      <Head>
        <title>Breno Baptista</title>
        <meta
          name='description'
          content='Coding, technology, and beyond. Welcome to my blog, a dev journal where I capture what I learn so you can learn too.'
        />
      </Head>
      <HomeHeader>
        <Intro>
          <h1>Breno Baptista</h1>
          <p>
            Coding, technology, and beyond. Welcome to my blog, a dev journal
            where I capture what I learn so you can learn too.
          </p>
        </Intro>
        <SocialIcons>
          <a
            href='https://github.com/brenobaptista/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='GitHub profile'
          >
            <GitHub width={40} height={40} />
          </a>
          <a
            href='https://www.brenobaptista.com/rss.xml'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='RSS feed'
          >
            <RSS width={40} height={40} />
          </a>
          <a
            href='https://www.linkedin.com/in/breno-baptista/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='LinkedIn profile'
          >
            <LinkedIn width={40} height={40} />
          </a>
        </SocialIcons>
      </HomeHeader>
      <RetroHomeSection />
      <Separator margin='48px 0 16px 0' />
      <section>
        <BlogHeader>
          <h2>Blog</h2>
          <Search allPostsData={allPostsData} setPosts={setPosts} />
        </BlogHeader>
        <CardsWrapper>
          {posts.length ? (
            posts.map(({ id, title, description, date }) => (
              <Card key={id}>
                <Link href={`/posts/${id}`} passHref>
                  {title}
                </Link>
                <div>{description}</div>
                <small>
                  <Date date={date} />
                </small>
              </Card>
            ))
          ) : (
            <div>No posts found.</div>
          )}
        </CardsWrapper>
      </section>
    </Layout>
  )
}

export default Home
