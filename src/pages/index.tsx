import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import profile from 'public/images/profile.jpg'
import { Email, GitHub, LinkedIn, RSS } from '@/components/Icons'
import Date from '@/components/Date'
import Layout from '@/components/Layout'
import RetroHomeSection from '@/components/RetroHomeSection'
import Search from '@/components/Search'
import { Post, getSortedPostsData } from '@/lib/posts'
import generateRss from '@/lib/rss'
import generateSitemap from '@/lib/sitemap'
import {
  HomeHeader,
  ProfileWrapper,
  EmailObfuscator,
  SocialIcons,
  Intro,
  Blog,
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
          content='Breno Baptista is a software engineer who likes to explore new things every day. He is interested in Linux, open-source software, digital privacy and front-end development.'
        />
      </Head>
      <HomeHeader>
        <ProfileWrapper>
          <Image
            src={profile}
            alt='Profile picture'
            width={128}
            height={128}
            quality={100}
            priority
          />
        </ProfileWrapper>
        <EmailObfuscator>
          <Email width={20} height={20} />
          <div>
            <span>me@bre</span>
            <span className='hidden'></span>
            <span>nobapt</span>
            <span className='hidden'></span>
            <span>ista.com</span>
          </div>
        </EmailObfuscator>
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
      <Intro>
        <p>
          I’m a software engineer who likes to explore new things every day. I
          write blog posts about things I’ve found interesting during my daily
          explorations on the web. I’m interested in Linux, open-source
          software, digital privacy and front-end development.
        </p>
      </Intro>
      <RetroHomeSection />
      <Blog>
        <h2>Blog</h2>
        <Search allPostsData={allPostsData} setPosts={setPosts} />
        {posts.length ? (
          posts.map(({ id, title, description, date }) => (
            <Link href={`/posts/${id}`} key={id} passHref>
              <Card>
                <div>
                  <span>{title}</span>
                  <small>
                    <Date date={date} />
                  </small>
                </div>
                <p>{description}</p>
              </Card>
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
