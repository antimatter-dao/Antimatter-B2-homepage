import { memo } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../shared/Button/Button";
import useWideSize from "../../../hook/useWideSize";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 120px;
  margin: 120px auto 0;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-top: 50px;
    padding-bottom: 50px;
  }
`;

const Container = styled.div`
  margin: 0 120px;
  width: 100%;
  flex-direction: column;

  @media (min-width: 360px) and (max-width: 992px) {
    margin: 0 16px;
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (min-width: 360px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const BlogContainer = styled.div`
  display: flex;
  min-width: 387px;
  min-height: 480px;
  width: 300px;
  border: 1px solid #121212;
  border-radius: 30px;

  flex-direction: column;

  @media (min-width: 360px) and (max-width: 992px) {
    max-width: 390px;
    min-width: initial;
    width: 100%;
    height: 555px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 76px;

  @media (min-width: 360px) and (max-width: 992px) {
    flex-direction: column;
    padding-bottom: 30px;
    
    max-width: 390px;
    min-width: initial;
    width: 100%;
  }
`;

const Title = styled.h1`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #000000;
  margin: 0;

  @media (min-width: 360px) and (max-width: 992px) {
    margin-bottom: 0;
    font-size: 28px;
  }
`;

const SubTitle = styled.h3`
  font-family: "SF Pro Display", sans-serif;
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
  background-image: ${(props) => (props?.backgroundImg ? `url(${props?.backgroundImg})` : null)};
  height: 181px;
  width: 100%;
  border-radius: 30px 30px 0 0;
`;

const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  box-sizing: border-box;
  height: 100%;
`;

const Description = styled.span`
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 145%;
  color: #1b1a1f;
  padding-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BlogWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  margin-top: auto;
`;

const BlogDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogDate = styled.span`
  font-family: "SF Pro Display", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: #1b1a1f;
  padding-bottom: 10px;
`;

const BlogButton = styled.button`
  background: #000000;
  border-radius: 16px;
  padding: 14px 32px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    background: #f8d448;
    color: #121212;
    transition: 0.7s;
  }
`;

const BlogDateImg = styled.img`
  width: 96px;
  height: 15px;
`;

const SlideContainer = styled.div``

const MobileButton = styled.button`
  max-width: 390px;
  min-width: initial;
  width: 100%;
  height: 59px;
  
  margin-top: 66px !important;
  
  background: linear-gradient(90deg, #F8D448 0%, #F8D448 100%);
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: #1B1A1F;
  border: none;
  
  &:hover {
    animation: change-color .7s ease-in-out infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
  }
`

const blogs = [
  {
    img: "blog1.jpg",
    title: "All Ye Faithful",
    description: " Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master...",
    date: "Oct 14, 2021",
    id: 1,
  },
  {
    img: "blog2.jpg",
    title: "All Ye Faithful",
    description: " Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master.",
    date: "Oct 14, 2021",
    id: 2,
  },
  {
    img: "blog3.jpg",
    title: "All Ye Faithful",
    description: " Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master...",
    date: "Oct 14, 2021",
    id: 3,
  },
  {
    img: "blog1.jpg",
    title: "All Ye Faithful",
    description: " Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master...",
    date: "Oct 14, 2021",
    id: 4,
  },
  {
    img: "blog2.jpg",
    title: "All Ye Faithful",
    description: " Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master...",
    date: "Oct 14, 2021",
    id: 5,
  },
  {
    img: "blog3.jpg",
    title: "All Ye Faithful",
    description: " Do not be led astray by the siren songs of capricious harpies – for these creatures wish to infect the faithful with FUD in service to their master...",
    date: "Oct 14, 2021",
    id: 6,
  },
];

const modules = [Navigation, Pagination];

const Blog = ({ posts }) => {
  const isMobile = useWideSize(770);
  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>Our Blog</Title>
          {!isMobile && (
            <Link href={"https://antimatterdefi.medium.com/"}>
              <a>
                <Button>Open All Articles</Button>
              </a>
            </Link>
          )}
        </HeaderContainer>
        {isMobile ? (
          <Swiper
            modules={modules}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1.1}
            spaceBetween={10}
            slidesOffsetBefore={0}
          >
            {posts.map((item) => (
              <SwiperSlide key={item.id}>
                <BlogContainer>
                  <BlogImg backgroundImg={item.img} />
                  <BlogInfo>
                    <SubTitle>{item.title}</SubTitle>
                    <Description>{item.description}</Description>
                    <BlogWrap>
                      <BlogButton>Read More</BlogButton>
                      <BlogDateContainer>
                        <BlogDate>{item.date}</BlogDate>
                        <BlogDateImg src="./bitmex.jpg" />
                      </BlogDateContainer>
                    </BlogWrap>
                  </BlogInfo>
                </BlogContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Content>
            {posts.map((item) => (
              <BlogContainer key={item.id}>
                <BlogImg backgroundImg={item.img} />
                <BlogInfo>
                  <SubTitle>{item.title}</SubTitle>
                  <Description>{item.description}</Description>
                  <BlogWrap>
                    <Link href={item.link}>
                      <a>
                        <BlogButton>Read More</BlogButton>
                      </a>
                    </Link>
                    <BlogDateContainer>
                      <BlogDate>{item.date}</BlogDate>
                      <BlogDateImg src="./bitmex.jpg" />
                    </BlogDateContainer>
                  </BlogWrap>
                </BlogInfo>
              </BlogContainer>
            ))}
          </Content>
        )}
      </Container>
    </Wrapper>
  );
};

export default memo(Blog);
