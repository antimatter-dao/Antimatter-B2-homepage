import styled from "styled-components";

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

const Logo = styled.img``;

const Links = styled.div``;

const Link = styled.a`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  opacity: 0.8;
  padding-right: 40px;
  
  &:last-child{
    padding-right: 0;
  }
`;

const Header = () => {
  return(
    <Wrapper>
      <Logo src={'./logo.svg'}/>
      <Links>
        <Link>Ecosystem</Link>
        <Link>Resources</Link>
        <Link>Contact</Link>
      </Links>
    </Wrapper>
  )
}

export default Header