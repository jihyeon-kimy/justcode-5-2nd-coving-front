import styled from 'styled-components';
import Slider from './slider';
import 'swiper/css/bundle';
import { BiHeart, BiUpload, BiChevronLeft } from 'react-icons/bi';
import { useState } from 'react';

const Container = styled.section`
  position: relative;
  top: 79px;
  max-width: 100vw;
  height: 600vh;
`;
const MockHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 79px;
  background-color: gray;
  z-index: 2;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 580px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.3) 70%,

      rgba(0, 0, 0, 0.4) 90%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('https://ifh.cc/g/ccFTxH.jpg');
  background-size: cover;
`;
const BlurBox = styled.div`
  width: 100%;
  height: 625px;
  padding-right: 7%;
  padding-left: 3%;
  backdrop-filter: blur(80px);
`;
const ProgramDetailBox = styled.div`
  position: relative;
  top: 79px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  margin-right: 20px;
  margin-left: 20px;
  border-bottom: 0.1px solid white;
`;

const LeftBox = styled.div`
  width: 560px;
  height: 450px;
`;

const TitleBox = styled.div`
  max-width: 500px;
  height: 85px;
  background-image: url('https://ifh.cc/g/FgSdt3.png');
  background-size: cover;
`;

const InfoBox = styled.div`
  display: flex;
  width: auto;
  height: 34px;
  background-size: cover;
  margin-top: 20px;
  div {
    font-size: 17px;
    height: 29px;
    line-height: 28px;
    padding-left: 4px;
    padding-right: 4px;
    border: 0.1px solid #c4c4c4;
    border-radius: 3px;
    margin: 4px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PlayBtn = styled.button`
  width: 270px;
  height: 80px;
  border-radius: 5px;
  border: none;
  margin-right: 25px;
  font-weight: 900;
  font-size: 18px;

  :hover {
    transform: scale(1.03);
    transition: all 0.2s;
    cursor: pointer;
  }
`;

const Wishbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
`;
const WishTextBox = styled.div`
  color: white;
`;

const Sharebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShareTextBox = styled.div`
  color: white;
`;

const CenterBox = styled.div`
  width: 414px;
  height: 450px;
`;

const CreatorBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
    font-size: 17px;
    font-weight: 500;
  }
`;
const ActorBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
    font-size: 17px;
    font-weight: 500;
  }
`;

const SummaryBox = styled.div`
  margin-top: 20px;
  font-weight: 500;
`;
const RightBox = styled.div`
  width: 314px;
  height: 450px;
  background-image: url('https://ifh.cc/g/84Lr3n.jpg');
  background-size: cover;
  border-radius: 5px;
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
const RelatedVideoContainer = styled.div``;

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
    <>
      <MockHeader />
      <Container>
        <TopContainer>
          <BlurBox>
            <ProgramDetailBox>
              <LeftBox>
                <TitleBox />
                <InfoBox>
                  <div>15+</div>
                  <div>드라마</div>
                  <div>음악</div>
                  <div>로맨스</div>
                </InfoBox>
                <BtnBox>
                  <PlayBtn>이용권 구독하기</PlayBtn>
                  <Wishbox>
                    <BiHeart size="40" color="white" />
                    <WishTextBox>찜</WishTextBox>
                  </Wishbox>
                  <Sharebox>
                    <BiUpload size="40" color="white" />
                    <ShareTextBox>공유</ShareTextBox>
                  </Sharebox>
                </BtnBox>
                <CreatorBox>
                  <div>크리에이터</div>
                  <div>박찬욱</div>
                </CreatorBox>
                <ActorBox>
                  <div>출연</div>
                  <div>김고은, 한고은, 심고은</div>
                </ActorBox>
                <SummaryBox>
                  노래가 끝나고 운전대를 잡고 전화통화를 하는 척하는 여자는
                  조수석에 둔 대본을 살펴봐가며 오디션 연습을 하느라 교통 정체가
                  풀린 줄도 모르고 있다. 아무리 경적을 울려도 앞 차 여자가
                  움직일 생각을 않자, 뒷 차 남자는 차로를 갈아타 앞차 옆으로
                  와서 항의하듯 경적을 길게 울리고, 여자는 그런 남자에게 중지를
                  날린다. 엑셀을 밟고 멀어지는 남자.
                </SummaryBox>
              </LeftBox>
              <CenterBox />
              <RightBox />
            </ProgramDetailBox>
          </BlurBox>
        </TopContainer>
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
    </>
  );
}

export default Detail;
