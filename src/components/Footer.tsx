import Link from 'next/link'
import RetroFooter from '@/components/RetroFooter'
import { Nav, Column, Separator } from '@/styles/components/Footer'

const Footer = () => (
  <footer>
    <Separator />
    <Nav>
      <Column>
        <a href='mailto:me@brenobaptista.com'>Email</a>
      </Column>
      <Column>
        <a
          href='https://github.com/brenobaptista/'
          target='_blank'
          rel='noreferrer noopener'
        >
          GitHub
        </a>
      </Column>
      <Column>
        <Link href='/rss.xml'>RSS</Link>
      </Column>

      <Column>
        <Link href='/resume'>Résumé</Link>
      </Column>
    </Nav>
    <RetroFooter />
  </footer>
)

export default Footer
