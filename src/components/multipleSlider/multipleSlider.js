import styled from 'styled-components';
import { css } from 'styled-components';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Slide from './slide';

function MultipleSlider({ rank }) {
  const swiperNavPreRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  let mockData = [
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
      genre: '드라마',
      summary:
        '자존감 0, 자기애 0인 대학생 희수가 누구라도 한 달간 자신을 사랑하게 만드는 신비한 자ㄱ사 노트를 발견한 뒤 찐 남사친 시호를 비롯한 여러 남자들과 얽히며 벌어지는 유통기한 주의 로맨스',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
      genre: '예능',
      summary:
        '여배우X 누나O 어딘가 까탈스러워보이고, 어딘가 어려울 것만 같은 여배우들. 그러나 알고 보면 하나같이 호기심 많고 천진난만한 귀여운 모습을 지닌 늘 소녀이고 싶은 친근한 누나들. 배낭여행을 통해 그동안 알지 못했던 누나들의 새로운 매력이 공개된다! 누나들의 아주 특별한 도전 할배들에게 배낭여행이 그랬듯, 누나들에게도 배낭여행은 큰 도전이다.',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
      genre: '예능',
      summary:
        '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
      genre: '드라마',
      summary:
        '자존감 0, 자기애 0인 대학생 희수가 누구라도 한 달간 자신을 사랑하게 만드는 신비한 자ㄱ사 노트를 발견한 뒤 찐 남사친 시호를 비롯한 여러 남자들과 얽히며 벌어지는 유통기한 주의 로맨스',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
      genre: '예능',
      summary:
        '여배우X 누나O 어딘가 까탈스러워보이고, 어딘가 어려울 것만 같은 여배우들. 그러나 알고 보면 하나같이 호기심 많고 천진난만한 귀여운 모습을 지닌 늘 소녀이고 싶은 친근한 누나들. 배낭여행을 통해 그동안 알지 못했던 누나들의 새로운 매력이 공개된다! 누나들의 아주 특별한 도전 할배들에게 배낭여행이 그랬듯, 누나들에게도 배낭여행은 큰 도전이다.',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
      genre: '예능',
      summary:
        '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
      genre: '드라마',
      summary:
        '자존감 0, 자기애 0인 대학생 희수가 누구라도 한 달간 자신을 사랑하게 만드는 신비한 자ㄱ사 노트를 발견한 뒤 찐 남사친 시호를 비롯한 여러 남자들과 얽히며 벌어지는 유통기한 주의 로맨스',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
      genre: '예능',
      summary:
        '여배우X 누나O 어딘가 까탈스러워보이고, 어딘가 어려울 것만 같은 여배우들. 그러나 알고 보면 하나같이 호기심 많고 천진난만한 귀여운 모습을 지닌 늘 소녀이고 싶은 친근한 누나들. 배낭여행을 통해 그동안 알지 못했던 누나들의 새로운 매력이 공개된다! 누나들의 아주 특별한 도전 할배들에게 배낭여행이 그랬듯, 누나들에게도 배낭여행은 큰 도전이다.',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
      genre: '예능',
      summary:
        '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
      genre: '드라마',
      summary:
        '자존감 0, 자기애 0인 대학생 희수가 누구라도 한 달간 자신을 사랑하게 만드는 신비한 자ㄱ사 노트를 발견한 뒤 찐 남사친 시호를 비롯한 여러 남자들과 얽히며 벌어지는 유통기한 주의 로맨스',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
      genre: '예능',
      summary:
        '여배우X 누나O 어딘가 까탈스러워보이고, 어딘가 어려울 것만 같은 여배우들. 그러나 알고 보면 하나같이 호기심 많고 천진난만한 귀여운 모습을 지닌 늘 소녀이고 싶은 친근한 누나들. 배낭여행을 통해 그동안 알지 못했던 누나들의 새로운 매력이 공개된다! 누나들의 아주 특별한 도전 할배들에게 배낭여행이 그랬듯, 누나들에게도 배낭여행은 큰 도전이다.',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
      genre: '예능',
      summary:
        '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
      genre: '드라마',
      summary:
        '자존감 0, 자기애 0인 대학생 희수가 누구라도 한 달간 자신을 사랑하게 만드는 신비한 자ㄱ사 노트를 발견한 뒤 찐 남사친 시호를 비롯한 여러 남자들과 얽히며 벌어지는 유통기한 주의 로맨스',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
      genre: '예능',
      summary:
        '여배우X 누나O 어딘가 까탈스러워보이고, 어딘가 어려울 것만 같은 여배우들. 그러나 알고 보면 하나같이 호기심 많고 천진난만한 귀여운 모습을 지닌 늘 소녀이고 싶은 친근한 누나들. 배낭여행을 통해 그동안 알지 못했던 누나들의 새로운 매력이 공개된다! 누나들의 아주 특별한 도전 할배들에게 배낭여행이 그랬듯, 누나들에게도 배낭여행은 큰 도전이다.',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
      genre: '예능',
      summary:
        '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P001616588.jpg/dims/resize/F_webp,480',
      title: '나를 사랑하지 않는 X에게',
      genre: '드라마',
      summary:
        '자존감 0, 자기애 0인 대학생 희수가 누구라도 한 달간 자신을 사랑하게 만드는 신비한 자ㄱ사 노트를 발견한 뒤 찐 남사친 시호를 비롯한 여러 남자들과 얽히며 벌어지는 유통기한 주의 로맨스',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000125872.png/dims/resize/F_webp,480',
      title: '꽃보다 누나',
      genre: '예능',
      summary:
        '여배우X 누나O 어딘가 까탈스러워보이고, 어딘가 어려울 것만 같은 여배우들. 그러나 알고 보면 하나같이 호기심 많고 천진난만한 귀여운 모습을 지닌 늘 소녀이고 싶은 친근한 누나들. 배낭여행을 통해 그동안 알지 못했던 누나들의 새로운 매력이 공개된다! 누나들의 아주 특별한 도전 할배들에게 배낭여행이 그랬듯, 누나들에게도 배낭여행은 큰 도전이다.',
    },
    {
      img: 'https://image.tving.com/upload/cms/caip/CAIP0900/P000643144.jpg/dims/resize/F_webp,480',
      title: '유퀴즈 온 더 블럭',
      genre: '예능',
      summary:
        '큰 자기 유재석과 아기자기 조세호의 자기들 마음대로 떠나는 사람 여행',
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
        onReachEnd={swiper =>
          (swiperNavNextRef.current.style.visibility = 'hidden')
        }
        onReachBeginning={swiper =>
          (swiperNavPreRef.current.style.visibility = 'hidden')
        }
      >
        {mockData.map((data, idx) => {
          return (
            <SwiperSlide key={data.toString() + idx.toString()}>
              <Slide data={data} idx={idx} rank={rank} />
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
