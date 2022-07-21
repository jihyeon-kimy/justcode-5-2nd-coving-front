import styled from 'styled-components';
import Header from '../main/header/header';
import TopWrapper from './topWrapper';
import BottomWrapper from './bottomWrapper';
import { useEffect, useState } from 'react';
import BASE_URL from '../../config';

const Container = styled.div`
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #171717;
`;

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  top: 80px;
  width: 100vw;
  height: auto;
`;

const MidBox = styled.div`
  width: 100%;
  height: 9vh;
  overflow-x: hidden;
  background-color: #363636;
`;

function Mypage() {
  const [wishs, setWishs] = useState([]);
  const [watchs, setWatchs] = useState([]);
  const [updateWatch, setUpdateWatch] = useState();
  const [updateWish, setUpdateWish] = useState();
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const watchUpdate = e => {
    setUpdateWatch(e);
  };
  const wishUpdate = e => {
    setUpdateWish(e);
  };
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
  }, [updateWatch, updateWish]);

  return (
    <>
      <Container>
        <Wrapper>
          <TopWrapper email={email} />
          <MidBox />
          <BottomWrapper
            wishs={wishs}
            watchs={watchs}
            watchUpdate={watchUpdate}
            wishUpdate={wishUpdate}
          />
        </Wrapper>
      </Container>
    </>
  );
}

export default Mypage;
