import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <React.Fragment>
      <Head>
        <title>Antimatter B2</title>
        <meta name="description" content="Antimatter powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens nad NFTs across multiple blockchains" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Antimatter B2" />
        <meta property="og:url" content="https://antimatter.finance/" />
        <meta property="og:description" content="Antimatter powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens nad NFTs across multiple blockchains" />
        <meta property="og:image" content='https://antimatter.finance/antimatter_social.jpg' />
        <meta property="og:image:width" content={600} />
        <meta property="og:image:height" content={1146} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="https://antimatter.finance/" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="https://antimatter.finance/" />
        <meta property="twitter:title" content="Antimatter B2" />
        <meta property="twitter:description" content="Antimatter powers an ecosystem of products for auctions. Build, design, connect, collect and trade all kinds of assets, tokens nad NFTs across multiple blockchains"  />
        <meta property="twitter:image" content='https://antimatter.finance/antimatter_social.jpg' />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
