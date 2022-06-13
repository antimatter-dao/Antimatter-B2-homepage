import styled from "styled-components";
import Logo from "../../public/antimatterLogo.svg";

import Twitter from "../../public/Networks/twitter.svg";
import GitHub from "../../public/Networks/gitHub.svg";
import Telegram from "../../public/Networks/telegram.svg";
import Social from "../../public/Networks/social.svg";

const Wrapper = styled.div`
  background: #121212;
  width: 100%;
  border-top: 1px solid #FFFFFF;
`;

const Container = styled.div`
  padding: 60px 70px 40px 60px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 420px;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
    height: 100vh;
    padding: 50px 16px;
    justify-content: flex-start;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
   flex-direction: column;
  }
`

const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column-reverse;
    margin-top: 56px;
  }
`

const BlockMenu = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-wrap: wrap;
    padding-top: 48px;
    align-items: flex-start;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 0 200px;

    @media (min-width: 360px) and (max-width: 992px) {
      padding: 0 74px;
      margin-bottom: 32px;
    }
  }
`

const ColumnTitle = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  color: #FFFFFF;
  padding-bottom: 25px;
  margin: 0;
`

const Link = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
  opacity: 0.6;
  padding-bottom: 17px;
  cursor: pointer;
`

const Privacy = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
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
    &:first-child{
      padding-left: 0;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo/>
          <BlockMenu>
            <Column>
              <ColumnTitle>DApps</ColumnTitle>

              <Link>Quanto</Link>
              <Link>Bull & Bear</Link>
              <Link>Structured</Link>
              <Link>Nonfungible</Link>
              <Link>DAO</Link>
            </Column>
            <Column>
              <ColumnTitle>Developers</ColumnTitle>

              <Link>GitHub</Link>
              <Link>Documentation</Link>
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
              <Social/>
            </SocialNetworkIcon>
            <SocialNetworkIcon>
              <Twitter/>
            </SocialNetworkIcon>
            <SocialNetworkIcon>
              <Telegram/>
            </SocialNetworkIcon>
            <SocialNetworkIcon>
              <GitHub/>
            </SocialNetworkIcon>
          </SocialNetworkBlock>
        </ContentBottom>
      </Container>
    </Wrapper>
  )
}

export default Footer