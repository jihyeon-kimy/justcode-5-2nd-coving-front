import styled from 'styled-components';

function Modal({ openModal, onClose, text }) {
  return (
    openModal && (
      <Background>
        <Container>
          <Contents>{text}</Contents>
          <CloseBtn onClick={onClose}>확인</CloseBtn>
        </Container>
      </Background>
    )
  );
}

export default Modal;

const Background = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000e6;
  z-index: 3;
`;
const Container = styled.div`
  width: 23%;
  min-width: 250px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  order-radius: 4px;
  background-color: #212121;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
`;
const Contents = styled.div`
  padding: 3% 0 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 0.5vw);
  font-weight: 600;
  color: #ffffff;
`;
const CloseBtn = styled.button`
  font-size: calc(7px + 0.5vw);
  background: transparent;
  color: #c4c4c4;

  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
