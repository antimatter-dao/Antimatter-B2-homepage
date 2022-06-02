import styled from "styled-components";
import Marquee from "react-fast-marquee";
import Partner2 from "../../../public/partners2.svg";
import Partner3 from "../../../public/partners3.svg";
import Partner4 from "../../../public/partners4.svg";
import Partner5 from "../../../public/partners5.svg";

const Wrapper = styled.div`
  display: flex;
  background: #121212;
  min-height: 440px;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #ffffff;
  margin-bottom: 120px;
  margin-top: 80px;
  margin-left: 120px;
`;

const Container  = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgContainer  = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 75px;
  padding-bottom: ${props => props?.paddingBottom ? props?.paddingBottom : '0px'};
`;

const Partners = () => {
  return <Wrapper>
    <Title>Our strategic partners</Title>
    <Marquee gradient={false} speed={90}>
      <Container>
        <ImgContainer>
          <img src="./partners-1.svg" alt="partners"/>
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
        <ImgContainer paddingBottom={'18px'}>
          <img src="./partners-6.svg" alt="partners"/>
        </ImgContainer>
      </Container>
    </Marquee>
  </Wrapper>
}

export default Partners