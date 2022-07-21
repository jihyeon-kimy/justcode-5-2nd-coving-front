import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Slide({ title, subTitle, img, programId }) {
  let navigate = useNavigate();
  return (
    <Container>
      <SliderImg img={img} />
      <SliderInfo>
        <Titles>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Titles>
        <GoDetail
          onClick={() => {
            navigate(`/detail/${programId}`);
          }}
        >
          자세히보기
        </GoDetail>
      </SliderInfo>
    </Container>
  );
}

const Container = styled.div``;

const SliderImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 45%;
  background-image: linear-gradient(0deg, black, transparent 85%, #0000009c),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const SliderInfo = styled.div`
  width: 94%;
  height: 23%;
  margin: 0 3%;
  position: absolute;
  top 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Titles = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 50%;
  font-size: 3vw;
  font-weight: 700;
  word-break: keep-all;
  color: #ffffff;
`;

const SubTitle = styled.div`
  font-size: 1.3vw;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.87;
`;

const GoDetail = styled.div`
  width: 13%;
  min-width: 70px;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #a7a0a0;
  border-radius: 5px;
  opacity: 0.9;
  backdrop-filter: blur(30px);
  font-size: 1vw;
  font-weight: 600;
  text-align: center;
  color: #ffffff;

  :hover {
    cursor: pointer;
    border: 1px solid white;
  }
`;
