import styled from "styled-components";

import Button, {BUTTON_SIZE, BUTTON_THEME} from "../../shared/Button/Button";
import Column1 from "../../../public/Columns/firstСolumn.svg";
import Column2 from "../../../public/Columns/secondСolumn.svg";
import Column3 from "../../../public/Columns/thirdСolumn.svg";
import Column4 from "../../../public/Columns/fourthСolumn.svg";
import Column5 from "../../../public/Columns/fifthСolumn.svg";
import QuantoIcon from "../../../public/Columns/quantoIcon.svg";
import DaoIcon from "../../../public/Columns/daoIcon.svg";
import MetaverseIcon from "../../../public/Columns/metaverseIcon.svg";
import NonfungibleIcon from "../../../public/Columns/nonfungibleIcon.svg";
import BullBearIcon from "../../../public/Columns/bull_bearIcon.svg";

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

const FirstColumn = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 210px;
  left: -20%;

  animation: promotionColumn 1.4s ease-in-out;
  animation-delay: .5s;
`

const FirstColumnIcon = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 307px;
  left: 123px;
`

const SecondColumn = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 210px;
  right: 40%;
  z-index: 1;

  animation: promotionColumn 1.4s ease-in-out;
  animation-delay: .4s;
`

const SecondColumnIcon = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 290px;
  right: 11%;
  z-index: 1;
`

const ThirdColumn = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 18%;

  animation: promotionColumn 1.4s ease-in-out;
  animation-delay: .1s;
`

const ThirdColumnIcon = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 113px;
  left: 46%;
`

const FourthColumn = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 78px;
  right: 57%;
  z-index: 2;

  animation: promotionColumn 1.4s ease-in-out;
  animation-delay: .3s;
`

const FourthColumnIcon = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 191px;
  right: 29%;
  z-index: 2;
`

const FifthColumn = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 78px;
  left: 0;

  animation: promotionColumn 1.4s ease-in-out;
  animation-delay: .2s;
`

const FifthColumnIcon = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 174px;
  left: 29%;
`


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

      <FirstColumn>
        <Column1 />
        <FirstColumnIcon>
          <QuantoIcon />
        </FirstColumnIcon>
      </FirstColumn>

      <FifthColumn>
        <Column5 />
        <FifthColumnIcon>
          <BullBearIcon />
        </FifthColumnIcon>
      </FifthColumn>

      <ThirdColumn>
        <Column3 />
        <ThirdColumnIcon>
          <MetaverseIcon />
        </ThirdColumnIcon>
      </ThirdColumn>

      <FourthColumn>
        <Column4 />
        <FourthColumnIcon>
          <NonfungibleIcon />
        </FourthColumnIcon>
      </FourthColumn>

      <SecondColumn>
        <Column2 />
        <SecondColumnIcon>
          <DaoIcon />
        </SecondColumnIcon>
      </SecondColumn>

    </Wrapper>
    )
}

export default MainBlock