import styled from "styled-components";

const Content = styled.div`
  display: flex;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F1F3;
  border-radius: 30px;
  padding: 28px 24px;
  box-sizing: border-box;
  max-height: 214px;
  min-height: 214px;
  max-width: 285px;
  margin-right: 20px;
`;

const InfoBlockTitle = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 124%;
  color: #121212;
  padding-bottom: 16px;
`;

const InfoBlockDescription = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #121212;
  opacity: 0.8;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 120px;
  margin-top: 120px;
`;

const SecondBlock = () => (
  <Wrapper>
    <Content>
      <InfoBlock>
        <InfoBlockTitle>Scalability</InfoBlockTitle>
        <InfoBlockDescription>
          Increased throughput and low transaction fees
        </InfoBlockDescription>
      </InfoBlock>
      <InfoBlock>
        <InfoBlockTitle>Financial Infrastructure</InfoBlockTitle>
        <InfoBlockDescription>
          B2 is optimized to facilitate financial DApps
        </InfoBlockDescription>
      </InfoBlock>
      <InfoBlock>
        <InfoBlockTitle>Security</InfoBlockTitle>
        <InfoBlockDescription>
          A set of community-owned validators validate transactions on the blockchain
        </InfoBlockDescription>
      </InfoBlock>
      <InfoBlock>
        <InfoBlockTitle>Ecosystem</InfoBlockTitle>
        <InfoBlockDescription>
          Powering an ecosystem of Financial applications and Web3 Consumer apps
        </InfoBlockDescription>
      </InfoBlock>
    </Content>
  </Wrapper>
)
export default SecondBlock