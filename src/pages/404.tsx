import Head from 'next/head'
import Image from 'next/image'

import pitucho from 'public/images/pitucho.jpg'
import Layout from '@/components/Layout'

const Custom404 = (): JSX.Element => (
  <Layout>
    <Head>
      <title>404: Not found</title>
      <meta name='description' content='404: Not found' />
    </Head>
    <h1>404: NOT FOUND</h1>
    <p>
      It seems you have found something that used to exist or you spelled
      something wrong. But at least you have found Pitucho:
    </p>
    <Image src={pitucho} alt='Pitucho' />
  </Layout>
)

export default Custom404
