import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";

import Arrow from "./../../public/arrow-up-right.svg";
import ArrowTop from "../../public/arrow-big.svg";

import Twitter from "../../public/Networks/twitter.svg";
import GitHub from "../../public/Networks/gitHub.svg";
import Telegram from "../../public/Networks/telegram.svg";
import Medium from "../../public/Networks/social.svg";
import Forum from "../../public/Networks/forum.svg";

const MobileMenuWrapper = styled.div`
  position: fixed;
  z-index: 101;
  width: 100%;
  background-color: #121212;
  overflow: scroll;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 120px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
`;

const LinkA = styled.a`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 133.5%;
  color: #ffffff;
  padding-bottom: 12px;

  border-bottom: ${({ isContactOpen }) => (isContactOpen ? "none" : "1px solid #ffffff")};

  margin-bottom: ${({ isContactOpen }) => (isContactOpen ? "10px" : "27px")};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowContact = styled.div`
  display: flex;
  align-items: center;

  transform: ${({ isContactOpen }) => (isContactOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;

const ContactListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  padding-bottom: 21px;
  margin-bottom: 78px;
  border-bottom: 1px solid #ffffff;
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
  color: #ffffff;

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
    fill: white;
  }
`;

const MobileMenu = () => {
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleContact = () => {
    setContactOpen(!isContactOpen);
  };
  return (
    <MobileMenuWrapper>
      <Links>
        <Link href="/ecosystem" passHref>
          <LinkA>
            Ecosystem <Arrow />
          </LinkA>
        </Link>
        <Link href="/resources" passHref>
          <LinkA>
            Resources <Arrow />
          </LinkA>
        </Link>
        <LinkA href="http://bas-node.antimatter.finance:4000" target="_blank" rel="noreferrer">
          Explorer <Arrow />
        </LinkA>
        <LinkA href="http://bas-node.antimatter.finance:5000" target="_blank" rel="noreferrer">
          Faucet <Arrow />
        </LinkA>
        <LinkA onClick={toggleContact} isContactOpen={isContactOpen}>
          Contact{" "}
          <ArrowContact isContactOpen={isContactOpen}>
            <ArrowTop />
          </ArrowContact>
        </LinkA>
        {isContactOpen && (
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
              <LinkContact>
                <IconContact>
                  <Forum />
                </IconContact>
                Forum
              </LinkContact>
            </ListItem>
          </ContactListWrapper>
        )}
      </Links>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
