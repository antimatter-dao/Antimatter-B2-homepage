import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { useRef, useState } from "react";

import Logo from "../../public/logo.svg";
import BurgerMenu from "../shared/BurgerMenu";
import MobileMenu from "./MobileMenu";
import { LoadingBar } from "react-redux-loading-bar";
import Arrow from "../../public/arrow.svg";

import Twitter from "../../public/Networks/twitter.svg";
import GitHub from "../../public/Networks/gitHub.svg";
import Telegram from "../../public/Networks/telegram.svg";
import Medium from "../../public/Networks/social.svg";
import Forum from "../../public/Networks/forum.svg";
import useOutsideClick from "../../hook/useOutsideClick";

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
  width: 498px;
  position: relative;
  display: flex;
  > a {
    color: ${(props) => (props?.fill ? "#000000" : "#FFFFFF")} !important;
  }

  @media (min-width: 360px) and (max-width: 992px) {
    display: none;
  }
`;

const LinkA = styled.a`
  display: flex;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.8;
  margin-right: 40px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  min-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 300px) and (max-width: 1300px) {
    min-width: 100%;
  }
`;

const ContactWrapper = styled.div`
  position: absolute;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 144px;
  top: 30px;
  padding: 20px;
  right: -5%;
`;

const ContactListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 29px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkContact = styled.a`
  cursor: pointer;
  display: flex;
  color: #121212 !important;

  &:hover {
    color: #f8d448 !important;

    & div svg path {
      fill: #f8d448;
    }
  }
`;

const IconContact = styled.div`
  margin-right: 12px;
  & svg path {
    fill: black;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  transform: ${({ isContactOpen }) => (isContactOpen ? "rotate(0deg)" : "rotate(180deg)")};

  & svg path {
    stroke: ${({ isContactOpen }) => (isContactOpen ? "#f8d448" : "#ffffff")};
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props?.isMenuOpen ? "hidden  !important" : "auto  !important")}
  }
`;

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const ref = useRef(null);
  const contactRef = useRef(null);

  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleContact = () => {
    setContactOpen(!isContactOpen);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  useOutsideClick(ref, closeContact, contactRef);

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
            <LinkA href="http://bas-node.antimatter.finance:4000" target="_blank" rel="noreferrer">
              Explorer
            </LinkA>
            <LinkA href="http://bas-node.antimatter.finance:5000" target="_blank" rel="noreferrer">
              Faucet
            </LinkA>
            <LinkA onClick={toggleContact} ref={contactRef}>
              Contact
              <ArrowWrapper isContactOpen={isContactOpen}>
                <Arrow />
              </ArrowWrapper>
            </LinkA>

            {isContactOpen && (
              <ContactWrapper ref={ref}>
                <ContactListWrapper>
                  <ListItem>
                    <LinkContact href="https://antimatterdefi.medium.com/" target="_blank" rel="noreferrer">
                      <IconContact>
                        <Medium />
                      </IconContact>
                      Medium
                    </LinkContact>
                  </ListItem>
                  <ListItem>
                    <LinkContact href="https://twitter.com/antimatterdefi" target="_blank" rel="noreferrer">
                      <IconContact>
                        <Twitter />
                      </IconContact>
                      Twitter
                    </LinkContact>
                  </ListItem>
                  <ListItem>
                    <LinkContact href="https://t.me/antimatterchat" target="_blank" rel="noreferrer">
                      <IconContact>
                        <Telegram />
                      </IconContact>
                      Telegram
                    </LinkContact>
                  </ListItem>
                  <ListItem>
                    <LinkContact href="https://github.com/antimatter-dao" target="_blank" rel="noreferrer">
                      <IconContact>
                        <GitHub />
                      </IconContact>
                      Github
                    </LinkContact>
                  </ListItem>
                  <ListItem>
                    <LinkContact href="https://forum.antimatter.finance" target="_blank" rel="noreferrer">
                      <IconContact>
                        <Forum />
                      </IconContact>
                      Forum
                    </LinkContact>
                  </ListItem>
                </ContactListWrapper>
              </ContactWrapper>
            )}
          </Links>
        </Container>
      </Wrapper>

      <GlobalStyle isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Header;
