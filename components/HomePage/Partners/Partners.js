import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import Partner2 from "../../../public/partners/partners2.svg";
import Partner3 from "../../../public/partners/partners3.svg";
import Partner4 from "../../../public/partners/partners4.svg";
import Partner5 from "../../../public/partners/partners5.svg";
import Partner7 from "../../../public/partners/partners7.svg";
import Partner9 from "../../../public/partners/partners9.svg";

const Wrapper = styled.div`
  display: flex;
  background: #121212;
  min-height: 440px;
  flex-direction: column;

  @media (min-width: 360px) and (max-width: 992px) {
    min-height: 280px;
    align-items: center;
  }
`;

const Title = styled.h1`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 120px;
  margin-top: 80px;
  margin-left: 120px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
    margin: 52px 12px 28px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 75px;
  padding-bottom: ${(props) => (props?.paddingBottom ? props?.paddingBottom : "0px")};
`;

const Img = styled.img``;

const Partners = () => (
  <Wrapper>
    <Title>Our strategic partners</Title>
    <Marquee gradient={false} speed={90}>
      <Container>
        <ImgContainer>
          <Img src="./partners/partners-1.svg" alt="partners" />
        </ImgContainer>
        <ImgContainer>
          <Partner2 />
        </ImgContainer>
        <ImgContainer>
          <Partner3 />
        </ImgContainer>
        <ImgContainer>
          <Partner4 />
        </ImgContainer>
        <ImgContainer>
          <Partner5 />
        </ImgContainer>
        <ImgContainer>
          <Partner7 />
        </ImgContainer>
        <ImgContainer>
          <Partner9 />
        </ImgContainer>
        <ImgContainer paddingBottom={"18px"}>
          <Img src="./partners/partners-6.svg" alt="partners" />
        </ImgContainer>
        <ImgContainer>
          <Img src="./partners/partners8.svg" alt="partners" />
        </ImgContainer>
        <ImgContainer>
          <Img src="./partners/partners10.svg" alt="partners" />
        </ImgContainer>
      </Container>
    </Marquee>
  </Wrapper>
);

export default Partners;
