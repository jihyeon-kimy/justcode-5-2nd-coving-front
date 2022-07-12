import styled from 'styled-components';
import Slider from './slider';
import 'swiper/css/bundle';
const Container = styled.section`
  max-width: 100vw;
  height: 600vh;
`;
const MockHeader = styled.div`
  width: 100%;
  height: 79px;
  background-color: gray;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 529px;
  padding-right: 7%;
  padding-left: 3%;
`;
const ProgramDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 529px;
  padding-top: 3%;
  padding-bottom: 4%;
  border-bottom: 1px solid white;
`;

const LeftBox = styled.div`
  width: 560px;
  height: 450px;
  border: 1px solid white;
`;

const CenterBox = styled.div`
  width: 414px;
  height: 450px;
  border: 1px solid white;
`;

const RightBox = styled.div`
  width: 314px;
  height: 450px;
  border: 1px solid white;
`;
const EpListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  padding-top: 3%;
`;

const Title = styled.p`
  position: absolute;
  padding-left: 5%;
`;
const RelatedVideoContainer = styled.div``;
function Detail() {
  return (
    <Container>
      <MockHeader />
      <TopContainer>
        <ProgramDetailBox>
          <LeftBox>상세정보</LeftBox>
          <CenterBox>빈공간</CenterBox>
          <RightBox>포스터이미지</RightBox>
        </ProgramDetailBox>
      </TopContainer>
      <Title>포스터 제목</Title>
      <EpListContainer>
        <Slider />
      </EpListContainer>
    </Container>
  );
}

export default Detail;
