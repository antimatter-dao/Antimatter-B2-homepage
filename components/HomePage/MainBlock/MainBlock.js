import styled from "styled-components";
import Button, {BUTTON_SIZE, BUTTON_THEME} from "../../shared/Button/Button";
import Icon from "../../../public/backgraundImg.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 800px
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-top: 120px;
  position: relative;
  z-index: 23;

  @media (min-width: 300px) and (max-width: 992px) {
    padding: 110px 16px 16px;
  }

  @media (min-width: 1080px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
    padding-top: 110px;
  }

  @media (min-width: 1920px) {
    padding-top: 180px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 48px;

  a {
    button{
      &:first-child {
        margin-right: 20px;

        @media (min-width: 360px) and (max-width: 992px) {
          margin-right: 0;
        }
      }
    }
  }

  @media (min-width: 300px) and (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    a {
      width: 100%;
      button {
        width: 100%;
        &:last-child {
          margin-top: 16px;
        }
      }
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 90px;
  line-height: 120%;
  text-align: center;
  background: linear-gradient(90deg, #f8d448 0%, #31b047 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (min-width: 300px) and (max-width: 992px) {
    font-size: 40px;
    padding-bottom: 23px;
  }
`;

const Description = styled.h3`
  margin: 0;
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 128%;
  color: #f3f3f3;
  opacity: 0.8;

  @media (min-width: 300px) and (max-width: 992px) {
    font-size: 22px;
    text-align: center;
  }
`;

const BackImg = styled(Icon)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  top: 0;
`

const MainBlock = () => (
  <Wrapper>
    <BackImg />
    <Content>
      <Title>Antimatter - B2</Title>
      <Description>A BNB Chain Sidechain for the scalability of financial infrastructure</Description>
      <ButtonsContainer>
        <a href="https://docs.antimatter.finance/b2/notice-and-disclaimer">
          <Button>Build on B2</Button>
        </a>
        <a href="https://t.me/antimatterchat">
          <Button theme={BUTTON_THEME.BORDER} size={BUTTON_SIZE.LARGE}>
            Join Community
          </Button>
        </a>
      </ButtonsContainer>
    </Content>
  </Wrapper>
);

export default MainBlock;
