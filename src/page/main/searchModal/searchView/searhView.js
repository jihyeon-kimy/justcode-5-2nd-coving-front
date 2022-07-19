import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Slide from './slide';

function SearchView({ searchResultList }) {
  let keywordInput = useSelector(state => state.inputKeyword.keyword);
  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    HandleProgramList();
    window.addEventListener('resize', HandleProgramList);
    return () => {
      window.removeEventListener('resize', HandleProgramList);
    };
  }, [searchResultList]);

  const HandleProgramList = searchResultList => {
    let dataLength = searchResultList?.length;
    if (window.innerWidth > 1460 && dataLength > 7)
      setProgramList(searchResultList.slice(7, dataLength));
    else if (
      window.innerWidth > 1200 &&
      window.innerWidth <= 1460 &&
      dataLength > 6
    )
      setProgramList(searchResultList.slice(6, dataLength));
    else if (
      window.innerWidth > 760 &&
      window.innerWidth <= 1200 &&
      dataLength > 5
    )
      setProgramList(searchResultList.slice(5, dataLength));
    else if (
      window.innerWidth > 0 &&
      window.innerWidth <= 760 &&
      dataLength > 3
    )
      setProgramList(searchResultList.slice(3, dataLength));
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
        {searchResultList &&
          searchResultList.map((data, idx) => {
            return (
              <SwiperSlide key={data.toString() + idx.toString()}>
                <Slide data={data} idx={idx} />
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
`;
