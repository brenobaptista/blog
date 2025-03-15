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
              Senior software engineer with bachelor’s degree in Computer
              Science and 5+ years experience at high-growth early-stage
              startups.
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
            <em>October 2023 - Present (USA, remote)</em>
            <ul>
              <li>
                Led a squad of 4 engineers into the development of the new
                authentication experience which is used by 25,000+ users, the
                new onboarding experience which integrates with Adyen for KYC
                and the insights reporting dashboard which presents data in a
                structured way to track company performance.
              </li>
              <li>
                Developed and conducted interviews with prospective engineers to
                assess technical skills and alignment with team objectives.
                Collaborated with hiring managers to evaluate candidates and
                provide recommendations for selection, contributing to building
                a strong engineering team.
              </li>
              <li>
                Replaced passwordless authentication (magic links) with an
                advanced open-source security software called{' '}
                <a
                  href='https://www.ory.sh/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Ory
                </a>
                .
              </li>
              <li>
                Managed the migration of webhook callbacks into a centralized
                service that receives all webhooks from integrations and
                transforms into messages using an outbox pattern to prevent data
                loss if either the message broker or the database is down.
              </li>
              <b>Skills: </b>Ory (Kratos, Hydra), OAuth2 protocol, OpenID
              Connect (OIDC) protocol, Multi-Factor Authentication (MFA), TOTP,
              Webhook.
            </ul>
          </div>
          <div>
            <strong>Software Engineer, Alternative Payments</strong>
            <em>February 2022 - October 2023 (USA, remote)</em>
            <ul>
              <li>
                Provided an integrated B2B payments and checkout infrastructure
                for service-based businesses.
              </li>
              <li>
                Implemented efficient navigation in our data-driven UI by
                introducing table pagination and better caching strategies in
                Apollo, resulting in reduced load times and improved
                performance.
              </li>
              <li>
                Maintained highly-scalable and containerized microservices in
                Go.
              </li>
              <li>
                Successfully designed and built the email service from the
                ground up, guaranteeing reliability and seemless communication
                using RabbitMQ messages.
                <ul>
                  <li>
                    It was developed with a smart internal engine to handle the
                    logic for all templates:{' '}
                    <a
                      href='https://www.brenobaptista.com/posts/model-for-microservices-oriented-email-service'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      brenobaptista.com/posts/model-for-microservices-oriented-email-service
                    </a>
                  </li>
                  <li>
                    It allowed communication to our customers even when other
                    services were down by leveraging cron jobs and caching.
                  </li>
                  <li>
                    It automatically applied customized brand logo and colors
                    for each partner.
                  </li>
                </ul>
              </li>
              <b>Skills: </b>Go, TypeScript, Tailwind, React.js, Next.js,
              Cypress, GraphQL, RabbitMQ, CockroachDB, Docker
            </ul>
          </div>
          <div>
            <strong>Full-Stack Developer, Massive</strong>
            <em>January 2020 - January 2022 (USA, remote)</em>
            <ul>
              <li>
                Fought intrusive advertising by offering monetization of apps at
                the cost of unused CPU/GPU using cryptocurrencies, blockchain
                and web3 instead of personal attention and data.
              </li>
              <li>
                Helped businesses comply with data laws (GDPR/CCPA) easily by
                developing WordPress and Shopify plugins that integrate with our
                custom scripts.
              </li>
              <li>
                Led efforts to vastly reduce technical debt in web and desktop
                apps, launching a refactored partner dashboard with better UI/UX
                and performance.
              </li>
              <li>
                Rewrote the codebase to hooks in React 16.8, resulting in a
                reduction of ~30% in size, making the application easier to
                maintain.
              </li>
              <b>Skills: </b>JavaScript, PHP, React.js, Jest, Node.js,
              Express.js, MongoDB, Firebase, AWS, Serverless, SES
            </ul>
          </div>
        </Section>
      </Content>
    </Page>

    <Page>
      <Content>
        <Section>
          <div>
            <strong>Product Owner, Acens</strong>
            <em>February 2019 - January 2020 (Brazil)</em>
            <ul>
              <li>
                Helped businesses build an online presence by managing a small
                team that developed high-impact projects to our customers.
              </li>
              <li>
                Improved the organization productivity by enforcing agile across
                the company.
              </li>
              <li>
                Took part in critical product decisions during sprint meetings
                and calls with customers.
              </li>
              <b>Skills: </b>Scrum, JavaScript, HTML, CSS, Git, SEO, WordPress
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
                github.com/brenobaptista/blog
              </a>
              <br />
              <b>Skills: </b>TypeScript, Styled Components, React.js, Next.js,
              Jest, React Testing Library
            </li>
            <li>
              <i>Tailwind Dashboard Template: </i>
              <a
                href='https://github.com/brenobaptista/plume-dashboard'
                target='_blank'
                rel='noreferrer noopener'
              >
                github.com/brenobaptista/plume-dashboard
              </a>
              <br />
              <b>Skills: </b>TypeScript, Tailwind, React.js, Next.js
            </li>
            <li>
              <i>APR Service for Vehicle Loans: </i>
              <a
                href='https://github.com/brenobaptista/apr-service'
                target='_blank'
                rel='noreferrer noopener'
              >
                github.com/brenobaptista/apr-service
              </a>
              <br />
              <b>Skills: </b>TypeScript, Node.js, Express.js, Jest, Yarn
              Workspaces
            </li>
            <li>
              <i>Deno URL Shortener Service: </i>
              <a
                href='https://github.com/brenobaptista/deno-url-shortener'
                target='_blank'
                rel='noreferrer noopener'
              >
                github.com/brenobaptista/deno-url-shortener
              </a>
              <br />
              <b>Skills: </b>TypeScript, Deno, Postgres, Docker
            </li>
            <li>
              <i>React Native iOS Calculator: </i>
              <a
                href='https://github.com/brenobaptista/ios-calculator-react-native'
                target='_blank'
                rel='noreferrer noopener'
              >
                github.com/brenobaptista/ios-calculator-react-native
              </a>
              <br />
              <b>Skills: </b>JavaScript, React Native, Expo
            </li>
            <li>
              <i>React Native Pomodoro: </i>
              <a
                href='https://github.com/brenobaptista/pomodoro-react-native'
                target='_blank'
                rel='noreferrer noopener'
              >
                github.com/brenobaptista/pomodoro-react-native
              </a>
              <br />
              <b>Skills: </b>JavaScript, React Native, Expo, Unit Testing (Jest
              and Enzyme), Redux
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
          <div>
            <strong>
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </strong>
            <div>Udemy (2019)</div>
          </div>
          <div>
            <strong>
              NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)
            </strong>
            <div>Udemy (2019)</div>
          </div>
        </Section>
      </Content>
    </Page>
  </>
)

export default Resume
