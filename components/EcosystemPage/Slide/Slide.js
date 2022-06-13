import styled from "styled-components";

import ListFeature from "../../shared/ListFeature/ListFeature";
import {WithScrollFreezing} from "../../../hook/withScrollFreezingProps";
import Footer from "../../Footer/Footer";
import FadeInUp from "../../../utils/fade-in-up";
import {useRef, useState} from "react";
import useIntersectionObserver from "../../../hook/useIntersectionObserver";


const Wrapper = styled.div`
  display: flex;
  height: ${props => props?.minHeight && props?.minHeight};
  background: ${props => props?.background && props?.background};
  border-radius: 30px 30px 0 0;
  position: relative;
  justify-content: space-between;
  overflow: hidden;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding: 140px 30px 0 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%;
    padding: 44px 16px 0 16px;
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: ${props => props?.color && props?.color};
  padding-bottom: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 28px;
  }
`

const Description = styled.h3`
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 132%;
  color: ${props => props?.color && props?.color};
  opacity: 0.8;
  padding-bottom: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding-bottom: 0;
    font-size: 18px;
  }
`

const Button = styled.button`
  border-radius: 20px;
  padding: 20px 30px;
  max-width: 344px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;

  margin-top: ${props => props?.marginTop ? props?.marginTop : "0px"};
  background: ${props => props?.background ? props?.background : "#F8D448"};
  border: ${props => props?.border ? props?.border : "none"};
  color: ${props => props?.color ? props?.color : "#000000"};
`

const ImgContainer = styled.div`
  padding-top: 140px;
  width: 50%;
  height: 100%;
  position: relative;
`

const ImgContainerSvg = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 360px) and (max-width: 992px) {
    width: 100%;
  }
`

const Img = styled.img`
  position: absolute;
  transform: translate(${props => props?.translate && props?.translate});
  width: ${props => props?.width && props?.width};
  height: 100vh;
`

const Slide = ({slide}) => {
  const ref = useRef(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting;

  return (
    <>
      <WithScrollFreezing>
        <Wrapper background={slide.backgroundFill} minHeight={slide.minHeight} ref={ref}>
          <Content>
            <InfoBlock>
              <Title color={slide.colorText}>{slide.title}</Title>
              <Description color={slide.colorText}>{slide.description}</Description>
              {
                slide.list && (
                  <ListFeature listFeature={slide.list} fill={slide.fill}/>
                )
              }
              <Button
                border={slide.buttonBorder}
                background={slide.buttonBackground}
                marginTop={slide.marginTopButton}
                color={slide.buttonColor}
              >
                {slide.buttonTitle}
              </Button>
            </InfoBlock>
          </Content>
          {
            slide.imgSvg ? (
              <ImgContainerSvg>
                {slide.imgSvg}
              </ImgContainerSvg>
            ) : (
              <ImgContainer>
                <FadeInUp active={isVisible}>
                  <Img src={slide.imgUrl} width={slide.widthImg} translate={slide.translate}/>
                </FadeInUp>
              </ImgContainer>
            )
          }
        </Wrapper>
        {
          slide.id === 7 && (
            <Footer/>
          )
        }
      </WithScrollFreezing>
    </>
  )
}

export default Slide