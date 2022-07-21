import styled from 'styled-components';
import { BsXLg } from 'react-icons/bs';
const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 100px 10px #292929;
  z-index: 5;
`;

const Body = styled.div`
  position: absolute;
  text-align: center;
  background-color: rgb(255, 255, 255);

  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;
const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 20%;
  font-size: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 10;
`;
function VideoModal({ url, closeModal }) {
  return (
    <Container>
      <Body>
        <Button onClick={closeModal}>
          <BsXLg />
        </Button>
        <video
          id="video"
          src={url}
          width="470px"
          height="auto"
          controls
          autoPlay
          muted
        ></video>
      </Body>
    </Container>
  );
}

export default VideoModal;
