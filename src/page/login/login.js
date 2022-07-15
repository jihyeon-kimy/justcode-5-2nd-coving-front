import styled from 'styled-components';
import { GOOGLE_LOGIN_URL } from '../../constants/SocialLogin';

const Container = styled.div`
  padding: 50px;
`;

const Button = styled.div`
  background-color: red;
  display: inline-block;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 24px;
  color: white;
`;

function Login() {
  return (
    <Container>
      <Button
        onClick={() => {
          window.location.assign(GOOGLE_LOGIN_URL);
        }}
      >
        <Title>구글 로그인</Title>
      </Button>
    </Container>
  );
}

export default Login;
