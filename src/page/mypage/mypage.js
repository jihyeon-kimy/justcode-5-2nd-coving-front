import styled from 'styled-components';
import Header from '../main/header/header';
import { HiPencil } from 'react-icons/hi';
import TopWrapper from './topWrapper';
import BottomWrapper from './bottomWrapper';
const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background-color: #171717;
`;

const Wrapper = styled.div`
  position: relative;
  top: 80px;
  width: 100vw;
  height: 100%;
`;

const MidBox = styled.div`
  width: 100%;
  height: 9vh;

  background-color: #363636;
`;

function Mypage() {
  return (
    <>
      <Container>
        <Header black={'black'} />
        <Wrapper>
          <TopWrapper />
          <MidBox />
          <BottomWrapper />
        </Wrapper>
      </Container>
    </>
  );
}

export default Mypage;
