import styled from 'styled-components';
import 'swiper/css/bundle';
import LeftBox from './leftBox';

const TopWrapper = styled.div`
  width: 100%;
  height: 610px;
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
  top: 120px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  margin-right: 20px;
  margin-left: 20px;
  border-bottom: 0.1px solid white;
`;

const CenterBox = styled.div`
  width: 414px;
  height: 450px;
`;
const RightBox = styled.div`
  width: 314px;
  height: 450px;
  background-image: url('https://ifh.cc/g/84Lr3n.jpg');
  background-size: cover;
  border-radius: 5px;
`;
function TopContainer() {
  return (
    <TopWrapper>
      <BlurBox>
        <ProgramDetailBox>
          <LeftBox />
          <CenterBox />
          <RightBox />
        </ProgramDetailBox>
      </BlurBox>
    </TopWrapper>
  );
}

export default TopContainer;
