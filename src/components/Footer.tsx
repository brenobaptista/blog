import { Nav, Separator } from '../styles/components/Footer'

const Footer = (): JSX.Element => (
  <footer>
    <Separator />
    <Nav>
      <a
        href='https://github.com/brenobaptista/'
        target='_blank'
        rel='noreferrer noopener'
      >
        GitHub
      </a>
      <a href='mailto:brenobaptista@protonmail.com'>Email</a>
      <a
        href='https://brenobaptista.vercel.app/rss.xml'
        target='_blank'
        rel='noreferrer noopener'
      >
        RSS
      </a>
      <a href='/donations'>Donations</a>
    </Nav>
  </footer>
)

export default Footer
