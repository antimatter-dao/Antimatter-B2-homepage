import styled from "styled-components";
import Logo from "../../public/antimatterLogo.svg";

import Twitter from "../../public/Networks/twitter.svg";
import GitHub from "../../public/Networks/gitHub.svg";
import Telegram from "../../public/Networks/telegram.svg";
import Social from "../../public/Networks/social.svg";

const Wrapper = styled.div`
  background: #121212;
  width: 100%;

`;

const Container = styled.div`
  padding: 60px 70px 40px 60px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 420px;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

const BlockMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    padding: 0 200px;
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
`;

const SocialNetworkIcon = styled.div`
  padding-left: 40px;
  cursor: pointer;
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
        <Content>
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
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Footer