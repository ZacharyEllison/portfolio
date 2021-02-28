import Head from 'next/head'
import Headbar from '../components/headbar'
import Footer from '../components/footer'
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react'

export default function Layout({ preview, children }) {
  return (
    <>
      <Segment>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <title>Zachary Ellison</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Headbar />
        <main>
          {children}
        </main>
      </Segment>
      <Footer />
    </>
  )
}