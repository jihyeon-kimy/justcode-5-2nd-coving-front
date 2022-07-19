import styled from 'styled-components';
import { css } from 'styled-components';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Slide from './slide';

function MultipleSlider({ rank, summary, title, count, programList }) {
  const swiperNavPreRef = useRef(null);
  const swiperNavNextRef = useRef(null);

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
      <Title>
        {title}
        <span>{count}</span>
      </Title>

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
        speed={700}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1460: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        onReachEnd={swiper =>
          (swiperNavNextRef.current.style.visibility = 'hidden')
        }
        onReachBeginning={swiper =>
          (swiperNavPreRef.current.style.visibility = 'hidden')
        }
      >
        {programList &&
          programList.map((program, idx) => {
            return (
              <SwiperSlide key={program.toString() + idx.toString()}>
                <Slide
                  program={program}
                  idx={idx}
                  rank={rank}
                  summary={summary}
                />
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
  margin-bottom: 2%;
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
    width: 0.4vw;
    height: 0.4vw;
    border-radius: 0.5rem;
    background-color: #dad9d9 !important;
  }
`;

const Title = styled.div`
  padding-left: 4%;
  position: relative;
  top: 13px;
  font-size: calc(6px + 0.9vw);
  font-weight: 600;
  color: white;

  span {
    padding-left: 10px;
    font-size: calc(3px + 0.7vw);
    font-weight: 500;
    color: #c4c4c4;
  }
`;

const StyledSwiper = styled(Swiper)`
  padding: 1.5% 4% 0;
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
