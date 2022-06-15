import styled from "styled-components";
import {useLottie} from "lottie-react";
import { useEffect } from "react";

import Guy1 from "../../../public/AnimationJson/guy1.json";
import Guy2 from "../../../public/AnimationJson/guy2.json";
import Guy3 from "../../../public/AnimationJson/guy3.json";
import Twitter from "../../../public/twitter.svg";
import Partner1 from "../../../public/monday-capital.svg";
import Partner2 from "../../../public/NGC.svg";
import Partner3 from "../../../public/huobi.svg";


const Wrapper = styled.div`
  display: flex;
  margin-bottom: 120px;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  margin: 0 120px;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: 360px) and (max-width: 992px) {
    margin: 0 16px;
    align-items: center;
  }
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

  @media (min-width: 360px) and (max-width: 992px) {
    margin-bottom: 28px;
    font-size: 28px;
  }
`;

const Guys = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 360px) and (max-width: 992px) {
   flex-direction: column;
  }
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

  @media (min-width: 360px) and (max-width: 992px) {
    padding-bottom: 20px;
  }
`;

const InfoGuy = styled.div`
  display: flex;
  margin-top: 31px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: row;
  }
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

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    padding: 48px 10px;
    margin-top: 32px;
    min-height: max-content;
    
    svg{
      margin-bottom: 36px;
      
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
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

const optionsGuy1 = {
  animationData: Guy1,
  autoplay: false
};

const optionsGuy2 = {
  animationData: Guy2,
  autoplay: false
};

const optionsGuy3 = {
  animationData: Guy3,
  autoplay: false
};

const BackedBy = () => {
  const animationGuy1 = useLottie(optionsGuy1);
  const animationGuy2 = useLottie(optionsGuy2);
  const animationGuy3 = useLottie(optionsGuy3);


  useEffect(()=>{
    setTimeout(()=> animationGuy1.play(), 500)
    setTimeout(()=> animationGuy2.play(), 100)
    setTimeout(()=> animationGuy3.play(), 1000)
  },[])

  return (
    <Wrapper>
      <Content>
        <Title>Backed by</Title>
        <Guys>
          <Container>
            <ContainerImg>
              {animationGuy1.View}
            </ContainerImg>
            <InfoGuy>
              <Name>Tekin Salimi</Name>
              <IconSocial><Twitter/></IconSocial>
            </InfoGuy>
          </Container>
          <Container>
            <ContainerImg>
              {animationGuy2.View}
            </ContainerImg>
            <InfoGuy>
              <Name>Justin Sun</Name>
              <IconSocial><Twitter/></IconSocial>
            </InfoGuy>
          </Container>
          <Container>
            <ContainerImg>
              {animationGuy3.View}
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