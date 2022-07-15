import styled from 'styled-components';
import { css } from 'styled-components';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Slide from './slide';

function MultipleSlider() {
  const swiperNavPreRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  let mockData = [
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
    },

    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
    },
  ];
  return (
    <Container
      onMouseOver={() => {
        swiperNavPreRef.current.style.visibility = 'visible';
        swiperNavNextRef.current.style.visibility = 'visible';
      }}
      onMouseOut={() => {
        swiperNavPreRef.current.style.visibility = 'hidden';
        swiperNavNextRef.current.style.visibility = 'hidden';
      }}
    >
      <Title>티빙에서 꼭 봐야하는 콘텐츠</Title>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: swiperNavPreRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPreRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
        }}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 5,
            spaceBetween: 8,
            slidesPerGroup: 5,
          },
          800: {
            slidesPerView: 7,
            spaceBetween: 10,
            slidesPerGroup: 7,
          },
        }}
      >
        {mockData.map((data, idx) => {
          return (
            <SwiperSlide key={data.toString() + idx.toString()}>
              <Slide data={data} idx={idx} />
            </SwiperSlide>
          );
        })}
        <SwiperNavPrev ref={swiperNavPreRef} />
        <SwiperNavNext ref={swiperNavNextRef} />
      </StyledSwiper>
    </Container>
  );
}

export default MultipleSlider;

const Container = styled.div`
  width: 100%;
  margin-bottom: 3%;
  .swiper-pagination {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: flex-end;
    padding-right: 3%;
    z-index: -1;
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet {
    width: 0.4%;
    min-width: 4.5px;
    min-height: 4.5px;
    padding-bottom: 0.4%;
    background-color: #dad9d9 !important;
  }
`;

const Title = styled.div`
  padding-left: 3%;
  position: relative;
  top: 13px;
  font-size: calc(6px + 0.9vw);
  font-weight: 600;
  color: white;
`;

const StyledSwiper = styled(Swiper)`
  padding: 1.5% 3% 0;
  overfow: hidden;
`;

const Nav = css`
  width: 3%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #000000a1;
  visibility: hidden;
  cursor: pointer;
  z-index: 1;
`;

const SwiperNavPrev = styled.div`
  background-image: url('./image/prev-arrow.png');
  left: 0px;
  ${Nav}
`;

const SwiperNavNext = styled.div`
  background-image: url('./image/next-prev.png');
  right: 0px;
  ${Nav}
`;
