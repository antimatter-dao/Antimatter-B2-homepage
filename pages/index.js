import styled from "styled-components";
import { ParallaxProvider } from 'react-scroll-parallax';

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
const sliderContent = ['Scalability', 'icon', 'Financial Infrastructure', 'icon', 'Security', 'icon', 'Ecosystem', 'icon', 'Financial support', 'icon']

export default function Home() {

  return (
    <ParallaxProvider>
      <Wrapper>
        <Header/>
        <MainBlock/>
        <Slider sliderContent={sliderContent}/>
        <InformationAboutB2/>
        <AboutB2/>
        <Features/>
        <AntimatterDapps/>
        <BackedBy/>
        <Partners/>
        <Blog/>
        <Footer/>
      </Wrapper>
    </ParallaxProvider>
  );
}


