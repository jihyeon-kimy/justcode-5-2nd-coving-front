import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../page/detail/detail';
// import Header from '../page/main/header/header';
import Main from '../page/main/main';
import Mypage from '../page/mypage/mypage';
import Subscribe from '../page/subscribe/subscribe';
import Login from '../page/login/login';
import CallBack from '../page/login/callback';
import Viedo from '../page/viedo/viedo';
import ProfileEdit from '../page/mypage/profileEdit';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/video" element={<Viedo />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/callback" element={<CallBack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
