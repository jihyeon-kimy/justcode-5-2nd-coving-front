import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserInfo } from '../../store';
import {
  SOCIAL_REDIRECT_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '../../constants/SocialLogin';

import Header from '../main/header/header';

import { ServerURL } from '../../constants/ServerURL';
import axios from 'axios';

import { Navigate, useNavigate } from 'react-router-dom';

const CallBack = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let userInfo = useSelector(state => state.userInfo);

  async function callbackHandler() {
    const url = new URL(window.location.href);
    let req;

    req = {
      code: await url.searchParams.get('code'),
      state: await url.searchParams.get('state'),
      redirectUri: await SOCIAL_REDIRECT_URL,
    };

    if (req) {
      console.log(JSON.stringify(req));

      const url2 = `https://oauth2.googleapis.com/token?code=${req.code}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${SOCIAL_REDIRECT_URL}&grant_type=authorization_code`;
      const access_token = await axios
        .post(url2, {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
        .then(el => {
          return el.data.access_token;
        })
        .catch(err => {
          console.log('err=', err);
        });

      if (access_token) {
        // alert(access_token);
        console.log(access_token);

        const googleAPI = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`;

        const userInfo = await axios
          .get(googleAPI, {
            headers: {
              authorization: `Bearer ${access_token}`,
            },
          })
          .then(el => {
            return el.data;
          })
          .catch(err => {
            console.log('err=', err);
          });

        if (userInfo) {
          //   alert(JSON.stringify(userInfo));
          console.log(JSON.stringify(userInfo));
          console.log(access_token);
        }

        const email = userInfo.email;
        const signURL = `${ServerURL}/login`;
        fetch(signURL, {
          method: 'POST',
          body: JSON.stringify({
            email,
          }),
          headers: {
            'content-Type': 'application/json',
          },
        })
          .then(res => {
            if (res.status == 201) {
              alert('회원가입이 완료되었습니다.');
              localStorage.setItem('token', access_token);
              localStorage.setItem('email', email);

              window.location.assign('/');
            } else if (res.status == 321) {
              alert('로그인이 완료되었습니다.');
              localStorage.setItem('token', access_token);
              localStorage.setItem('email', email);
              window.location.assign('/');
            } else {
              alert(JSON.stringify(res));
            }
          })
          .catch(e => {
            console.error(e);
          });
      }

      //   const response = {
      //     id: '104849023681245968800',
      //     email: 'ferodemic1993@gmail.com',
      //     verified_email: true,
      //     picture:
      //       'https://lh3.googleusercontent.com/a-/AFdZucqqfg8gwpiBcquhXsxtGV6fV-6VPdPP13Tt5bFJ_w=s96-c',
      //   };
    }
  }

  async function callbackHandlerByCodeNStatus() {
    const url = new URL(window.location.href);
    let req;

    req = {
      code: await url.searchParams.get('code'),
      state: await url.searchParams.get('state'),
      redirectUri: await SOCIAL_REDIRECT_URL,
    };

    if (req) {
      const signURL = `${ServerURL}/socialLogin`;
      fetch(signURL, {
        method: 'POST',
        body: JSON.stringify({
          req,
        }),
        headers: {
          'content-Type': 'application/json',
        },
      })
        .then(res => {
          res.json().then(data => {
            console.log(data.data);
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('email', data.data.user.email);
            dispatch(changeUserInfo(data.data.user));
            console.log('전역 상태', userInfo);
            if (data.data.message == 'signin') {
              alert('로그인이 완료되었습니다.');
            } else if (data.data.message == 'signup') {
              alert('회원가입이 완료되었습니다.');
            } else {
              alert('에러');
            }
            // window.location.assign('/');
            navigate('/');
          });
        })
        .catch(e => {
          console.error(e);
        });
    }
  }

  // callbackHandler();
  useEffect(() => {
    callbackHandlerByCodeNStatus();
  }, []);

  return (
    <Container>
      <Title>구글 로그인</Title>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 24px;
  color: white;
`;

export default CallBack;
