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
`;

const Container = styled.div`
  display: flex;
  margin: 0 120px;
  flex-direction: column;
  padding-top: 120px;
`;

const Title = styled.h1`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #000000;
  margin: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 76px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 386px 386px 386px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F1F3;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 32px 24px;
`

const BlockTitle = styled.h3`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 124%;
  color: #121212;
`

const BlockDescription = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 145%;
  color: #1B1A1F;
`

const IconBlock = styled.div`
  width: 60px;
  height: 60px;
  background: #31B047;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;

  &:hover {
    animation: change-icon-color .5s ease-in-out infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
  }
`;

const Resources = () => (
  <Wrapper>
    <Container>
      <HeaderContainer>
        <Title>Resources</Title>
      </HeaderContainer>
      <Content>
        <Block>
          <IconBlock>
            <Globe />
          </IconBlock>
          <BlockTitle>How Antimatter works</BlockTitle>
          <BlockDescription>
            General overview of Antimatter and its products
          </BlockDescription>
        </Block>
        <Block>
          <IconBlock>
            <Users />
          </IconBlock>
          <BlockTitle>User Guides</BlockTitle>
          <BlockDescription>
            How-to guides and tutorials for users and developers.
          </BlockDescription>
        </Block>
        <Block>
          <IconBlock>
            <Grid />
          </IconBlock>
          <BlockTitle>Antimatter Products</BlockTitle>
          <BlockDescription>
            More detailed information about Nonfungible, DAO, Bull & Bear Tokens.
          </BlockDescription>
        </Block>
        <Block>
          <IconBlock>
            <Grid />
          </IconBlock>
          <BlockTitle>Structured Product</BlockTitle>
          <BlockDescription>
            More detailed information about DOV, Dual Investment, Sharkfin.
          </BlockDescription>
        </Block>
        <Block>
          <IconBlock>
            <File />
          </IconBlock>
          <BlockTitle>Developer Docs</BlockTitle>
          <BlockDescription>
            Recources for building a decentralized app on Antimatter.
          </BlockDescription>
        </Block>
        <Block>
          <IconBlock>
            <Info />
          </IconBlock>
          <BlockTitle>Token Info</BlockTitle>
          <BlockDescription>
            Token information, utility and bridge.
          </BlockDescription>
        </Block>
      </Content>
    </Container>
  </Wrapper>
)
export default Resources