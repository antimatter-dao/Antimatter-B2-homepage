import styled from "styled-components";

import Button, { BUTTON_SIZE, BUTTON_THEME } from "../../shared/Button/Button";

import Icon1 from "../../../public/animationIcon1.svg";
import Icon2 from "../../../public/animationIcon2.svg";
import Icon3 from "../../../public/animationIcon3.svg";
import Icon4 from "../../../public/animationIcon4.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-image: url("./backgroundImg.jpg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-top: 120px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding: 120px 16px 16px;
  }

  @media (min-width: 1080px) {
    padding-top: 100px;
  }

  @media (min-width: 1440px) {
    padding-top: 120px;
  }

  @media (min-width: 1920px) {
    padding-top: 180px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 48px;

  button {
    &:first-child {
      margin-right: 20px;

      @media (min-width: 360px) and (max-width: 992px) {
        margin-right: 0;
      }
    }
  }

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    width: 100%;

    button {
      &:last-child {
        margin-top: 16px;
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

  @media (min-width: 360px) and (max-width: 992px) {
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

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 22px;
    text-align: center;
  }
`;

const Icons = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
  bottom: 0;
`;

const IconLeft = styled(Icon1)`
  position: absolute;
  right: 450px;
  bottom: 220px;
  z-index: 1;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
  animation-delay: 0.4s;
`;

const IconBottom = styled(Icon2)`
  position: absolute;
  bottom: 100px;
  right: -35px;

  z-index: 1;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
  animation-delay: 0.1s;
`;

const IconTop = styled(Icon3)`
  position: absolute;
  left: 340px;
  bottom: 180px;
  z-index: 1;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
  animation-delay: 0.3s;
`;

const IconRight = styled(Icon4)`
  position: absolute;
  left: 560px;
  top: -150px;
  z-index: 1;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-iteration-count: infinite;
  animation-delay: 0.2s;
`;

const MainBlock = () => (
  <Wrapper>
    <Content>
      <Title>Antimatter - B2</Title>
      <Description>A BNB Chain Sidechain for the scalability of financial infrastructure</Description>
      <ButtonsContainer>
        <a href="https://docs.antimatter.finance/b2/notice-and-disclaimer">
          <Button>Build on B2</Button>
        </a>
        <a href="https://t.me/antimatterchat">
          <Button theme={BUTTON_THEME.BLACK_BORDER} size={BUTTON_SIZE.LARGE}>
            Join Community
          </Button>
        </a>
      </ButtonsContainer>
    </Content>

    <Icons>
      <IconLeft />
      <IconBottom />
      <IconTop />
      <IconRight />
    </Icons>
  </Wrapper>
);

export default MainBlock;
