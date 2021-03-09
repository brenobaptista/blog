import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import Email from '../components/icons/Email'
import GitHub from '../components/icons/GitHub'
import RSS from '../components/icons/RSS'
import Date from '../components/Date'
import Layout, { siteTitle } from '../components/Layout'
import { Post, getSortedPostsData } from '../lib/posts'
import generateRss from '../lib/rss'
import generateSitemap from '../lib/sitemap'
import { HomeHeader, SocialIcons, Intro, Blog } from '../styles/pages/Home'

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

const Home = ({ allPostsData }: Props): JSX.Element => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <HomeHeader>
      <img
        src='/images/profile-128.jpg'
        alt='Breno Baptista'
        width={128}
        height={128}
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
        <a
          href='https://brenobaptista.vercel.app/rss.xml'
          target='_blank'
          rel='noreferrer noopener'
        >
          <RSS width={40} height={40} />
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
        interested in GNU/Linux, shell scripting, open-source software, privacy
        and front end web technologies.
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
