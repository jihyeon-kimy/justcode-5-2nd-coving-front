import styled from 'styled-components';
import 'swiper/css/bundle';
import LeftBox from './leftBox';

const TopWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 120px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, 0, 0, 0.7) 75%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.9) 85%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 1) 95%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${prop => prop.backgroundImage});
  background-size: cover;
`;
const BlurBox = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 120px;
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
  height: auto;
  padding-bottom: 3%;
  padding-right: 3%;
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
  background-image: url(${prop => prop.posterImg});
  background-size: cover;
  border-radius: 5px;
  box-shadow: 3px 3px 100px 10px #292929;
`;
function TopContainer({ data, wish }) {
  const backgroundImage = data.episode_info[0].img_url;
  const posterImg = data.poster_img_url;
  return (
    <TopWrapper backgroundImage={backgroundImage}>
      <BlurBox>
        <ProgramDetailBox>
          <LeftBox data={data} wish={wish} />
          <CenterBox />
          <RightBox posterImg={posterImg} />
        </ProgramDetailBox>
      </BlurBox>
    </TopWrapper>
  );
}

export default TopContainer;
