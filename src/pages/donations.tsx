import Head from 'next/head'

import Layout from '../components/Layout'
import { Gratitude, Address } from '../styles/pages/Donations'

const Donations = (): JSX.Element => (
  <Layout>
    <Head>
      <title>Donate to Breno Baptista</title>
      <meta
        name='description'
        content='Support this blog by donating to the developer.'
      />
    </Head>
    <Gratitude>
      <h1>Donations</h1>
      <p>
        Thank you for checking out the content of this blog! I write blog posts
        to help developers <b>for free</b>. So if you want to support this
        project, please consider donating a small contribution.
      </p>
      <p>
        I have decided to create a <b>Monero</b> wallet to accept donations. It
        is currently the best way to receive payments privately. If you have
        another cryptocurrency, you can swap to Monero to donate.
      </p>
    </Gratitude>
    <Address>
      <h2>Monero address</h2>
      <img
        src='/static/images/monero-address.png'
        alt='Monero address'
        width='240'
        height='240'
      />
      <div>
        46JkqVvETvyZ1jYWwZfiRsPbvV52rpJzQBMTfXbpft8HVnXtRXKuaZCK9hoQJwmwom96ThyyeLwxNcPopkRCw3QsCin67Gy
      </div>
    </Address>
  </Layout>
)

export default Donations
