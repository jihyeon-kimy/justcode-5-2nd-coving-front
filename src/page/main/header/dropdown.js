import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useContext } from 'react';
// import { UserContext } from '../../../context';

import { GOOGLE_LOGIN_URL } from '../../../constants/SocialLogin';

function Dropdown({ setdropdownHide }) {
  const navigate = useNavigate();
  // const { email } = useContext(UserContext);
  // const [user, setUser] = useContext(UserContext);

  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  return (
    <Container
      onMouseOver={() => setdropdownHide(true)}
      onMouseOut={() => setdropdownHide(false)}
    >
      <Profile>
        <ProfileImg />
        <UserName>{email ? email : 'JUSTCODE'}</UserName>
      </Profile>
      <MenuList>
        {token && email ? (
          <>
            <Menu
              onClick={() => {
                navigate('/mypage');
              }}
            >
              My
            </Menu>
            <Menu
              onClick={() => {
                localStorage.clear();
                window.location.replace('/');
              }}
            >
              로그아웃
            </Menu>
          </>
        ) : (
          <>
            <Menu
              onClick={() => {
                window.location.assign(GOOGLE_LOGIN_URL);
              }}
            >
              로그인
            </Menu>
          </>
        )}
      </MenuList>
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  width: 13%;
  min-width: 90px;
  margin-right: 5%;
  positon: relative;
  z-index: 2;
  background: #212121;
  border: 1px solid #4d4d4d;
  box-radius: 2px;
  box-shadwo: rgba(0, 0, 0, 0.5) 0px 5px 1ppx 0px;
`;

const Profile = styled.div`
  padding: 7%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4d4d4d;
  cursor: pointer;
`;

const ProfileImg = styled.img.attrs(props => ({
  src: 'https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100',
  alt: 'PropfileImg',
}))`
  width: 20%;
  margin-right: 5%;
`;

const UserName = styled.div`
  font-size: 1vw;
  font-weight: 600;
  color: #ffffff;
`;

const MenuList = styled.div`
  padding: 7% 0;
`;

const Menu = styled.div`
  padding: 5% 10%;
  font-size: 1vw;
  font-weight: 600;

  :hover {
    background: #8180803d;
    color: #ffffff;
    cursor: pointer;
  }
`;
