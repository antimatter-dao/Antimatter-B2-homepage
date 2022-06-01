import styled from "styled-components";
import Lottie from "lottie-react";
import Guy1 from "../../../public/guy1.json";
import Guy2 from "../../../public/guy2.json";
import Guy3 from "../../../public/guy3.json";
import Twitter from "../../../public/twitter.svg";
import Partner1 from "../../../public/monday-capital.svg";
import Partner2 from "../../../public/NGC.svg";
import Partner3 from "../../../public/huobi.svg";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 120px;
`;

const Content = styled.div`
  display: flex;
  margin: 0 120px;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #000000;
  margin-bottom: 60px;
`;

const Guys = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const ContainerImg = styled.div`
  width: 224px;
  height: 224px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoGuy = styled.div`
  display: flex;
  margin-top: 31px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Partners = styled.div`
  display: flex;
  background: #F0F1F3;
  border-radius: 30px;
  width: 100%;
  min-height: 143px;
  margin-top: 64px;
  justify-content: space-around;
  align-items: center;
`

const Name = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 124%;
  text-align: right;
  color: #1B1A1F;
  padding-right: 16px;
`;

const IconSocial = styled.a``


const BackedBy = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Backed by</Title>
        <Guys>
          <Container>
            <ContainerImg>
              <Lottie animationData={Guy1} autoplay={true} loop={true}/>
            </ContainerImg>
            <InfoGuy>
              <Name>Tekin Salimi</Name>
              <IconSocial><Twitter/></IconSocial>
            </InfoGuy>
          </Container>
          <Container>
            <ContainerImg>
              <Lottie animationData={Guy2} autoplay={true} loop={true}/>
            </ContainerImg>
            <InfoGuy>
              <Name>Justin Sun</Name>
              <IconSocial><Twitter/></IconSocial>
            </InfoGuy>
          </Container>
          <Container>
            <ContainerImg>
              <Lottie animationData={Guy3} autoplay={true} loop={true}/>
            </ContainerImg>
            <InfoGuy>
              <Name>Brian Lee</Name>
              <IconSocial><Twitter/></IconSocial>
            </InfoGuy>
          </Container>
        </Guys>
        <Partners>
          <Partner1 />
          <Partner2 />
          <Partner3 />
        </Partners>
      </Content>
    </Wrapper>
  )
}

export default BackedBy