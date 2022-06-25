import * as React from "react";
import styled, { css } from "styled-components";

export const BUTTON_THEME = {
  YELLOW: "yellow",
  TRANSPARENT: "transparent",
  BORDER: "border",
  BLACK_BORDER: "black_border",
};

export const BUTTON_SIZE = {
  SMALL: "small",
  LARGE: "large",
  MEDIUM: "medium",
};

const sizesMap = {
  [BUTTON_SIZE.SMALL]: css`
    padding: 19px 59px;
  `,

  [BUTTON_SIZE.LARGE]: css`
    padding: 19px 40px;
  `,

  [BUTTON_SIZE.MEDIUM]: css`
    padding: 20px 24px;
  `,
};

const themesMap = {
  [BUTTON_THEME.YELLOW]: css`

    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(to right, #f8d448, #fcee21, #5bb847); 
    border-radius: 20px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: #1b1a1f;
    border: none;
    background-size: 300% 100%;

    &:hover {
      background-position: 100% 0;
      transition: all 0.4s ease-in-out;
    }
  `,

  [BUTTON_THEME.BORDER]: css`
    border: 1px solid #f8d448;
    background: transparent;
    border-radius: 20px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: #f8d448;

    &:hover {
    }
  `,

  [BUTTON_THEME.BLACK_BORDER]: css`
    border: 1px solid #000000;
    border-radius: 20px;
    background: transparent;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
    color: #000000;

    &:hover {
    }
  `,
};

const CustomButton = styled.button`
  cursor: pointer;

  ${(props) => props.theme && themesMap[props.theme]};
  ${(props) => props.size && sizesMap[props.size]};
`;

const Button = ({ theme, size, children }) => {
  return (
    <CustomButton size={size || BUTTON_SIZE.SMALL} theme={theme || BUTTON_THEME.YELLOW}>
      {children}
    </CustomButton>
  );
};

export default React.memo(Button);
