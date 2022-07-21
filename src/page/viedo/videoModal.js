import styled from 'styled-components';
import { BsXLg } from 'react-icons/bs';
import { useState } from 'react';
const Container = styled.div`
  position: fixed;
  right: 10px;
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
const Div = styled.button`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 10;
  p {
    margin: 10px;
    font-size: 25px;
  }
  div {
    margin: 10px;
    font-size: 30px;
    :hover {
      cursor: pointer;
    }
  }
`;

function VideoModal({ url, closeModal, epTitle }) {
  const [value, setValue] = useState(false);
  const onOver = () => {
    setValue(true);
  };

  console.log(url);

  const onLeave = () => {
    setValue(false);
  };
  return (
    <Container>
      <Body>
        {value ? (
          <Div onMouseOver={onOver} onMouseLeave={onLeave}>
            <p>{epTitle}</p>
            <div>
              <BsXLg size={20} onClick={closeModal} />
            </div>
          </Div>
        ) : null}
        <video
          onMouseOver={onOver}
          onMouseLeave={onLeave}
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
