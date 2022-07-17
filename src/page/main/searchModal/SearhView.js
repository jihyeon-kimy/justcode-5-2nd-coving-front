import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

function Slide({ data, keywordInput }) {
  return (
    <SlideContainer>
      <ProgramImg img={data.img} />
      <Title>
        {data.title.includes(keywordInput) ? (
          <>
            {data.title.split(keywordInput)[0]}
            <Highlight>{keywordInput}</Highlight>
            {data.title.split(keywordInput)[1]}
          </>
        ) : (
          data.title
        )}
      </Title>
    </SlideContainer>
  );
}

function SearchView({ keywordInput }) {
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
  ];

  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    HandleProgramList();
    window.addEventListener('resize', HandleProgramList);
    return () => {
      window.removeEventListener('resize', HandleProgramList);
    };
  }, []);

  const HandleProgramList = () => {
    let dataLength = mockData.length;
    if (window.innerWidth > 1460 && mockData.length > 7)
      setProgramList(mockData.slice(7, dataLength));
    else if (
      window.innerWidth > 1200 &&
      window.innerWidth <= 1460 &&
      mockData.length > 6
    )
      setProgramList(mockData.slice(6, dataLength));
    else if (
      window.innerWidth > 760 &&
      window.innerWidth <= 1200 &&
      mockData.length > 5
    )
      setProgramList(mockData.slice(5, dataLength));
    else if (
      window.innerWidth > 0 &&
      window.innerWidth <= 760 &&
      mockData.length > 3
    )
      setProgramList(mockData.slice(3, dataLength));
    else setProgramList([]);
  };

  return (
    <Container>
      <StyledSwiper
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
      >
        {mockData.map((data, idx) => {
          return (
            <SwiperSlide key={data.toString() + idx.toString()}>
              <Slide data={data} idx={idx} keywordInput={keywordInput} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>

      <ProgramList>
        {programList &&
          programList.map((data, index) => {
            return (
              <Keyword key={data.toString() + index.toString()}>
                {data.title.includes(keywordInput) ? (
                  <>
                    {data.title.split(keywordInput)[0]}
                    <Highlight>{keywordInput}</Highlight>
                    {data.title.split(keywordInput)[1]}
                  </>
                ) : (
                  data.title
                )}
              </Keyword>
            );
          })}
      </ProgramList>
    </Container>
  );
}

export default SearchView;
const Container = styled.div`
  width: 100%;
  margin-bottom: 2%;
`;

const StyledSwiper = styled(Swiper)`
  overfow: hidden;
`;

const SlideContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  positioin: relative;
  :hover {
    cursor: pointer;
  }
`;
const ProgramImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  border-radius: 5px;
  background: #212121;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const Title = styled.div`
  padding-top: 5%;
  font-size: calc(7px + 0.5vw);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProgramList = styled.div`
  padding-top: 3%;
`;

const Keyword = styled.div`
  font-size: calc(7px + 0.6vw);
  font-weight: 600;
  color: #868686;
  padding-bottom: 1%;

  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const Highlight = styled.span`
  color: red;
  // font-weight: 500;
`;
