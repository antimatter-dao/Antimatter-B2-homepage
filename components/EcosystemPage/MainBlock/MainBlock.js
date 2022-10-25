import styled from "styled-components";
import { useLottie } from "lottie-react";
import { useEffect, useState } from "react";

import Button, { BUTTON_SIZE, BUTTON_THEME } from "../../shared/Button/Button";
import Column1 from "../../../public/Columns/firstСolumn.svg";
import Column2 from "../../../public/Columns/secondСolumn.svg";
import Column3 from "../../../public/Columns/thirdСolumn.svg";
import Column4 from "../../../public/Columns/fourthСolumn.svg";
import Column5 from "../../../public/Columns/fifthСolumn.svg";
import Column6 from "../../../public/Columns/column6.svg";
import Column7 from "../../../public/Columns/column7.svg";
import Column8 from "../../../public/Columns/column8.svg";
import Column9 from "../../../public/Columns/column9.svg";

import Quanto from "../../../public/AnimationJson/Quanto.json";
import Bull from "../../../public/AnimationJson/Bull.json";
import Dao from "../../../public/AnimationJson/Dao.json";
import Meta from "../../../public/AnimationJson/Meta.json";
import Nonfung from "../../../public/AnimationJson/Non.json";

import QuantoIcon from "../../../public/Quanto.svg";
import BullIcon from "../../../public/Bull.svg";
import DaoIcon from "../../../public/Dao.svg";
import MetaIcon from "../../../public/Meta.svg";
import NonfungIcon from "../../../public/Nonfung.svg";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    height: max-content;
  }
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
    align-items: center;
    width: 100%;
    padding: 0 16px;
  }
`;

const LinkContainer = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 30px;
  font-weight: 500;
  font-size: 20px;
  .app-item {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 342px;
    border-bottom: 1px solid #000000;
    cursor: pointer;
    .p-text {
      display: flex;
      align-items: center;
      p {
        margin-right: 20px;
        max-width: 50px;
        text-align: center;
        font-weight: 600;
        font-size: 10px;
        line-height: 120%;
      }
    }
    &:hover {
      color: #F3BA2F;
      svg path {
        fill: #F3BA2F;
      }
    }
  }
  @media (min-width: 360px) and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
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
  font-family: "SF Pro Display", sans-serif;
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
  left: -55px;

  animation: promotionColumn 1.1s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const FirstColumnIcon = styled.div`
  position: absolute;
  bottom: 307px;
  left: 76%;
  z-index: 5555;
`;

const SecondColumn = styled.div`
  position: absolute;
  bottom: -40px;
  right: 300px;
  z-index: 1;

  animation: promotionColumn 1.3s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const SecondColumnIcon = styled.div`
  display: ${(props) => (props?.display ? "block" : "none")};
  position: absolute;
  top: -31%;
  right: 4%;
`;

const ThirdColumn = styled.div`
  position: absolute;
  bottom: -254px;
  left: 26%;

  animation: promotionColumn 1.6s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const ThirdColumnIcon = styled.div`
  position: absolute;
  bottom: 94%;
  left: 75.5%;
  z-index: 3;
  transition: 1s;
`;

const FourthColumn = styled.div`
  position: absolute;
  bottom: -150px;
  right: 29%;
  z-index: 2;

  animation: promotionColumn 1.4s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const FourthColumnIcon = styled.div`
  display: ${(props) => (props?.display ? "block" : "none")};
  position: absolute;
  bottom: 94%;
  right: 3%;
`;

const FifthColumn = styled.div`
  position: absolute;
  bottom: -150px;
  left: 12%;

  animation: promotionColumn 1.2s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const FifthColumnIcon = styled.div`
  display: ${(props) => (props?.display ? "block" : "none")};
  position: absolute;
  bottom: 93%;
  left: 76%;
`;

const SixthColumn = styled.div`
  position: absolute;
  right: 42%;
  bottom: 22%;

  animation: promotionColumn 1.4s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const SeventhColumn = styled.div`
  position: absolute;
  bottom: 32%;
  left: 40%;

  animation: promotionColumn 1.6s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const EighthColumn = styled.div`
  position: absolute;
  bottom: 12%;
  left: 77%;

  animation: promotionColumn 1.6s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const NinthColumn = styled.div`
  position: absolute;
  bottom: 16%;
  left: 3%;

  animation: promotionColumn 1.6s ease-in-out;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const MobileQuanto = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: 180px;
    left: 30px;
  }
`;

const MobileBull = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: 29px;
    left: 14%;
  }
`;

const MobileDao = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: 30px;
    right: 12%;
  }
`;

const MobileMeta = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: 140px;
    left: 38%;
  }
`;

const MobileNonfung = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: 190px;
    right: 10%;
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 596px) {
    display: block;
    position: relative;
    height: 47vh;
    width: 400px;
    margin-top: 30px;
  }

  @media (min-width: 598px) and (max-width: 1020px) {
    display: block;
    position: relative;
    height: 53vh;
    width: 400px;
    margin-top: 30px;
  }
`;

const optionsColumnQuanto = {
  animationData: Quanto,
  loop: true,
  autoplay: true,
};

const optionsColumnBull = {
  animationData: Bull,
  loop: true,
  autoplay: true,
};

