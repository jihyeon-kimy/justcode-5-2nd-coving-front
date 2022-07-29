import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Slide({ title, subTitle, img, programId }) {
  let navigate = useNavigate();
  return (
    <>
      <SliderImg img={img} />
      <SliderInfo>
        <Titles>
          <Title titleImg={title} />
          <SubTitle>{subTitle}</SubTitle>
        </Titles>
        <GoDetail
          onClick={() => {
            navigate(`/detail/${programId}`);
            window.scrollTo(0, 0);
          }}
        >
          자세히보기
        </GoDetail>
      </SliderInfo>
    </>
  );
}

export default Slide;

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
  width: 92%;
  height: 43%;
  margin: 0 4%;
  position: absolute;
  top: 30%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Title = styled.img.attrs(props => ({
  src: props.titleImg,
  alt: 'title',
}))`
  width: 35%;
  height: auto;
  margin-bottom: 3%;
`;

const Titles = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  height: 15%;
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
