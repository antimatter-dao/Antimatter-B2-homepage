import styled from "styled-components";

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
  font-family: 'SF Pro Display';
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

const SliderImg = styled.img`
  height: 82px;
`;

const SliderIconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
`;

const TickerWrapperFirstHalf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 0;
  animation: ticker 30s infinite linear forwards;


  @keyframes ticker {
    0% {
      transform: translate(100%, 0);
    }

    50% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
    }
  }
`;


const Slider = ({ sliderContent }) => {
  return (
    <SliderBlock>
      <TickerWrapperFirstHalf>
        {sliderContent.map(item => {
          if (item === 'icon') {
            return <SliderIconBlock ket={item}><SliderIcon/></SliderIconBlock>
          }
          if (item.name === 'img'){
            return <SliderImg key={item.img} src={`./${item.img}`} />
          }
          return <SliderTitle key={item}>{item}</SliderTitle>
        })}
      </TickerWrapperFirstHalf>
    </SliderBlock>
  )
}

export default Slider