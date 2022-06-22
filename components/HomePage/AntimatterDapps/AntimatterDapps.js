import styled from "styled-components";
import Lottie from "lottie-react";

import Vector from "../../../public/icon-vector.svg";
import Pig from "../../../public/AnimationJson/pig.json";

const Wrapper = styled.div`
  display: flex;
  margin: 120px auto 0;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 360px) and (max-width: 992px) {
    margin: 0 16px;
    align-items: center;
  }
`;

const Blocks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 233px 233px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
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

const Block = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  max-width: 387px;
  box-sizing: border-box;
  padding: 32px 24px;
  min-width: 387px;
  height: 100%;
  background: #121212;
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

  @media (min-width: 360px) and (max-width: 992px) {
    min-width: 100%;
    max-width: 100%;
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

const AntimatterDapps = () => (
    <Wrapper>
    <Content>
      <Title>Built-in Antimatter DApps</Title>
      <Blocks>
        <a href="" target="_blank" rel="noreferrer">
          <Block>
            <SubTitle>Quanto Trading <Vector /></SubTitle>
            <Description>
              Cross-currency derivatives platform. Options are settled in another currency than the underlying asset.
            </Description>
          </Block>
        </a>
        <a href="https://app.antimatter.finance" target="_blank" rel="noreferrer">
          <Block>
            <SubTitle>
              Bull & Bear <Vector />
            </SubTitle>
            <Description>
              Tokenized perpetual options.
              No forced liquidation, non-oracle based.
            </Description>
          </Block>
        </a>
        <a href="https://dao.antimatter.finance" target="_blank" rel="noreferrer">
          <Block>
            <SubTitle>DAO <Vector /></SubTitle>
            <Description>
              A club for derivatives fanatics. Share your ideas and collaborate. On-chain governance.
            </Description>
          </Block>
        </a>
        <a href="https://invest.antimatter.finance" target="_blank" rel="noreferrer">
          <Block>
            <SubTitle>Structured <Vector /></SubTitle>
            <Description>
              A platform for structured products. Earn yield based on underlying assets.
            </Description>
          </Block>
        </a>
        <a href="https://nonfungible.finance" target="_blank" rel="noreferrer">
          <Block>
            <SubTitle>Nonfungible <Vector /></SubTitle>
            <Description>
              NFTs as a vehicle or container to facilitate financial activities.
            </Description>
          </Block>
        </a>
        <Lottie animationData={Pig} autoplay={true} loop={true}/>
      </Blocks>
    </Content>
  </Wrapper>
)

export default AntimatterDapps