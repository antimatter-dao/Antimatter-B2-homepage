import styled from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";
import { format } from "date-fns";
import { parse } from "rss-to-json";
import { parse as htmlParse } from "node-html-parser";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Blog from "../components/HomePage/Blog/Blog";
import Resources from "../components/AntimatterDocumentsPage/Resources/Resources";
import MainBlock from "../components/AntimatterDocumentsPage/MainBlock";
import StayWithUs from "../components/AntimatterDocumentsPage/StayWithUs/StayWithUs";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export default function AntimatterDocuments({ posts }) {
  return (
    <ParallaxProvider>
      <Wrapper>
        <Header fill={"white"} />
        <MainBlock />
        <Resources />
        <Blog posts={posts} />
        <StayWithUs />
        <Footer />
      </Wrapper>
    </ParallaxProvider>
  );
}

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
      description,
    };
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(mappedPosts)),
    },
  };
}
