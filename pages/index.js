import styled from "styled-components";
import Slider from "../components/Slider";
import SecondBlock from "../components/HomePage/SecondBlock/SecondBlock";
import ThirdBlock from "../components/HomePage/ThirdBlock/ThirdBlock";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirstBlock from "../components/HomePage/FirstBlock/FirstBlock";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

const FourthBlock = styled.div`
  display: flex;
`;

const FifthBlock = styled.div`
  display: flex;
`;

const SixthBlock = styled.div`
  display: flex;
`;

const SeventhBlock = styled.div`
  display: flex;
`;

const EighthBlock = styled.div`
  display: flex;
`;

export default function Home() {
  const sliderContent = ['Scalability', 'icon', 'Financial Infrastructure', 'icon', 'Security', 'icon', 'Ecosystem', 'icon', 'Financial support', 'icon']
  const sliderImages = [{name: 'img', img: 'img1.jpg'}, {name: 'img', img: 'img2.jpg'}, {
    name: 'img',
    img: 'img3.jpg'
  }, {name: 'img', img: 'img4.jpg'}, {name: 'img', img: 'img5.jpg'}, {name: 'img', img: 'img6.jpg'}]

  return (
      <Wrapper>
        <Header />
        <FirstBlock />
        <Slider sliderContent={sliderContent}/>
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock></FourthBlock>
        <FifthBlock></FifthBlock>
        <SixthBlock></SixthBlock>
        <SeventhBlock></SeventhBlock>
        <EighthBlock></EighthBlock>
        <Footer />
      </Wrapper>
  );
}


