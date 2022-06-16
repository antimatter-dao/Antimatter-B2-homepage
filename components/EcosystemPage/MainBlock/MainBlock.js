import styled from "styled-components";
import { useLottie } from "lottie-react";
import {useEffect, useState} from "react";

import Button, {BUTTON_SIZE, BUTTON_THEME} from "../../shared/Button/Button";
import Column1 from "../../../public/Columns/firstСolumn.svg";
import Column2 from "../../../public/Columns/secondСolumn.svg";
import Column3 from "../../../public/Columns/thirdСolumn.svg";
import Column4 from "../../../public/Columns/fourthСolumn.svg";
import Column5 from "../../../public/Columns/fifthСolumn.svg";
import Column6 from "../../../public/Columns/column6.svg";
import Column7 from "../../../public/Columns/column7.svg";

import Quanto from "../../../public/AnimationJson/Quanto.json";
import Bull from "../../../public/AnimationJson/Bull.json";
import Dao from "../../../public/AnimationJson/Dao.json";
import Meta from "../../../public/AnimationJson/Meta.json";
import Nonfung from "../../../public/AnimationJson/Non.json";


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
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

      @media (min-width: 360px) and (max-width: 992px) {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
  }

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
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

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 40px;
    margin-bottom: 24px;
  }
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

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 22px;
  }
`;

const FirstColumn = styled.div`
  position: absolute;
  bottom: -40px;
  left: -20%;

  animation: promotionColumn 1.1s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const FirstColumnIcon = styled.div`
  position: fixed;
  bottom: 267px;
  left: 119px;
`

const SecondColumn = styled.div`
  position: absolute;
  bottom: -40px;
  right: 7%;
  z-index: 1;

  animation: promotionColumn 1.3s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const SecondColumnIcon = styled.div`
  display: ${props => props?.display ? 'block': 'none'};
  position: fixed;
  bottom: 265px;
  right: 121px;
`

const ThirdColumn = styled.div`
  position: absolute;
  bottom: -254px;
  left: 18%;

  animation: promotionColumn 1.6s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const ThirdColumnIcon = styled.div`
  position: fixed;
  bottom: 53px;
  left: 657px;
  z-index: 3;
  transition: 1s;
`

const FourthColumn = styled.div`
  position: absolute;
  bottom: -150px;
  right: 27%;
  z-index: 2;

  animation: promotionColumn 1.4s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const FourthColumnIcon = styled.div`
  display: ${props => props?.display ? 'block': 'none'};
  position: fixed;
  bottom: 157px;
  right: 403px;
`

const FifthColumn = styled.div`
  position: absolute;
  bottom: -150px;
  left: 0;

  animation: promotionColumn 1.2s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const FifthColumnIcon = styled.div`
  display: ${props => props?.display ? 'block': 'none'};
  position: fixed;
  bottom: 157px;
  left: 403px;
`

const SixthColumn = styled.div`
  position: absolute;
  right: 580px;
  bottom: 74px;

  animation: promotionColumn 1.4s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const SeventhColumn = styled.div`
  position: absolute;
  bottom: 170px;
  left: 530px;

  animation: promotionColumn 1.6s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`

const optionsColumnQuanto = {
  animationData: Quanto,
  loop: true,
  autoplay: true
};

const optionsColumnBull = {
  animationData: Bull,
  loop: true,
  autoplay: true
};

const optionsColumnDao = {
  animationData: Dao,
  loop: true,
  autoplay: true
};

const optionsColumnMeta = {
  animationData: Meta,
  loop: true,
  autoplay: true
};

const optionsColumnNonfung = {
  animationData: Nonfung,
  loop: true,
  autoplay: true
};


const MainBlock = () => {
  const animationQuanto = useLottie(optionsColumnQuanto);
  const animationBull = useLottie(optionsColumnBull);
  const animationDao = useLottie(optionsColumnDao);
  const animationMeta = useLottie(optionsColumnMeta);
  const animationNonfung = useLottie(optionsColumnNonfung);

  const [displayBull, setDisplayBull] = useState(false)
  const [displayDao, setDisplayDao] = useState(false)
  const [displayNonfung, setDisplayNonfung] = useState(false)

  useEffect(()=> {
    setTimeout(()=> animationQuanto.play(), 1300)

    setTimeout(()=> {
      animationBull.play()
      setDisplayBull(true)
    }, 1400)

    setTimeout(()=> {
      animationDao.play()
      setDisplayDao(true)
    }, 1500)

    setTimeout(()=> animationMeta.play(), 1600)

    setTimeout(()=> {
      animationNonfung.play()
      setDisplayNonfung(true)
    }, 1500)

  },[animationQuanto, animationBull, animationNonfung, animationDao, animationMeta])

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
          {animationQuanto.View}
        </FirstColumnIcon>
      </FirstColumn>

      <FifthColumn>
        <Column5 />
        <FifthColumnIcon display={displayBull}>
          {animationBull.View}
        </FifthColumnIcon>
      </FifthColumn>

      <ThirdColumn>
        <Column3 />
        <ThirdColumnIcon>
          {animationMeta.View}
        </ThirdColumnIcon>
      </ThirdColumn>

      <FourthColumn>
        <Column4 />
        <FourthColumnIcon display={displayNonfung}>
          {animationNonfung.View}
        </FourthColumnIcon>
      </FourthColumn>

      <SecondColumn>
        <Column2 />
        <SecondColumnIcon display={displayDao}>
          {animationDao.View}
        </SecondColumnIcon>
      </SecondColumn>


      <SixthColumn>
        <Column6 />
      </SixthColumn>

      <SeventhColumn>
        <Column7 />
      </SeventhColumn>

    </Wrapper>
    )
}

export default MainBlock