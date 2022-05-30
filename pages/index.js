import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Ant matter b2</title>
        <meta name="description" content="Ant matter b2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Wrapper>
  );
}
