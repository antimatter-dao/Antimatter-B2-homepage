import styled from "styled-components";
import Slider from "../components/Slider";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const FirstBlock = styled.div`
  display: flex;
  background: #000000;
  height: 100vh;
`;


const SecondBlock = styled.div`
  display: flex;
  padding: 0 120px;
  margin-top: 120px;
`;

const SecondContent = styled.div`
  display: flex;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F1F3;
  border-radius: 30px;
  padding: 28px 24px;
  box-sizing: border-box;
  max-height: 214px;
  min-height: 214px;
  max-width: 285px;
  margin-right: 20px;
`;

const InfoBlockTitle = styled.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 124%;
  color: #121212;
  padding-bottom: 16px;
`;

const InfoBlockDescription = styled.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #121212;
  opacity: 0.8;
`;

export default function Home() {
  const sliderContent = ['Scalability', 'icon', 'Financial Infrastructure', 'icon', 'Security', 'icon', 'Ecosystem', 'icon', 'Financial support', 'icon']
  const sliderImages = [{name: 'img',img: 'img1.jpg'},{name: 'img' ,img: 'img2.jpg'},{name: 'img',img: 'img3.jpg'},{name: 'img', img: 'img4.jpg'},{name: 'img',img: 'img5.jpg'},{name: 'img',img: 'img6.jpg'}]

  return (
    <Wrapper>
      <FirstBlock></FirstBlock>
      <Slider sliderContent={sliderContent} />
      <SecondBlock>
        <SecondContent>
          <InfoBlock>
            <InfoBlockTitle>Scalability</InfoBlockTitle>
            <InfoBlockDescription>
              Increased throughput and low transaction fees
            </InfoBlockDescription>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>Financial Infrastructure</InfoBlockTitle>
            <InfoBlockDescription>
              B2 is optimized to facilitate financial DApps
            </InfoBlockDescription>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>Security</InfoBlockTitle>
            <InfoBlockDescription>
              A set of community-owned validators validate transactions on the blockchain
            </InfoBlockDescription>
          </InfoBlock>
          <InfoBlock>
            <InfoBlockTitle>Ecosystem</InfoBlockTitle>
            <InfoBlockDescription>
              Powering an ecosystem of Financial applications and Web3 Consumer apps
            </InfoBlockDescription>
          </InfoBlock>
        </SecondContent>
      </SecondBlock>




      {/*<Slider sliderContent={sliderImages} />*/}

    </Wrapper>
  );
}


