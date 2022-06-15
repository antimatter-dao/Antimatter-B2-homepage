import styled from "styled-components";


const FeaturesBlock = styled.ul`
  margin: 0;
  padding-left: 20px;
  padding-bottom: 52px;

  @media (min-width: 360px) and (max-width: 992px) {
    padding-bottom: 28px;
  }
`

const Feature = styled.li`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 132%;
  color: ${props => props?.fill && props?.fill};
  opacity: 0.8;
  padding-bottom: 16px;

  &::marker {
    font-size: 28px;
    font-weight: bold;
    color: #F8D448;
  }

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 16px;
  }
`

const Title = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 124%;
  color: ${props => props?.fill && props?.fill};
  padding-bottom: 16px;

  @media (min-width: 360px) and (max-width: 992px) {
    font-size: 20px;
    margin-top: 28px;
  }
`

const ListFeature = ({ listFeature, fill }) => {
  return (
    <>
      <Title fill={fill}>Features</Title>
      <FeaturesBlock>
        {listFeature.map((item) => <Feature key={item} fill={fill}>{item}</Feature>)}
      </FeaturesBlock>
    </>
  )
}

export default ListFeature