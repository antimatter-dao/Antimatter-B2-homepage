import styled from "styled-components";
import { useParallax} from "react-scroll-parallax";

import Ladder from "../../../public/ladder.svg";
import Polyhedron from "../../../public/polyhedron.svg";


const Content = styled.div`
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
  position: relative;
`;

const InfoBlockTitle = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 124%;
  color: #121212;
  padding-bottom: 16px;
`;

const InfoBlockDescription = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #121212;
  opacity: 0.8;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 0 120px;
  margin-top: 120px;
`;

const PolyhedronIcon = styled.div`
  position: absolute;
  top: -34px;
  right: 50px;
  
  transition: 4s;
  transform: translate(${props => props?.isVisible ? "0, 17px": "0px 0px"});
`;

const LadderIcon = styled.div`
  position: absolute;
  bottom: -64px;
  right: 30px;

  transition: 4s;
  transform: translate(${props => props?.isVisible ? "0, 17px": "0px 0px"});
`;

const InformationAboutB2 = () => {
  const parallaxLadder = useParallax({
    translateY: [0, 40],
    speed: 10
  });
  const parallaxPolyhedron = useParallax({
    translateY: [0, 60],
    speed: -10
  });

  return (
    <Wrapper>
      <Content>
        <InfoBlock>
          <InfoBlockTitle>Scalability</InfoBlockTitle>
          <InfoBlockDescription>
            Increased throughput and low transaction fees
          </InfoBlockDescription>
            <LadderIcon ref={parallaxLadder.ref} >
              <Ladder/>
            </LadderIcon>
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
          <PolyhedronIcon ref={parallaxPolyhedron.ref}>
            <Polyhedron/>
          </PolyhedronIcon>
        </InfoBlock>
      </Content>
    </Wrapper>
  )
}
export default InformationAboutB2