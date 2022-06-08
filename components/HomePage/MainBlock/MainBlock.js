import styled from "styled-components";

import Button, {BUTTON_SIZE, BUTTON_THEME} from "../../shared/Button/Button";

import Icon1 from "../../../public/animationIcon1.svg";
import Icon2 from "../../../public/animationIcon2.svg";
import Icon3 from "../../../public/animationIcon3.svg";
import Icon4 from "../../../public/animationIcon4.svg";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("./backgroundImg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const IconLeft = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 220px;
  left: 183px;
  
  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  animation-delay: .4s;
`

const IconBottom = styled.div`
  position: absolute;
  width: 72px;
  height: 72px;
  bottom: 100px;
  left: 674px;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  animation-delay: .1s;
`

const IconTop = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  right: 295px;
  bottom: 181px;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  animation-delay: .3s;
`

const IconRight = styled.div`
  position: absolute;
  width: 72px;
  height: 72px;
  right: 78px;
  top: 230px;

  animation: bounce-and-scale 0.8s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5, 0.05, 1, .5);
  animation-iteration-count: infinite;
  animation-delay: .2s;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-top: 120px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 48px;
  
  
  button {
    &:first-child{
      margin-right: 20px;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 90px;
  line-height: 120%;
  text-align: center;
  background: linear-gradient(90deg, #F8D448 0%, #31B047 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Description = styled.h3`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 128%;
  color: #F3F3F3;
  opacity: 0.8;
`;

const MainBlock = () => (
  <Wrapper>
    <Content>
      <Title>Antimatter - B2</Title>
      <Description>A BNB Chain Sidechain for the scalability of financial infrastructure</Description>
      <ButtonsContainer>
        <Button>Build on B2</Button>
        <Button theme={BUTTON_THEME.BORDER} size={BUTTON_SIZE.LARGE}>Join Community</Button>
      </ButtonsContainer>
    </Content>
    <IconLeft>
      <Icon1 />
    </IconLeft>
    <IconBottom>
      <Icon2 />
    </IconBottom>
    <IconTop>
      <Icon3 />
    </IconTop>
    <IconRight>
      <Icon4 />
    </IconRight>
  </Wrapper>
)

export default MainBlock