import styled from "styled-components";
import Marquee from "react-fast-marquee";

const SliderBlock = styled.div`
  display: flex;
  background: #F5DA5B;
  height: 70px;
  width: 100%;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SliderTitle = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 124%;
  color: #1A1B20;
  margin-right: 80px;
`;

const SliderIcon = styled.span`
  width: 10px;
  height: 10px;
  background: #31B047;
  border-radius: 1px;
  transform: rotate(-45deg);
`;

const SliderIconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
`;

const Slider = ({sliderContent}) => {
  return (
    <Marquee gradient={false} speed={90} style={{ background: "#F5DA5B"}}>
      <SliderBlock>
        {sliderContent.map(item => {
          if (item === 'icon') {
            return <SliderIconBlock key={item}><SliderIcon/></SliderIconBlock>
          }
          return <SliderTitle key={item}>{item}</SliderTitle>
        })}
      </SliderBlock>
    </Marquee>
  )
}

export default Slider