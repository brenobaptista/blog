import Head from 'next/head'

import Layout from '../components/Layout'

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
    <img
      src='/static/images/pitucho.jpg'
      alt='Pitucho'
      width='768'
      height='576'
    />
  </Layout>
)

export default Custom404
