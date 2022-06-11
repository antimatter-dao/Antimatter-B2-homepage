import styled from "styled-components";
import { useParallax } from "react-scroll-parallax";

import Zap from "../../../public/zap.svg";
import Lock from "../../../public/lock.svg";
import LinkSolid from "../../../public/linkSolid.svg";
import Arc from "../../../public/arc.svg";


const Wrapper = styled.div`
  display: flex;
  margin: 120px 0;
`;

const Content = styled.div`
  display: flex;
  margin: 0 120px;
  flex-direction: column;
`;

const Blocks = styled.div`
  display: flex;
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

const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #121212;
  border-radius: 30px;
  max-width: 385px;
  box-sizing: border-box;
  padding: 32px 24px;
  min-width: 385px;
  min-height: 410px;
  
  &:nth-child(2){
    margin: 0 20px;
  }
`;

const IconBlock = styled.div`
  width: 60px;
  height: 60px;
  background: #31B047;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    animation: change-icon-color .5s ease-in-out infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
  }
`;

const SubTitle = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 124%;
  color: #121212;
  margin-bottom: 16px;
`;

const Description = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 145%;
  color: #1B1A1F;`;

const AnimationBlock = styled.div`
  position: absolute;
  top: -111px;
  right: 20px;
  transition: 4s;
  transform: translate(${props => props?.isVisible ? "0px, 30px": "0px 0px"});
`

const Features = () => {
  const parallaxArc = useParallax({
    translateY: [0, 60],
    speed: 20
  });

  return(
    <Wrapper>
      <Content>
        <Title>Features</Title>
        <Blocks>
          <Block>
            <IconBlock>
              <Zap />
            </IconBlock>
            <SubTitle>High-speed Transactions</SubTitle>
            <Description>
              B2 is designed for very high transaction outputs. This is achieved by having a smaller set of validators
            </Description>
          </Block>
          <Block>
            <IconBlock>
              <LinkSolid />
            </IconBlock>
            <SubTitle>On-chain Governance</SubTitle>
            <Description>
              A governance system let's B2 validator owners in the chain create new proposals and vote for them. Voting power is distributed based on the total delegated amount to the validator.
            </Description>
          </Block>
          <Block>
            <IconBlock>
              <Lock />
            </IconBlock>
            <SubTitle>Data Storage</SubTitle>
            <Description>
              B2 serves as a data storage of our Dapps. This way user records and transactions are stored in a decentralized way and we stay in sync with our multi-chain applications
            </Description>
            <AnimationBlock ref={parallaxArc.ref}>
              <Arc />
            </AnimationBlock>
          </Block>
        </Blocks>
      </Content>
    </Wrapper>
  )
}

export default Features