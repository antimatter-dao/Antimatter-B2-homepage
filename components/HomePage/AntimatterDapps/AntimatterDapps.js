import styled from "styled-components";

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
  grid-template-rows: 1fr 1fr;
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
  background: #121212;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Icon = styled.img``;

const SubTitle = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 124%;
  color: #FFFFFF;
  padding-bottom: 43px;
  margin: 0;
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
          <SubTitle>Quanto Trading</SubTitle>
          <Description>
            Cross-currency derivatives platform. Options are settled in another currency than the underlying asset.
          </Description>
        </Block>
        <Block>
          <SubTitle>Bull & Bear</SubTitle>
          <Description>
            Tokenized perpetual options.
            No forced liquidation, non-oracle based.
          </Description>
        </Block>
        <Block>
          <SubTitle>DAO</SubTitle>
          <Description>
            A club for derivatives fanatics. Share your ideas and collaborate. On-chain governance.
          </Description>
        </Block>
        <Block>
          <SubTitle>Structured</SubTitle>
          <Description>
            A platform for structured products. Earn yield based on underlying assets.
          </Description>
        </Block>
        <Block>
          <SubTitle>Nonfungible</SubTitle>
          <Description>
            NFTs as a vehicle or container to facilitate financial activities.
          </Description>
        </Block>
      </Blocks>
    </Content>
  </Wrapper>)
}

export default AntimatterDapps