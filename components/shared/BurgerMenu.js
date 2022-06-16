import { memo } from "react";
import styled from "styled-components";

const BurgerMenuWrap = styled.button`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  padding: 0;
  z-index: 102;
  width: 40px;
  height: 40px;
  align-self: ${props => props.isMenuOpen ? "auto" : "center"};
  border: ${props => props.isInversionColor ? '1px solid #F0F1F3' : '1px solid #000000'}; 
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 2px;
    background: ${props => props.isInversionColor ? '#fff' : '#000'};

    border-radius: 20px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0;

    :first-child {
      transform: ${props => props.isMenuOpen ? "translate(3px,-3px)  rotate(45deg)" : "rotate(0)"};
      margin-bottom: 4px;
    }

    :last-child {
      transform: ${props => props.isMenuOpen ? "translate(3px,3px) rotate(-45deg)" : "rotate(0)"};
      margin-top: 4px;
    }
  }

  @media (min-width: 360px) and (max-width: 992px) {
    display: flex;
  }
`;

const BurgerMenu = ({ isMenuOpen, onMenuClick, isInversionColor = true  }) => {
  return (
    <BurgerMenuWrap
      isInversionColor={isMenuOpen ? isMenuOpen : isInversionColor}
      isMenuOpen={isMenuOpen}
      onClick={onMenuClick}
    >
      <div />
      <div />
    </BurgerMenuWrap>
  );
}

export default memo(BurgerMenu);