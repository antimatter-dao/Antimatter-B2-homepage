import styled from "styled-components";
import { format } from "date-fns";
import { ParallaxProvider } from "react-scroll-parallax";
import { parse } from "rss-to-json";
import { parse as htmlParse } from "node-html-parser";
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
const sliderContent = ["Scalability", "icon", "Financial Infrastructure", "icon", "Security", "icon", "Ecosystem", "icon", "Financial support", "icon", "Scalability", "icon", "Financial Infrastructure", "icon", "Security", "icon", "Ecosystem", "icon"];

export default function Home({ posts }) {
  return (
    <ParallaxProvider>
      <Wrapper>
        <Header />
        <MainBlock />
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
    </ParallaxProvider>
  );
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
  const rss = await parse("https://medium.com/feed/@antimatterdefi");
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
