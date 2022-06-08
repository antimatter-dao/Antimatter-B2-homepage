import styled from "styled-components";

import Button, {BUTTON_SIZE, BUTTON_THEME} from "../../shared/Button/Button";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
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
    &:first-child {
      margin-right: 20px;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 120%;
  text-align: center;
  color: #000000;
`;

const Description = styled.h3`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 132%;
  text-align: center;
  color: #000000;
`;

const MainBlock = () => {
  return(
    <Wrapper>
      <Content>
        <Title>Antimatter - B2 Ecosystem</Title>
        <Description>Antimatter powers an ecosystem of applications on top of B2.</Description>
        <ButtonsContainer>
          <Button>Build on B2</Button>
          <Button theme={BUTTON_THEME.BLACK_BORDER} size={BUTTON_SIZE.LARGE}>Join Community</Button>
        </ButtonsContainer>
      </Content>
    </Wrapper>
    )
}

export default MainBlock