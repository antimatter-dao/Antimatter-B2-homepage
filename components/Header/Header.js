import styled from "styled-components";

import Logo from '../../public/logo.svg'

const Wrapper = styled.div`
  display: flex;
  top: 0;
  position: absolute;
  z-index: 4;
  justify-content: space-between;
  padding: 26px 60px;
  width: 100%;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
 svg{
   path{
     fill: ${props => props?.fill ? '#000000' : '#F8D448'};
   }
 }
`;

const Links = styled.div`
  a{
    color: ${props => props?.fill ? '#000000' : '#FFFFFF'} !important;
  }

  @media (min-width: 360px) and (max-width: 992px) {
   display: none;
  }
`;

const Link = styled.a`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.8;
  padding-right: 40px;
  cursor: pointer;
  
  &:last-child{
    padding-right: 0;
  }
`;

const Header = (props) => {
  return(
    <Wrapper>
      <IconWrapper fill={props.fill}>
        <Logo />
      </IconWrapper>
      <Links fill={props.fill}>
        <Link href={'/ecosystem'}>Ecosystem</Link>
        <Link>Resources</Link>
        <Link>Explorer</Link>
        <Link>Faucet</Link>
        <Link>Contact</Link>
      </Links>
    </Wrapper>
  )
}

export default Header