import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Slide({ program }) {
  let navigate = useNavigate();
  return (
    <SlideContainer
      onClick={() => {
        navigate(`/detail/${program.program_id}`);
      }}
    >
      <ProgramImg img={program.poster_img_url} />
      <Title>{program.title}</Title>
    </SlideContainer>
  );
}

export default Slide;

const SlideContainer = styled.div`
  width: 100%;
  padding: 0 3% 20% 3%;
  position: relative;
  :hover {
    transform: translateY(-3%);
    transition: transform 0.3s ease-in-out;
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
