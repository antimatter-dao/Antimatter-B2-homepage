import styled from "styled-components";
import Lottie from "lottie-react";

import Vector from "../../../public/icon-vector.svg";
import Pig from "../../../public/AnimationJson/pig.json";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 120px;
`;

const Content = styled.div`
  display: flex;
  margin: 0 120px;
  flex-direction: column;
`;

const Blocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 233px 233px;
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
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  max-width: 387px;
  box-sizing: border-box;
  padding: 32px 24px;
  min-width: 387px;
  max-height: 233px;
  background: #121212;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  
  &:hover{
    background: #F8D448;
    transition: .7s;
   
    h3{
      color: #121212 !important;
    }
    span{
      color: #121212 !important;
    }
    svg{
      circle{
        stroke: #000000
      }
      path{
        stroke: #000000
      }
    }
  }
`;

const SubTitle = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 124%;
  color: #FFFFFF;
  padding-bottom: 43px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #FFFFFF;
  opacity: 0.8;
`;

const AntimatterDapps = () => {
  return (<Wrapper>
    <Content>
      <Title>Built-in Antimatter DApps</Title>
      <Blocks>
        <Block>
          <SubTitle>Quanto Trading <Vector /></SubTitle>
          <Description>
            Cross-currency derivatives platform. Options are settled in another currency than the underlying asset.
          </Description>
        </Block>
        <Block>
          <SubTitle>
            Bull & Bear <Vector />
          </SubTitle>
          <Description>
            Tokenized perpetual options.
            No forced liquidation, non-oracle based.
          </Description>
        </Block>
        <Block>
          <SubTitle>DAO <Vector /></SubTitle>
          <Description>
            A club for derivatives fanatics. Share your ideas and collaborate. On-chain governance.
          </Description>
        </Block>
        <Block>
          <SubTitle>Structured <Vector /></SubTitle>
          <Description>
            A platform for structured products. Earn yield based on underlying assets.
          </Description>
        </Block>
        <Block>
          <SubTitle>Nonfungible <Vector /></SubTitle>
          <Description>
            NFTs as a vehicle or container to facilitate financial activities.
          </Description>
        </Block>
        <Lottie animationData={Pig} autoplay={true} loop={true}/>
      </Blocks>
    </Content>
  </Wrapper>)
}

export default AntimatterDapps