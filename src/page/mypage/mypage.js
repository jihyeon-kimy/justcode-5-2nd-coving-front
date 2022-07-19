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
  const [watchs, setWatchs] = useState([]);
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
      const watchRes = await fetch(`${BASE_URL}/my/watch`, req);
      const wishRes = await fetch(`${BASE_URL}/my/favorite`, req);
      const watchJson = await watchRes.json();
      const wishJson = await wishRes.json();
      const watchEp = await watchJson.data;
      const wishProgram = await wishJson.data;
      setWatchs(watchEp);
      setWishs(wishProgram);
    })();
  }, []);
  console.log(watchs);
  console.log(wishs);

  return (
    <>
      <Container>
        <Header black={'black'} />
        <Wrapper>
          <TopWrapper email={email} />
          <MidBox />
          <BottomWrapper wishs={wishs} watchs={watchs} />
        </Wrapper>
      </Container>
    </>
  );
}

export default Mypage;
