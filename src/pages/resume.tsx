import Head from 'next/head'

import { Email, GitHub, RSS } from '../components/svgs'
import {
  PrintingRules,
  Page,
  Content,
  Header,
  Author,
  Social,
  Section
} from '../styles/pages/Resume'

const Resume = (): JSX.Element => (
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
            <div>Full-Stack Developer</div>
          </Author>
          <Social>
            <div>
              <a
                href='mailto:brenobaptista@protonmail.com'
                aria-label='Contact me by email'
              >
                <Email width={16} height={16} />
                <span>brenobaptista@protomail.com</span>
              </a>
            </div>
            <div>
              <a
                href='https://www.brenobaptista.tech/'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='My blog'
              >
                <RSS width={16} height={16} />
                brenobaptista.tech
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
          </Social>
        </Header>
        <p>
          I’m a full-stack developer who likes to explore new things every day.
          I’m interested in everything that involves GNU/Linux, shell scripting,
          open-source software, privacy and front-end web technologies.
        </p>
        <Section>
          <h2>EXPERIENCE</h2>
          <div>
            <b>Software Engineer, Massive</b>
            <i>August 2020 - Present (USA, remote)</i>
            <ul>
              <li>
                Fought intrusive advertising by developing desktop apps to
                connect partners with our SDK.
              </li>
              <li>
                Led efforts to vastly reduce technical debt in systems,
                launching a refactored partner dashboard with better UI/UX and
                performance.
              </li>
            </ul>
          </div>
          <div>
            <b>Jr. Full-Stack Developer, Privacy Pixel</b>
            <i>January 2020 - August 2020 (USA, remote)</i>
            <ul>
              <li>
                Helped businesses comply with data laws (GDPR/CCPA) with our
                plugins.
              </li>
              <li>
                Developed internal tools to increase developer efficiency using
                Bash.
              </li>
            </ul>
          </div>
          <div>
            <b>Product Owner, Acens</b>
            <i>February 2019 - January 2020 (Brazil)</i>
            <ul>
              <li>Volunteered to help businesses build online an presence.</li>
              <li>
                Managed several projects and improved the organization
                productivity by enforcing agile across the company.
              </li>
            </ul>
          </div>
        </Section>
        <Section>
          <h2>EDUCATION</h2>
          <div>
            <b>Bachelor’s Degree in Computer Science</b>
            <div>Unifacvest University Center (2019 - 2023)</div>
          </div>
          <div>
            <b>Scrum Fundamentals Certified (SFC™)</b>
            <div>
              SCRUMstudy - Accreditation Body for Scrum and Agile (2020)
            </div>
          </div>
        </Section>
        <Section>
          <h2>SKILLS</h2>
          <div>JavaScript, TypeScript, Go, Bash</div>
          <div>
            HTML, CSS, Sass, Styled Components, Tailwind, React, React Native,
            Next.js, Accessibility, Jest/RTL
          </div>
          <div>Node.js, Express, Fiber, Chi, MongoDB, Postgres</div>
          <div>Git, Docker, AWS, GNU/Linux, Yarn Workspaces, CI/CD</div>
        </Section>
      </Content>
    </Page>
  </>
)

export default Resume
