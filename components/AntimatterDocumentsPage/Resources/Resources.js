import styled from "styled-components";
import Globe from "../../../public/globe.svg";
import File from "../../../public/file.svg";
import Grid from "../../../public/grid.svg";
import Info from "../../../public/info.svg";
import Users from "../../../public/users.svg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  padding-top: 170px;
  height: max-content;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 360px) and (max-width: 992px) {
    padding-top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding-top: 50px;
    margin: 0 16px;
    align-items: center;
  }
`;

const Title = styled.h1`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #000000;
  margin: 0;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 76px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding-bottom: 28px;
    align-items: center;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 386px 386px 386px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  background: #f0f1f3;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 32px 24px;
  min-height: 280px;
  max-height: 280px;
  cursor: pointer;

  &:hover {
    div {
      background-position: 100% 0;
      transition: all 0.4s ease-in-out;
    }
  }

  @media (min-width: 360px) and (max-width: 992px) {
    min-height: 100%;
    max-height: 100%;
  }
`;

const BlockTitle = styled.h3`
  margin: 0;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 124%;
  color: #121212;
  padding-bottom: 16px;
`;

const BlockDescription = styled.span`
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 145%;
  color: #1b1a1f;
`;

const IconBlock = styled.div`
  width: 60px;
  height: 60px;
  background: #31b047;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;

  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(to right, #31b047, #fcee21, #f8d448);
  background-size: 300% 100%;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Resources = () => (
  <Wrapper>
    <Container>
      <HeaderContainer>
        <Title>Resources</Title>
      </HeaderContainer>
      <Content>
        <Link href="https://docs.antimatter.finance/introduction/antimatter-overview">
          <Block>
            <IconBlock>
              <Globe />
            </IconBlock>
            <BlockTitle>How Antimatter works</BlockTitle>
            <BlockDescription>General overview of Antimatter and its products</BlockDescription>
          </Block>
        </Link>
        <Link href="https://docs.antimatter.finance/user-guide/getting-started-antimatter-structured">
          <Block>
            <IconBlock>
              <Users />
            </IconBlock>
            <BlockTitle>User Guides</BlockTitle>
            <BlockDescription>How-to guides and tutorials for users and developers.</BlockDescription>
          </Block>
        </Link>
        <Link href="https://docs.antimatter.finance/b2/dapps-in-antimatter-ecosystem">
          <Block>
            <IconBlock>
              <Grid />
            </IconBlock>
            <BlockTitle>Antimatter Products</BlockTitle>
            <BlockDescription>More detailed information about Nonfungible, DAO, Bull & Bear Tokens.</BlockDescription>
          </Block>
        </Link>

        <Link href="https://docs.antimatter.finance/antimatter-structured-product/dual-investment">
          <Block>
            <IconBlock>
              <Grid />
            </IconBlock>
            <BlockTitle>Structured Product</BlockTitle>
            <BlockDescription>More detailed information about DOV, Dual Investment, Sharkfin.</BlockDescription>
          </Block>
        </Link>

        <Link href="https://docs.antimatter.finance/b2/notice-and-disclaimer">
          <Block>
            <IconBlock>
              <File />
            </IconBlock>
            <BlockTitle>Developer Docs</BlockTitle>
            <BlockDescription>Recources for building a decentralized app on Antimatter.</BlockDescription>
          </Block>
        </Link>

        <Link href="https://docs.antimatter.finance/token/token-utility">
          <Block>
            <IconBlock>
              <Info />
            </IconBlock>
            <BlockTitle>Token Info</BlockTitle>
            <BlockDescription>Token information, utility and bridge.</BlockDescription>
          </Block>
        </Link>
      </Content>
    </Container>
  </Wrapper>
);
export default Resources;
