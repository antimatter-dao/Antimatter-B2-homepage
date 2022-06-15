import styled from "styled-components";

import Twitter from "../../../public/Networks/TwitterColor.svg";
import Telegram from "../../../public/Networks/telegramColor.svg";
import Medium from "../../../public/Networks/mediumColor.svg";
import Discord from "../../../public/Networks/discord.svg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 542px;
  min-height: 542px;
  background: #121212;

  @media (min-width: 360px) and (max-width: 992px) {
    max-height: max-content;
    min-height: max-content;
    padding-bottom: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 120px;
  padding-top: 80px;
  width: 100%;

  @media (min-width: 360px) and (max-width: 992px) {
    margin: 0 16px;
    padding-top: 50px;
  }
`;

const Title = styled.h1`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #FFFFFF;
  margin: 0;
  padding-bottom: 60px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
    padding-bottom: 28px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`
const Block = styled.div`
  background: #F0F1F3;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  max-width: 285px;
  min-width: 285px;
  
  min-height: 214px;
  max-height: 214px;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-bottom: 10px;
  }
`

const BlockTitle = styled.h3`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 124%;
  color: #121212;
  padding-top: 30px;
`

const BlockDescription = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 145%;
  color: #1B1A1F;
`

const Icon = styled.div`
  width: 50px;
  height: 40px;
`

const StayWithUs = () => (
  <Wrapper>
    <Container>
      <Title>Stay with us</Title>
      <Content>
        <Block>
          <Icon>
            <Twitter />
          </Icon>
          <BlockTitle>Twitter</BlockTitle>
          <BlockDescription>Announcements and updates</BlockDescription>
        </Block>
        <Block>
          <Icon>
            <Telegram />
          </Icon>
          <BlockTitle>Telegram</BlockTitle>
          <BlockDescription>Support and discussion</BlockDescription>
        </Block>
        <Block>
          <Icon>
            <Medium />
          </Icon>
          <BlockTitle>Medium</BlockTitle>
          <BlockDescription>Blogs and tutorials</BlockDescription>
        </Block>
        <Block>
          <Icon>
            <Discord />
          </Icon>
          <BlockTitle>Discord</BlockTitle>
          <BlockDescription>Community, support, discussion</BlockDescription>
        </Block>
      </Content>
    </Container>
  </Wrapper>
)

export default StayWithUs