const optionsColumnDao = {
  animationData: Dao,
  loop: true,
  autoplay: true,
};

const optionsColumnMeta = {
  animationData: Meta,
  loop: true,
  autoplay: true,
};

const optionsColumnNonfung = {
  animationData: Nonfung,
  loop: true,
  autoplay: true,
};

const Columns = styled.div`
  position: relative;
  width: 1920px;
  height: 100%;
  z-index: 1;

  @media (min-width: 360px) and (max-width: 1020px) {
    display: none;
  }
`;

const MainBlock = () => {
  const animationQuanto = useLottie(optionsColumnQuanto);
  const animationBull = useLottie(optionsColumnBull);
  const animationDao = useLottie(optionsColumnDao);
  const animationMeta = useLottie(optionsColumnMeta);
  const animationNonfung = useLottie(optionsColumnNonfung);

  const [displayBull, setDisplayBull] = useState(false);
  const [displayDao, setDisplayDao] = useState(false);
  const [displayNonfung, setDisplayNonfung] = useState(false);

  const appLinks = [
    {
      name: "B2-AMM swap",
      link: undefined,
    },
    {
      name: "Build on B2",
      link: "https://docs.antimatter.finance/b2/notice-and-disclaimer",
    },
    {
      name: "B2 NFT",
      link: undefined,
    },
    {
      name: "Join Community",
      link: "https://t.me/antimatterchat",
    },
  ];

  useEffect(() => {
    setTimeout(() => animationQuanto.play(), 1300);

    setTimeout(() => {
      animationBull.play();
      setDisplayBull(true);
    }, 1400);

    setTimeout(() => {
      animationDao.play();
      setDisplayDao(true);
    }, 1500);

    setTimeout(() => animationMeta.play(), 1600);

    setTimeout(() => {
      animationNonfung.play();
      setDisplayNonfung(true);
    }, 1500);
  }, [
    animationQuanto,
    animationBull,
    animationNonfung,
    animationDao,
    animationMeta,
  ]);

  return (
    <Wrapper>
      <Content>
        <Title>Antimatter - B2 Ecosystem</Title>
        <Description>
          Antimatter powers an ecosystem of applications on top of B2.
        </Description>
        <LinkContainer>
          {appLinks.map((item) => (
            <a href={item.link} className="app-item" key={item.name}>
              {item.name}
              <div className="p-text">
                <p>{item.link ? '' : 'Coming Soon'}</p>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.00572C15 8.76781 13.5286 9.43843 11.3321 9.80423C10.7954 9.89741 10.2996 10.1683 9.91505 10.5786C9.5305 10.9889 9.27661 11.5178 9.18928 12.0905C8.83214 14.4339 8.22141 16 7.50355 16C6.7857 16 6.1607 14.4339 5.81427 12.0905C5.72746 11.5176 5.47374 10.9883 5.08909 10.578C4.70444 10.1676 4.20842 9.89686 3.67142 9.80423C1.47142 9.42319 0 8.77162 0 8.00572C0 7.23982 1.47141 6.56537 3.66784 6.20338C4.20463 6.11021 4.70037 5.83932 5.08493 5.42903C5.46948 5.01874 5.72337 4.48983 5.8107 3.91712C6.16784 1.5699 6.78214 0 7.5 0C8.21786 0 8.84285 1.5699 9.1857 3.91712C9.27405 4.48937 9.52828 5.01769 9.91265 5.42778C10.297 5.83788 10.7922 6.10912 11.3286 6.20338C13.5286 6.56537 15 7.23601 15 8.00572Z"
                    fill="black"
                  />
                </svg>
              </div>
            </a>
          ))}
        </LinkContainer>
        {/* <ButtonsContainer>
          <a href="https://docs.antimatter.finance/b2/notice-and-disclaimer">
            <Button>Build on B2</Button>
          </a>
          <a href="https://t.me/antimatterchat">
            <Button theme={BUTTON_THEME.BLACK_BORDER} size={BUTTON_SIZE.LARGE}>
              Join Community
            </Button>
          </a>
        </ButtonsContainer> */}
      </Content>

      <Columns>
        <FirstColumn>
          <Column1 />
          <FirstColumnIcon>{animationQuanto.View}</FirstColumnIcon>
        </FirstColumn>

        <FifthColumn>
          <Column5 />
          <FifthColumnIcon display={displayBull}>
            {animationBull.View}
          </FifthColumnIcon>
        </FifthColumn>

        <ThirdColumn>
          <Column3 />
          <ThirdColumnIcon>{animationMeta.View}</ThirdColumnIcon>
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

        <EighthColumn>
          <Column8 />
        </EighthColumn>

        <NinthColumn>
          <Column9 />
        </NinthColumn>
      </Columns>

      <MobileContainer>
        <MobileQuanto>
          <QuantoIcon />
        </MobileQuanto>
        <MobileBull>
          <BullIcon />
        </MobileBull>
        <MobileDao>
          <DaoIcon />
        </MobileDao>
        <MobileMeta>
          <MetaIcon />
        </MobileMeta>
        <MobileNonfung>
          <NonfungIcon />
        </MobileNonfung>
      </MobileContainer>
    </Wrapper>
  );
};

export default MainBlock;
