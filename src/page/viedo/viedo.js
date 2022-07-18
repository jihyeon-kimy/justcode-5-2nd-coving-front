import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
function Viedo() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <>
      <div>{data.episode_num}화</div>
      <video width="800px" height="600px" src={data.video_url} controls></video>
    </>
  );
}

export default Viedo;
