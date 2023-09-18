import Head from 'next/head'

import { Email, GitHub, LinkedIn, RSS } from '@/icons'
import {
  PrintingRules,
  Page,
  Content,
  Header,
  Author,
  Social,
  Section
} from '@/styles/pages/Resume'

const Resume = () => (
  <>
    <Head>
      <title>Résumé</title>
      <meta
        name='description'
        content='My résumé page that can be exported into a PDF file.'
      />
    </Head>
    <PrintingRules />
    <Page>
      <Content>
        <Header>
          <Author>
            <h1>Breno Baptista</h1>
            <div>
              Software engineer with bachelor’s degree in Computer Science and
              4+ years experience at high-growth early-stage startups.
            </div>
          </Author>
          <Social>
            <div>
              <a
                href='mailto:me@brenobaptista.com'
                aria-label='Contact me by email'
              >
                <Email width={16} height={16} />
                <span>me@brenobaptista.com</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.brenobaptista.com/'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='My blog'
              >
                <RSS width={16} height={16} />
                <span>brenobaptista.com</span>
              </a>
            </div>
            <div>
              <a
                href='https://github.com/brenobaptista/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <GitHub width={16} height={16} />
                <span>github.com/brenobaptista</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.linkedin.com/in/breno-baptista/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <LinkedIn width={16} height={16} />
                <span>linkedin.com/in/breno-baptista</span>
              </a>
            </div>
          </Social>
        </Header>
        <Section>
          <h2 className='mt-0'>EXPERIENCE</h2>
          <div>
            <strong>Software Engineer, Alternative Payments</strong>
            <em>February 2022 - Present (USA, remote)</em>
            <ul>
              <li>
                Provided an integrated B2B payments and checkout infrastructure
                for service-based businesses.
              </li>
              <li>
                Maintained highly-scalable and containerized microservices in
                Go. Developed the email service from scratch, ensuring
                reliability and seemless communication through RabbitMQ
                messages.
              </li>
              <li>
                Delighted clients by crafting web experiences. Translated design
                mockups into efficient UI components and responsive pages.
              </li>
            </ul>
          </div>
          <div>
            <strong>Full-Stack Developer, Massive</strong>
            <em>January 2020 - January 2022 (USA, remote)</em>
            <ul>
              <li>
                Fought intrusive advertising by offering monetization of apps
                without ads at the cost of unused CPU/GPU using
                cryptocurrencies, blockchain and web3 instead of personal
                attention and data.
              </li>
              <li>
                Led efforts to vastly reduce technical debt in web and desktop
                apps, launching a refactored partner dashboard with better UI/UX
                and performance.
              </li>
              <li>
                Helped businesses comply with data laws (GDPR/CCPA) with easy
                plugins by developing WordPress and Shopify plugins from
                scratch.
              </li>
            </ul>
          </div>
          <div>
            <strong>Product Owner, Acens</strong>
            <em>February 2019 - January 2020 (Brazil)</em>
            <ul>
              <li>
                Helped businesses build an online presence by managing a small
                team that developed high-impact projects to our users.
              </li>
              <li>
                Improved the organization productivity by enforcing agile across
                the company. Took part in critical product decisions during
                sprint meetings and calls with partners.
              </li>
            </ul>
          </div>
        </Section>
        <Section>
          <h2>PROJECTS</h2>
          <ol>
            <li>
              <i>Programming Blog: </i>
              <a
                href='https://github.com/brenobaptista/blog'
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>github.com/brenobaptista/blog</span>
              </a>
            </li>
            <li>
              <i>Tailwind Dashboard Template: </i>
              <a
                href='https://github.com/brenobaptista/plume-dashboard'
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>github.com/brenobaptista/plume-dashboard</span>
              </a>
            </li>
            <li>
              <i>APR Service for Vehicle Loans: </i>
              <a
                href='https://github.com/brenobaptista/apr-service'
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>github.com/brenobaptista/apr-service</span>
              </a>
            </li>
            <li>
              <i>Deno URL Shortener Service: </i>
              <a
                href='https://github.com/brenobaptista/deno-url-shortener'
                target='_blank'
                rel='noreferrer noopener'
              >
                <span>github.com/brenobaptista/deno-url-shortener</span>
              </a>
            </li>
          </ol>
        </Section>
        <Section>
          <h2>EDUCATION</h2>
          <div>
            <strong>Bachelor’s Degree in Computer Science</strong>
            <div>Unifacvest University Center (2019 - 2023)</div>
          </div>
          <div>
            <strong>Scrum Fundamentals Certified (SFC™)</strong>
            <div>
              SCRUMstudy - Accreditation Body for Scrum and Agile (2020)
            </div>
          </div>
        </Section>
        <Section>
          <h2>SKILLS</h2>
          <div>
            <b>Languages: </b>JavaScript, TypeScript, Go, Bash, Lua
          </div>
          <div>
            <b>Front-end: </b>HTML, CSS, Sass, jQuery, Styled Components,
            Tailwind, React, React Native, Next.js, Storybook, Accessibility,
            Jest/RTL, Cypress
          </div>
          <div>
            <b>Back-end: </b>Node, Express, Deno, Apollo, GraphQL, Postgres,
            MongoDB, Firebase
          </div>
          <div>
            <b>DevOps: </b>Git, Docker, AWS, GNU/Linux, Yarn Workspaces,
            Turborepo, CI/CD
          </div>
        </Section>
      </Content>
    </Page>
  </>
)

export default Resume
