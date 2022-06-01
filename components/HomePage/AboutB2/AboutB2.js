import styled from "styled-components";
import Lottie from "lottie-react";

import Button from "../../shared/Button/Button";
import Chart from '../../../public/сhart.json'

const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;

`;

const Content = styled.div`
  display: flex;
  background: #121212;
  margin: 0 120px;
  border-radius: 30px;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 82px 43px;
  box-sizing: border-box;
`;

const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerImg = styled.div`
  width: 455px;
  height: 451px;
`;

const ContentInfoTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #FFFFFF;
  margin: 0;
  padding-bottom: 36px;
`;

const ContentInfoDescription = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #FFFFFF;
  opacity: 0.8;
  padding-bottom: 81px;
`;

const CustomButton = styled.div`
  width: 320px;
`


const AboutB2 = () => (
  <Wrapper>
    <Content>
      <ContentInfo>
        <ContentInfoTitle>
          What is B2?
        </ContentInfoTitle>
        <ContentInfoDescription>
          B2 is a BNB sidechain based on the BAS framework. It solves network scalability problems by having a
          higher output of transactions and lower gas fees. B2 is built to facilitate the financial infrastructure
          of the Antimatter ecosystem.
        </ContentInfoDescription>
        <CustomButton>
          <Button>Explore Documents</Button>
        </CustomButton>
      </ContentInfo>
      <WrapperImg>
        <ContainerImg>
          <Lottie animationData={Chart} autoplay={true} loop={true}/>;
        </ContainerImg>
      </WrapperImg>
    </Content>
  </Wrapper>
)

export default AboutB2