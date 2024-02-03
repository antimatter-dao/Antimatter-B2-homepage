import { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { format } from "date-fns";
import { ParallaxProvider } from "react-scroll-parallax";
import { parse } from "rss-to-json";
import { parse as htmlParse } from "node-html-parser";
import { useLottie } from "lottie-react";

import Slider from "../components/Slider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainBlock from "../components/HomePage/MainBlock/MainBlock";
import AboutB2 from "../components/HomePage/AboutB2/AboutB2";
import Features from "../components/HomePage/Features/Features";
import AntimatterDapps from "../components/HomePage/AntimatterDapps/AntimatterDapps";
import BackedBy from "../components/HomePage/BackedBy/BackedBy";
import Partners from "../components/HomePage/Partners/Partners";
import Blog from "../components/HomePage/Blog/Blog";
import InformationAboutB2 from "../components/HomePage/InformationAboutB2/InformationAboutB2";
import LoaderBar from "../public/loader.json";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (min-width: 360px) and (max-width: 992px) {
    overflow: hidden;
  }
`;

const Loading = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #000000;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockAnimation = styled.div`
  z-index: 9999;
  width: 100px;
  height: 100px;
`

const sliderContent = ["Scalability", "icon", "Financial Infrastructure", "icon", "Security", "icon", "Ecosystem", "icon", "Financial Support", "icon", "Scalability", "icon", "Financial Infrastructure", "icon", "Security", "icon", "Ecosystem", "icon"];

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef()

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad()
    }
  })

  return [ref, loaded, onLoad]
}

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (!props?.loaded ? "hidden" : "auto")}
  }
`;

const optionsLoader = {
  animationData: LoaderBar,
  autoplay: true,
  loop: true,
};

export default function Home({ posts }) {
  const [ref, loaded, onLoad] = useImageLoaded()
  const animationLoader = useLottie(optionsLoader);

  return (
    <ParallaxProvider>
      <Wrapper>
        {!loaded && (
          <Loading>
            <BlockAnimation>
              {animationLoader.View}
            </BlockAnimation>
          </Loading>
        )}
        <Header />
        <MainBlock ref={ref} loaded={loaded} onLoad={onLoad} />
        <Slider sliderContent={sliderContent} />
        <InformationAboutB2 />
        <AboutB2 />
        <Features />
        <AntimatterDapps />
        <BackedBy />
        <Partners />
        <Blog posts={posts} />
        <Footer />
      </Wrapper>
      <GlobalStyle loaded={loaded} />
    </ParallaxProvider>
  )
}

const mapRss = (posts) => {
  return posts.map((post) => {
    return {
      title: post.title,
      date: format(new Date(post.published), "LLL d, yyyy"),
    };
  });
};

export async function getServerSideProps(context) {
  const rss = await parse("https://medium.com/@bitunebtc/feed");
  const posts = rss.items.slice(0, 6);
  const mappedPosts = posts.map((post) => {
    const html = htmlParse(post.content);
    const img = html.querySelector("img").getAttribute("src");
    const description = html.querySelector("p").textContent;

    return {
      title: post.title,
      date: format(new Date(post.published), "LLL d, yyyy"),
      img,
      link: post.link,
      description
    };
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(mappedPosts)),
    },
  };
}
