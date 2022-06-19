import styled from "styled-components";
import Logo from "../../public/antimatterLogo.svg";

import Twitter from "../../public/Networks/twitter.svg";
import GitHub from "../../public/Networks/gitHub.svg";
import Telegram from "../../public/Networks/telegram.svg";
import Social from "../../public/Networks/social.svg";

const Wrapper = styled.div`
  background: #121212;
  width: 100%;
  border-top: 1px solid #ffffff;
`;

const Container = styled.div`
  padding: 60px 0 40px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 420px;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 360px) and (max-width: 992px) {
    height: 100vh;
    padding: 50px 16px;
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column-reverse;
    margin-top: 56px;
  }
`;

const BlockMenu = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-wrap: wrap;
    padding-top: 48px;
    align-items: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 0 200px;

    @media (min-width: 360px) and (max-width: 992px) {
      padding: 0 60px;
      margin-bottom: 32px;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  padding-bottom: 25px;
  margin: 0;
`;

const Link = styled.a`
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  opacity: 0.6;
  padding-bottom: 17px;
  cursor: pointer;
`;

const Privacy = styled.span`
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  opacity: 0.7;
`;

const SocialNetworkBlock = styled.div`
  display: flex;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-bottom: 36px;
  }
`;

const SocialNetworkIcon = styled.div`
  padding-left: 40px;
  cursor: pointer;

  @media (min-width: 360px) and (max-width: 992px) {
    &:first-child {
      padding-left: 0;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo />
          <BlockMenu>
            <Column>
              <ColumnTitle>DApps</ColumnTitle>

              <Link>Quanto</Link>
              <Link href="https://app.antimatter.finance">Bull & Bear</Link>
              <Link href="https://invest.antimatter.finance">Structured</Link>
              <Link href="https://nonfungible.finance">Nonfungible</Link>
              <Link href="https://dao.antimatter.finance">DAO</Link>
            </Column>
            <Column>
              <ColumnTitle>Developers</ColumnTitle>

              <Link>GitHub</Link>
              <Link href="https://docs.antimatter.finance/introduction/antimatter-overview">Documentation</Link>
            </Column>
            <Column>
              <ColumnTitle>B2</ColumnTitle>

              <Link>Whitepaper</Link>
              <Link>Resources</Link>
            </Column>
          </BlockMenu>
        </Content>
        <ContentBottom>
          <Privacy>©2022 Antimatter dao Ltd. All rights reserved. / Notice and Disclaimer</Privacy>
          <SocialNetworkBlock>
            <SocialNetworkIcon>
              <a>
                <Social />
              </a>
            </SocialNetworkIcon>
            <SocialNetworkIcon>
              <a href="https://twitter.com/antimatterdefi">
                <Twitter />
              </a>
            </SocialNetworkIcon>
            <SocialNetworkIcon>
              <a href="t.me/antimatterdefi">
                <Telegram />
              </a>
            </SocialNetworkIcon>
            <SocialNetworkIcon>
              <GitHub />
            </SocialNetworkIcon>
          </SocialNetworkBlock>
        </ContentBottom>
      </Container>
    </Wrapper>
  );
};

export default Footer;
