import styled from "styled-components";
import Button from "../../shared/Button/Button";

const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;
  padding-bottom: 120px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 120px;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const BlogContainer = styled.div`
  display: flex;
  min-width: 387px;
  min-height: 480px;
  border: 1px solid #121212;
  border-radius: 30px;

  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 76px;
`;

const Title = styled.h1`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #000000;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 124%;
  color: #121212;
  margin: 0;
  padding-top: 24px;
`;

const BlogImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props?.backgroundImg ? `url(./${props?.backgroundImg})` : null};
  height: 181px;
  width: 100%;
  border-radius: 30px 30px 0 0;
`

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  box-sizing: border-box;
`;

const Description = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 145%;
  color: #1B1A1F;
  padding-top: 12px;
`;

const BlogWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
`

const BlogDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BlogDate = styled.span`
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: #1B1A1F;
  padding-bottom: 10px;
`

const BlogButton = styled.button`
  background: #000000;
  border-radius: 16px;
  padding: 14px 32px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  border: none;
  
  &:hover{
    background: #F8D448;
    color: #121212;
    transition: .7s;
  }
`

const BlogDateImg = styled.img`
  width: 96px;
  height: 15px;
`

const Blog = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>Our Blog</Title>
          <Button>Open All Articles</Button>
        </HeaderContainer>
        <Content>
          <BlogContainer>
            <BlogImg backgroundImg={'blog1.jpg'}/>
            <BlogInfo>
              <SubTitle>All Ye Faithful</SubTitle>
              <Description>
                Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the
                faithful with FUD in service to their master...
              </Description>
              <BlogWrap>
                <BlogButton>Read More</BlogButton>
                <BlogDateContainer>
                  <BlogDate>Oct 14, 2021</BlogDate>
                  <BlogDateImg src='./bitmex.jpg' />
                </BlogDateContainer>
              </BlogWrap>
            </BlogInfo>
          </BlogContainer>
          <BlogContainer>
            <BlogImg backgroundImg={'blog2.jpg'}/>
            <BlogInfo>
              <SubTitle>All Ye Faithful</SubTitle>
              <Description>
                Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the
                faithful with FUD in service to their master.
              </Description>
              <BlogWrap>
                <BlogButton>Read More</BlogButton>
                <BlogDateContainer>
                  <BlogDate>Oct 14, 2021</BlogDate>
                  <BlogDateImg src='./bitmex.jpg' />
                </BlogDateContainer>
              </BlogWrap>
            </BlogInfo>
          </BlogContainer>
          <BlogContainer>
            <BlogImg backgroundImg={'blog3.jpg'}/>
            <BlogInfo>
              <SubTitle>All Ye Faithful</SubTitle>
              <Description>
                Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the
                faithful with FUD in service to their master.
              </Description>
              <BlogWrap>
                <BlogButton>Read More</BlogButton>
                <BlogDateContainer>
                  <BlogDate>Oct 14, 2021</BlogDate>
                  <BlogDateImg src='./bitmex.jpg' />
                </BlogDateContainer>
              </BlogWrap>
            </BlogInfo>
          </BlogContainer>
          <BlogContainer>
            <BlogImg backgroundImg={'blog1.jpg'}/>
            <BlogInfo>
              <SubTitle>All Ye Faithful</SubTitle>
              <Description>
                Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the
                faithful with FUD in service to their master...
              </Description>
              <BlogWrap>
                <BlogButton>Read More</BlogButton>
                <BlogDateContainer>
                  <BlogDate>Oct 14, 2021</BlogDate>
                  <BlogDateImg src='./bitmex.jpg' />
                </BlogDateContainer>
              </BlogWrap>
            </BlogInfo>
          </BlogContainer>
          <BlogContainer>
            <BlogImg backgroundImg={'blog2.jpg'}/>
            <BlogInfo>
              <SubTitle>All Ye Faithful</SubTitle>
              <Description>
                Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the
                faithful with FUD in service to their master.
              </Description>
              <BlogWrap>
                <BlogButton>Read More</BlogButton>
                <BlogDateContainer>
                  <BlogDate>Oct 14, 2021</BlogDate>
                  <BlogDateImg src='./bitmex.jpg' />
                </BlogDateContainer>
              </BlogWrap>
            </BlogInfo>
          </BlogContainer>
          <BlogContainer>
            <BlogImg backgroundImg={'blog3.jpg'}/>
            <BlogInfo>
              <SubTitle>All Ye Faithful</SubTitle>
              <Description>
                Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the
                faithful with FUD in service to their master.
              </Description>
              <BlogWrap>
                <BlogButton>Read More</BlogButton>
                <BlogDateContainer>
                  <BlogDate>Oct 14, 2021</BlogDate>
                  <BlogDateImg src='./bitmex.jpg' />
                </BlogDateContainer>
              </BlogWrap>
            </BlogInfo>
          </BlogContainer>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Blog