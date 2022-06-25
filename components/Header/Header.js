import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../public/logo.svg";
import BurgerMenu from "../shared/BurgerMenu";
import MobileMenu from "./MobileMenu";
import { LoadingBar } from "react-redux-loading-bar";

const Wrapper = styled.header`
  display: flex;
  top: 0;
  position: absolute;
  z-index: 4;
  justify-content: space-between;
  padding: 26px 60px;
  width: 100%;
  align-items: center;
  z-index: 102;

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
  text-shadow: 2px 2px black;

  &:last-child {
    padding-right: 0;
  }
`;

const Container = styled.div`
  min-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 300px) and (max-width: 1300px) {
    min-width: 100%;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props?.isMenuOpen ? "hidden" : "auto")}
  }
`;

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isInversionColor = props.fill !== "white";

  return (
    <>
      <LoadingBar style={{ zIndex: 5, backgroundColor: "#000000", position: "fixed" }} />
      {isMenuOpen && <MobileMenu />}
      <Wrapper>
        <Container>
          <Link href="/">
            <a>
              <IconWrapper fill={props.fill}>
                <Logo />
              </IconWrapper>
            </a>
          </Link>

          <BurgerMenu isMenuOpen={isMenuOpen} onMenuClick={onMenuClick} isInversionColor={isInversionColor} />
          <Links fill={props.fill}>
            <Link href="/ecosystem" passHref>
              <LinkA>Ecosystem</LinkA>
            </Link>
            <Link href="/resources" passHref>
              <LinkA>Resources</LinkA>
            </Link>
            <LinkA href="http://bas-node.antimatter.finance:4000" target="_blank">
              Explorer
            </LinkA>
            <LinkA href="http://bas-node.antimatter.finance:5000" target="_blank">
              Faucet
            </LinkA>
            <LinkA>Contact</LinkA>
          </Links>
        </Container>
      </Wrapper>

      <GlobalStyle isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Header;
