import styled from "styled-components";

import Figure1 from "../../public/figure.svg";
import Figure2 from "../../public/figure2.svg";
import {useParallax} from "react-scroll-parallax";
import Polyhedron from "../../public/polyhedron.svg";

const Container = styled.div`
  background: #F0F1F3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 360px) and (max-width: 992px) {
    height: max-content;
  }
  
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 120%;
  text-align: center;
  color: #000000;
  margin: 0;
  padding-bottom: 8px;
  padding-top: 132px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 40px;
  }
`

const Description = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 132%;
  text-align: center;
  color: #000000;
  margin: 0;
  padding-bottom: 48px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 22px;
  }
`

const Button = styled.button`
  background: #F8D448;
  border-radius: 20px;
  padding: 20px 50px;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #1B1A1F;
`

const InfoBlocks = styled.div`
  position: absolute;
  width: 86%;
  display: flex;
  justify-content: space-between;
  bottom: -180px;

  @media (min-width: 360px) and (max-width: 992px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    width: 100%;
    margin: 72px 16px 0;
  }
`

const BlockAntimatterB2Paper = styled.div`
  max-height: 442px;
  max-width: 584px;
  background: #121212;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 60px 44px;
  box-sizing: border-box;
  margin-right: 16px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding: 44px 24px;
    margin: 0 16px 24px;
  }
`

const BlockAntimatterB2PaperTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #FFFFFF;
  padding-bottom: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
  }
`

const BlockAntimatterB2PaperDescription = styled.span`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 132%;
  color: #FFFFFF;
  padding-bottom: 60px;
  
  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 18px;
  }
`

const BlockOracleLessOptionResearchPaper = styled.div`
  max-height: 442px;
  max-width: 584px;
  background: #FFFFFF;
  border: 1px solid #121212;
  border-radius: 30px;
  padding: 60px 44px;
  box-sizing: border-box;
  margin-left: 16px;

  display: flex;
  flex-direction: column;

  @media (min-width: 360px) and (max-width: 992px) {
    margin: 0 16px 24px;
    padding: 44px 24px;
  }
`

const BlockOracleLessOptionResearchPaperTitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #121212;
  padding-bottom: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
  }
`

const BlockOracleLessOptionResearchPaperDescription = styled.span`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 132%;
  color: #000000;
  padding-bottom: 34px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 18px;
  }
`

const BlockButton = styled.button`
  background: #F8D448;
  border-radius: 20px;
  padding: 20px 24px;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: #121212;
  text-align: left;

  width: 70%;
  height: 64px;

  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%;
    text-align: center;
  }
`

const Figure1Icon = styled.div`
  position: absolute;
  top: -87px;
  right: 70px;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const Figure2Icon = styled.div`
  position: absolute;
  top: 170px;
  left: 160px;

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const MainBlock = () => {
  const parallaxFigure1 = useParallax({
    translateY: [0, 60],
    speed: 10
  });
  const parallaxFigure2 = useParallax({
    translateY: [0, 60],
    speed: 10
  });

  return(
    <Container>
      <Title>Antimatter Documents</Title>
      <Description>Explore all information about our products in one place</Description>
      <Button>Open Documentation</Button>

      <InfoBlocks>
        <BlockAntimatterB2Paper>
          <BlockAntimatterB2PaperTitle>
            Antimatter B2 Paper
          </BlockAntimatterB2PaperTitle>
          <BlockAntimatterB2PaperDescription>
            This whitepaper expands the role of B2 in the Antimatter ecosystem, laying out the key advancements for B2 to power a suite of decentralized financial infrastructure for DeFi.
          </BlockAntimatterB2PaperDescription>
          <BlockButton>Download whitepaper</BlockButton>
        </BlockAntimatterB2Paper>

        <BlockOracleLessOptionResearchPaper>
          <BlockOracleLessOptionResearchPaperTitle>
            Oracle-less option research paper
          </BlockOracleLessOptionResearchPaperTitle>
          <BlockOracleLessOptionResearchPaperDescription>
            This research paper goes in-depth on the mechanics allowing oracle-less options on Bull & Bear.
          </BlockOracleLessOptionResearchPaperDescription>
          <BlockButton>Download research paper</BlockButton>

          <Figure1Icon ref={parallaxFigure1.ref}>
            <Figure1/>
          </Figure1Icon>
        </BlockOracleLessOptionResearchPaper>
      </InfoBlocks>



      <Figure2Icon ref={parallaxFigure2.ref}>
        <Figure2/>
      </Figure2Icon>
    </Container>
  )
}

export default MainBlock