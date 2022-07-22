import styled from 'styled-components';
import {
  GOOGLE_LOGIN_URL,
  KAKAO_LOGIN_URL,
  NAVER_LOGIN_URL,
} from '../../constants/SocialLogin';

function Opening() {
  const loginList = [
    {
      site: '구글',
      img: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
      navigate: GOOGLE_LOGIN_URL,
    },
    {
      site: '네이버',
      img: 'https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside',
      navigate: NAVER_LOGIN_URL,
    },
    {
      site: '카카오',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/2500px-KakaoTalk_logo.svg.png',
      navigate: KAKAO_LOGIN_URL,
    },
    // 추가 예정
    // {
    //   site: '페이스북',
    //   img: 'https://blog.kakaocdn.net/dn/UGS0q/btree5Viurw/l07AH1VgWJHm4stsAHLdL0/img.png',
    //   navigate: window.location.assign(NAVER_LOGIN_URL),
    // },
  ];

  return (
    <Container>
      <Desc>
        <Title>코빙 오리지널 콘텐츠, </Title>
        <Title>재미를 플레이해보세요.</Title>
        <Title>반가워요!</Title>
        <SubTitle>간편하게 가입하고, 원하실 때 해지할 수 있어요.</SubTitle>
      </Desc>
      {loginList.map((login, idx) => {
        return (
          <ButtonGroup
            key={login.site.toString() + idx.toString()}
            onClick={() => {
              window.location.assign(login.navigate);
            }}
          >
            <Logo img={login.img} />
            <Text>{login.site}로 시작하기</Text>
          </ButtonGroup>
        );
      })}
    </Container>
  );
}

export default Opening;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  z-index: 3;
  font-size: calc(15px + 1vw);
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(15px + 1vw);
`;

const Title = styled.div`
  padding: 1% 0;
  font-size: calc(15px + 1.5vw);
  color: #f1f0ef;
`;

const SubTitle = styled.div`
  padding: 6% 0 15%;
  font-size: calc(7px + 0.7vw);
  font-weight: 500;
`;

const ButtonGroup = styled.button`
  width: 30%;
  height: 0;
  padding-top: 3.5%;
  margin: 0.5%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: transparent;
  border: 1px solid #726a5f;
  border-radius: 6px;
  font-size: calc(7px + 0.7vw);
  font-weight: 400;
  color: #c4c4c4;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  :hover {
    cursor: pointer;
    border: 1px solid #cbcaca;
    color: #cbcaca;
  }
`;

const Logo = styled.img.attrs(props => ({
  src: props.img,
  alt: 'logo',
}))`
  width: calc(10px + 0.9vw);
  position: absolute;
  top: 30%;
  left: 5%;
`;

const Text = styled.div`
  position: absolute;
  top: 30%;
  font-weight: 500;
  text-align: center;
`;
