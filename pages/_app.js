import React from 'react'
import Head from "next/head";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <React.Fragment>
      <Head>
        <title>Ant matter b2</title>
        <meta name="description" content="Ant matter b2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
