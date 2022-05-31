import styled from "styled-components";

import Button, {BUTTON_SIZE, BUTTON_THEME} from "../../shared/Button/Button";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("./backgroundImg.jpg");
  background-position: center;
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

const FirstBlock = () => (
  <Wrapper>
    <Content>
      <Title>Antimatter - B2</Title>
      <Description>A BNB Chain Sidechain for the scalability of financial infrastructure</Description>
      <ButtonsContainer>
        <Button>Build on B2</Button>
        <Button theme={BUTTON_THEME.BORDER} size={BUTTON_SIZE.LARGE}>Join Community</Button>
      </ButtonsContainer>
    </Content>
  </Wrapper>
)

export default FirstBlock