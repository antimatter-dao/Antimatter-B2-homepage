import styled from "styled-components";
import ListFeature from "../../shared/ListFeature/ListFeature";

const Wrapper = styled.div`
  display: flex;
  min-height: 740px;
  max-height: 740px;
  background: ${props => props?.background && props?.background };
  border-radius: 30px 30px 0 0;
`;

const Content = styled.div`
  padding: 108px 30px 0 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: ${props => props?.color && props?.color };
  padding-bottom: 20px;
`

const Description = styled.h3`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 132%;
  color: ${props => props?.color && props?.color };
  opacity: 0.8;
  padding-bottom: 20px;
`

const Button = styled.button`
  border-radius: 20px;
  padding: 20px 50px;
  background: #F8D448;
  max-width: 344px;
  border: none;
  
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #000000;
`

const ImgContainer = styled.div`
  padding-top: 86px;
`

const Img = styled.img`
  width: 750px;
`

const Slide = ({ slide }) => {
  return (
    <Wrapper background={slide.backgroundFill}>
      <Content>
        <InfoBlock>
          <Title color={slide.colorText}>{slide.title}</Title>
          <Description color={slide.colorText}>{slide.description}</Description>
          {
            slide.list && (
              <ListFeature listFeature={slide.list} fill={slide.fill} />
            )
          }
          <Button>{slide.buttonTitle}</Button>
        </InfoBlock>
      </Content>
      <ImgContainer>
        <Img src={slide.imgUrl} />
      </ImgContainer>
    </Wrapper>
  )
}

export default Slide