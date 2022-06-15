import styled from "styled-components";
import Link from "next/link";

import Logo from "../../public/logo.svg";
import BurgerMenu from "../shared/BurgerMenu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Wrapper = styled.div`
  display: flex;
  top: 0;
  position: absolute;
  z-index: 4;
  justify-content: space-between;
  padding: 26px 60px;
  width: 100%;
  align-items: center;

  @media (min-width: 360px) and (max-width: 992px) {
    padding: 16px 22px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    path {
      fill: ${(props) => (props?.fill ? "#000000" : "#F8D448")};
    }
  }
`;

const Links = styled.div`
  a {
    color: ${(props) => (props?.fill ? "#000000" : "#FFFFFF")} !important;
  }

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const LinkA = styled.a`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.8;
  padding-right: 40px;
  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }
`;

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <MobileMenu />}
      <Wrapper>
        <IconWrapper fill={props.fill}>
          <Logo />
        </IconWrapper>
        <BurgerMenu isMenuOpen={isMenuOpen} onMenuClick={onMenuClick} />
        <Links fill={props.fill}>
          <Link href="/ecosystem" passHref>
            <LinkA>Ecosystem</LinkA>
          </Link>
          <Link href="/resources" passHref>
            <LinkA>Ecosystem</LinkA>
          </Link>
          <LinkA href="http://bas-node.antimatter.finance:4000">Explorer</LinkA>
          <LinkA href="http://bas-node.antimatter.finance:5000">Faucet</LinkA>
          <LinkA>Contact</LinkA>
        </Links>
      </Wrapper>
    </>
  );
};

export default Header;
