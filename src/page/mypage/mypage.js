import styled from 'styled-components';
import Header from '../main/header/header';
import { HiPencil } from 'react-icons/hi';
import TopWrapper from './topWrapper';
import BottomWrapper from './bottomWrapper';
import { useEffect, useState } from 'react';
import BASE_URL from '../../config';

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
  const [wishs, setWishs] = useState([]);
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  useEffect(() => {
    (async () => {
      const req = {
        method: 'GET',
        headers: {
          access_token: token,
          'Content-Type': 'application/json',
        },
      };

      const res = await fetch(`${BASE_URL}/my/favorite`, req);
      const json = await res.json();
      const wishProgram = await json.data;
      setWishs(wishProgram);
    })();
  }, []);
  console.log(wishs);

  return (
    <>
      <Container>
        <Header black={'black'} />
        <Wrapper>
          <TopWrapper email={email} />
          <MidBox />
          <BottomWrapper wishs={wishs} />
        </Wrapper>
      </Container>
    </>
  );
}

export default Mypage;
