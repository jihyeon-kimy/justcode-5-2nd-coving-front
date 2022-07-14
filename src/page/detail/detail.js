import styled from 'styled-components';
import Slider from './slider';
import TopContainer from './topContainer/topContainer';
import 'swiper/css/bundle';
import { BiHeart, BiUpload, BiChevronLeft } from 'react-icons/bi';
import { useState } from 'react';
import Header from '../main/header/header';

const Container = styled.section`
  position: absolute;
  max-width: 100%;
  height: 600vh;
`;

const EpListContainer = styled.div`
  width: 100%;
  height: 380px;
  padding-top: 3%;
`;

const OrderingBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 155px;
  margin-left: 2.5%;
  div:hover{
      cursor: pointer;
    }
  }
`;

function Detail() {
  const [value, setValue] = useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const reverse = data
    .slice(0)
    .reverse()
    .map(num => num);
  const onTClick = () => {
    setValue(true);
  };
  const onFClick = () => {
    setValue(false);
  };
  return (
    <Container>
      <Header />
      <TopContainer />
      <EpListContainer>
        <OrderingBox>
          <div
            onClick={onTClick}
            style={value ? { color: 'white' } : { color: '#c4c4c4' }}
          >
            첫화부터
          </div>
          <div
            onClick={onFClick}
            style={value ? { color: '#c4c4c4' } : { color: 'white' }}
          >
            최신화부터
          </div>
        </OrderingBox>
        <Slider width={274} height={276} data={value ? data : reverse} />
      </EpListContainer>
    </Container>
  );
}

export default Detail;
