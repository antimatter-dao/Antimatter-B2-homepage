import styled from "styled-components";
import {ParallaxProvider, useParallax} from "react-scroll-parallax";

import Header from "../components/Header/Header";
import MainBlock from "../components/EcosystemPage/MainBlock/MainBlock";
import Slide from "../components/EcosystemPage/Slide/Slide";
import Candles from '../public/candles.svg'
import {WithScrollFreezing} from "../hook/withScrollFreezingProps";



const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export default function Ecosystem() {
  const slideArray = [
    {
      title: 'BNB Quanto Derivatives',
      description: 'An onchain decentralized perpetual contract with underlying  in BNB, but the instrument is settled in other crypto.',
      buttonTitle: 'Coming Soon',
      backgroundFill: '#121212',
      colorText: '#FFFFFF',
      imgSvg: <Candles/>,
      id: 1,
      minHeight: "100vh",
      mobileMinHeight: "max-content",
      marginTopButton: '32px',
      buttonBackground: 'transparent',
      buttonBorder: '1px solid #F8D448',
      buttonColor: '#F8D448',
    },
    {
      title: 'Defi Option Vault',
      description: 'Covered call and put strategies to generate yield from the option market.',
      buttonTitle: 'Launch Defi Option Vault',
      backgroundFill: '#F0F1F3',
      colorText: '#121212',
      imgUrl: './Screenshots/OptionValueScreenshot.png',
      id: 2,
      translate: `20px, -13px`,
      minHeight: "100vh",
      mobileMinHeight: "62vh",
      marginTopButton: '32px',
      widthImg: "63vw",
      mobile:{
        translate: `0px,-13px`,
        widthImg: "100%",
        minHeight: "61vh"
      }
    },
    {
      title: 'Sharkfin',
      description: 'Earn varying yield based on a specified price range of the underlying asset.',
      buttonTitle: 'Launch Sharfin',
      backgroundFill: '#FFFFFF',
      colorText: '#121212',
      fill: 'black',
      list: [
        'Guaranteed rate of return of at least the amount invested, and a possible gain.',
        'Weekly cycles with redemption at maturity. The higher the settlement price the higher the APR.',
        'Ethereum and Bitcoin as underlying assets. Invest $BTC, $ETH or $USDT.'
      ],
      imgUrl: './Screenshots/SharkfinScreenshot.png',
      id: 3,
      translate: `30px, -20px`,
      minHeight: "100vh",
      mobileMinHeight: "50vh",
      widthImg: "70vw",
      mobile:{
        translate: `0px,-13px`,
        widthImg: "100%",
        minHeight: "49vh"
      }
    },
    {
      title: 'Dual Investment',
      description: 'Sell options while earning a high interest rate.',
      buttonTitle: 'Launch Dual Investment',
      backgroundFill: '#121212',
      colorText: '#FFFFFF',
      fill: 'white',
      list: [
        'Choose between different products varying in Strike Price, APY and Delivery Date.',
        'Options are settled on delivery date in either the token or a stablecoin.',
        'Dual Investment is available for $BTC, $ETH, $BNB and many more different altcoins.'
      ],
      imgUrl: './Screenshots/DualInvestmentScreenshot.png',
      id: 4,
      translate: `20px, -12px`,
      minHeight: "100vh",
      mobileMinHeight: "62vh",
      widthImg: "57vw",
      mobile:{
        translate: `0px,-13px`,
        widthImg: "100%",
        minHeight: "66vh"
      }
    },
    {
      title: 'BULL & BEAR',
      description: 'Antimatters perpetual options are tokenized on-chain. In essence, tradeable call and put tokens.',
      buttonTitle: 'Launch Bull & Bear',
      backgroundFill: '#F0F1F3',
      colorText: '#121212',
      fill: 'black',
      list: [
        'Our options do not rely on oracles. Instead, arbitrage activity is utilized to determine price of an asset.',
        'Generated tokens have no expiry and timeframe. This also means no forced liquidation.',
        'We offer permission-less creation of  Bull & Bear tokens of any asset.'
      ],
      imgUrl: './Screenshots/BullAndBearScreenshot.png',
      id: 5,
      translate: `20px, -16px`,
      minHeight: "100vh",
      mobileMinHeight: "45vh",
      widthImg: "82vw",
      mobile:{
        translate: `0px,-13px`,
        widthImg: "100%",
        minHeight: "46vh"
      }
    },
    {
      title: 'Nonfungible Finance',
      description: 'The real use-case for NFTs lies in wrapping and packaging financial products',
      buttonTitle: 'Launch Nonfungible Finance',
      backgroundFill: '#FFFFFF',
      colorText: '#121212',
      fill: 'black',
      list: [
        'Issuance of NFTs with a combination of multiple underlying assets',
        'Financial ETFs and formation of customized indexes through NFTs',
        'Select assets to put into a locker NFT and set a release schedule.'
      ],
      imgUrl: './Screenshots/NonfungibleFinanceScreenshot.png',
      id: 6,
      translate: `20px, -14px`,
      minHeight: "100vh",
      mobileMinHeight: "52vh",
      widthImg: "61vw",
      mobile:{
        translate: `0px,-13px`,
        widthImg: "100%",
        minHeight: "51vh"
      }
    },
    {
      title: 'Antimatter DAO',
      description: 'A collaborative workplace for innovative onchain derivative application',
      buttonTitle: 'Launch Antimatter DAO',
      backgroundFill: '#121212',
      colorText: '#FFFFFF',
      fill: 'white',
      list: [
        'Everything regarding $MATTER in one place.',
        'Stake your tokens or collect trading rewards for using our products',
        'Get involved through governance and give your feedback on our forum'
      ],
      imgUrl: './Screenshots/AntimatterDAOScreenshot.png',
      id: 7,
      translate: `20px, 0px`,
      minHeight: "100vh",
      mobileMinHeight: "60vh",
      widthImg: "63vw",
      mobile:{
        translate: `0px,-13px`,
        widthImg: "100%",
        minHeight: "56vh"
      }
    }
    ]

  return (
    <ParallaxProvider>
     <Wrapper>
      <WithScrollFreezing isChainBlock={true}>
        <Header fill={'white'}/>
        <MainBlock/>
      </WithScrollFreezing>
      {slideArray.map((slide) => {
        return (
          <Slide key={slide.id} slide={slide}/>
        )
      })}
     </Wrapper>
    </ParallaxProvider>
  );
}

