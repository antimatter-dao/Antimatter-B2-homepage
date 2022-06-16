import styled, {createGlobalStyle} from "styled-components";
import Link from "next/link";

import Arrow from "./../../public/arrow-up-right.svg"

const MobileMenuWrapper = styled.div`
  position: fixed;
  z-index: 101;
  width: 100%;
  background-color: #121212;
  overflow: hidden;
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
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 133.5%;
  color: #FFFFFF;
  padding-bottom: 12px;
  
  border-bottom: 1px solid #FFFFFF;
  margin-bottom: 27px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const MobileMenu = () => (
  <MobileMenuWrapper>
    <Links>
      <Link href="/ecosystem" passHref>
        <LinkA>Ecosystem <Arrow /></LinkA>
      </Link>
      <Link href="/resources" passHref>
        <LinkA>Resources <Arrow /></LinkA>
      </Link>
      <LinkA href="http://bas-node.antimatter.finance:4000">Explorer <Arrow /></LinkA>
      <LinkA href="http://bas-node.antimatter.finance:5000">Faucet <Arrow /></LinkA>
      <LinkA>Contact <Arrow /></LinkA>
    </Links>
  </MobileMenuWrapper>
);

export default MobileMenu;
