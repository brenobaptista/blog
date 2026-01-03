import Head from 'next/head'

import { Email, GitHub, LinkedIn, RSS } from '@/components/Icons'
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
              Senior software engineer with a bachelor’s degree in Computer
              Science and 7+ years of experience at high-growth early-stage
              startups. SFC™.
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
          <h2>EXPERIENCE</h2>
          <div>
            <strong>Senior Software Engineer, Alternative Payments</strong>
            <em>February 2022 - Present (USA, remote)</em>
            <ul>
              <span>
                <b>Skills: </b>Go, Microservices, TypeScript, Tailwind, Next.js,
                Cypress, GraphQL, gRPC, RabbitMQ, PostgreSQL, Docker, Webhook,
                Datadog, Ory (Kratos, Hydra), OAuth2/OIDC protocols.
              </span>
              <li>
                Led a team of 4 engineers to build a new authentication flow
                (13,000+ monthly active users), a new onboarding experience with
                Adyen KYC integration and an insights reporting dashboard for
                tracking company performance.
              </li>
              <li>
                Designed and built the email service from the ground up using
                RabbitMQ, featuring a reusable templating engine and
                fault-tolerant architecture with caching to ensure delivery
                during downstream outages.{' '}
                <a
                  href='https://www.brenobaptista.com/posts/microservice-email'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  brenobaptista.com/posts/microservice-email
                </a>
              </li>
              <li>
                Managed the migration of webhook callbacks into a centralized
                service that receives all webhooks from integrations and
                transforms into messages using a transactional outbox to prevent
                data loss if either the message broker or the database is down.
              </li>
              <li>
                Implemented efficient navigation in our data-driven UI by
                introducing table pagination and better caching strategies in
                Apollo, resulting in reduced load times and improved
                performance.
              </li>
              <li>
                Planned and conducted interviews with prospective engineers to
                assess technical skills and alignment with team objectives.
                Collaborated with hiring managers to evaluate candidates and
                provide recommendations for selection.
              </li>
            </ul>
          </div>
          <div>
            <strong>Full-Stack Developer, Massive</strong>
            <em>January 2020 - January 2022 (USA, remote)</em>
            <ul>
              <span>
                <b>Skills: </b>JavaScript, PHP, React.js, Jest, Node.js,
                Express.js, MongoDB, Firebase, AWS, Serverless, SES
              </span>
              <li>
                Led technical debt reduction, achieved comprehensive test
                coverage, introduced dark mode and delivered a redesigned
                partner dashboard with enhanced UI/UX.
              </li>
              <li>
                Rewrote the codebase to hooks in React 16.8, resulting in a
                reduction of ~30% in size, making the application easier to
                maintain.
              </li>
              <li>
                Developed WordPress and Shopify plugins integrating our custom
                scripts to help businesses comply with GDPR/CCPA data
                regulations.
              </li>
              <li>
                Built desktop apps using web technologies, integrating Massive
                SDK for crypto-based monetization of unused CPU/GPU.
              </li>
            </ul>
          </div>
          <div>
            <strong>Product Owner, Acens</strong>
            <em>February 2019 - January 2020 (Brazil)</em>
            <ul>
              <span>
                <b>Skills: </b>Scrum, JavaScript, HTML, CSS, Git, SEO, WordPress
              </span>
              <li>
                Managed a small development team delivering websites and digital
                solutions that helped local businesses establish their online
                presence and reach new customers.
              </li>
              <li>
                Pushed company-wide adoption of Scrum, leveraging SFC™
                certification to improve team productivity and sprint
                predictability.
              </li>
              <li>
                Led sprint planning sessions and client calls, translating
                business requirements into actionable development tasks and
                prioritizing features based on customer feedback.
              </li>
            </ul>
          </div>
        </Section>
      </Content>
    </Page>
  </>
)

export default Resume
