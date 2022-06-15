import styled from "styled-components";
import {ParallaxProvider} from 'react-scroll-parallax';

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
`;

export default function AntimatterDocuments() {
  return (
    <ParallaxProvider>
      <Wrapper>
        <Header fill={'white'}/>
        <MainBlock />
        <Resources />
        <Blog/>
        <StayWithUs />
        <Footer/>
      </Wrapper>
    </ParallaxProvider>
  );
}