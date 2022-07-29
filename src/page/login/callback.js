import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeUserInfo } from '../../store';
import { SOCIAL_REDIRECT_URL } from '../../constants/SocialLogin';
import { ServerURL } from '../../constants/ServerURL';
import { useNavigate } from 'react-router-dom';

const CallBack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function callbackHandlerByCodeNStatus() {
    const url = new URL(window.location.href);

    let req = {
      code: url.searchParams.get('code'),
      state: url.searchParams.get('state'),
      redirectUri: SOCIAL_REDIRECT_URL,
    };

    if (req) {
      let signURL;
      if (req.state === 'google') {
        signURL = `${ServerURL}/googleLogin`;
      } else if (req.state === 'naver') {
        signURL = `${ServerURL}/naverLogin`;
      } else if (req.state === 'kakao') {
        signURL = `${ServerURL}/kakaoLogin`;
      }

      fetch(signURL, {
        method: 'POST',
        body: JSON.stringify({
          req,
        }),
        headers: {
          'content-Type': 'application/json',
        },
      }).then(res => {
        res.json().then(data => {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('email', data.data.user.email);
          dispatch(changeUserInfo(data.data.user));
          navigate('/main');
        });
      });
    }
  }

  useEffect(() => {
    callbackHandlerByCodeNStatus();
  }, []);

  return <Container />;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
`;

export default CallBack;
