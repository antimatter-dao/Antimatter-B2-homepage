import styled from "styled-components";
import Lottie from "lottie-react";

import Button from "../../shared/Button/Button";
import Chart from '../../../public/AnimationJson/сhart.json'
import {useRouter} from "next/router";

const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;
`;

const Content = styled.div`
  display: flex;
  background: #121212;
  margin: 0 auto;
  border-radius: 30px;
  max-width: 1200px;

  @media (min-width: 360px) and (max-width: 992px) {
   flex-direction: column;
    margin: 0 16px;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 82px 43px;
  box-sizing: border-box;

  @media (min-width: 360px) and (max-width: 992px) {
    padding: 44px 24px;
  }
`;

const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerImg = styled.div`
  width: 455px;
  height: 451px;


  @media (min-width: 360px) and (max-width: 992px) {
    width: 300px;
    height: 300px;
  }
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

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
  }
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

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 18px;
    padding-bottom: 0;
  }
`;

const CustomButton = styled.div`
  width: 320px;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`


const AboutB2 = () => {
  const router = useRouter()
  const onClick = async () => {
    await router.push('https://docs.antimatter.finance/introduction/antimatter-overview')
  }
  return(
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
            <Button onClick={onClick}>Explore Documents</Button>
          </CustomButton>
        </ContentInfo>
        <WrapperImg>
          <ContainerImg>
            <Lottie animationData={Chart} autoplay={true} loop={true}/>
          </ContainerImg>
        </WrapperImg>
      </Content>
    </Wrapper>
  )
}

export default AboutB2