import styled from "styled-components";

const Container = styled.div`
  background: #F0F1F3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
`

const MainBlock = () => (
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
      </BlockOracleLessOptionResearchPaper>
    </InfoBlocks>
  </Container>
)

export default MainBlock