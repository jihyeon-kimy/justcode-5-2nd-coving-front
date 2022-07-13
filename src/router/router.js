import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../page/detail/detail';
import Main from '../page/main/main';
import Mypage from '../page/mypage/mypage';
import Subscribe from '../page/subscribe/subscribe';
import Viedo from '../page/viedo/viedo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/video" element={<Viedo />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
