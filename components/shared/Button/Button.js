import * as React from "react";
import styled, { css } from "styled-components";

export const BUTTON_THEME = {
  YELLOW: "yellow",
  TRANSPARENT: "transparent",
  BORDER: "border",
}

export const BUTTON_SIZE = {
  SMALL: "small",
  LARGE: "large",
}

const sizesMap = {
  [BUTTON_SIZE.SMALL]: css`
    padding: 19px 59px;
  `,

  [BUTTON_SIZE.LARGE]: css`
    padding: 19px 40px;
  `,
};

const themesMap = {
  [BUTTON_THEME.YELLOW]: css`
    background: linear-gradient(90deg, #F8D448 0%, #F8D448 100%);
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: #1B1A1F;
    border: none;
    

    &:hover {
      
      animation: change-color .8s ease-in-out infinite;
      animation-direction: alternate;
      animation-fill-mode: both;
    }

    @keyframes change-color {
      0% {
        background: linear-gradient(90deg, #F8D448 0%, #8FC147 48.75%, #31B047 100%);
      }
      25% {
        background: linear-gradient(90deg, #8FC147 0%, #F8D448 30%, #8FC147 48.75% ,#31B047 100%);
      }
      50% {
        background: linear-gradient(90deg, #31B047 0%, #F8D448 48.75%, #31B047 100%);
      }
      75% {
        background: linear-gradient(90deg, #31B047 0%, #8FC147 30% ,#F8D448 70%, #31B047 100%);
      }
      100% {
        background: linear-gradient(90deg, #31B047 0%, #8FC147 48.75%, #F8D448 100%);
      }
    }
  `,

  [BUTTON_THEME.BORDER]: css`
    border: 1px solid #F8D448;
    background: transparent;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: #F8D448;

    &:hover {
     
    }
  `,
};

const CustomButton = styled.button`
  cursor: pointer;

  ${props => props.theme && themesMap[props.theme]};
  ${props => props.size && sizesMap[props.size]};
`;

const Button = ({theme, size, children}) => {
  return (
    <CustomButton
      size={size || BUTTON_SIZE.SMALL}
      theme={theme || BUTTON_THEME.YELLOW}
      // width={width}
      // disabled={disabled}
      // onClick={onClick}
    >
      {children}
    </CustomButton>
  );
}

export default React.memo(Button);
