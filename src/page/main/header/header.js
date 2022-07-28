import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import ModalLayout from '../searchModal/modalLayout';
import HeaderMenu from './headerMenu';
import {
  closeSearchModal,
  openSearchModal,
  setInputKeyword,
  switchSearchIcon,
} from '../../../store';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let searchModalStatus = useSelector(state => state.searchModalStatus);
  let searchIconStatus = useSelector(state => state.searchIconStatus);
  const [headerMenuHide, setHeaderMenuHide] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container end={scrollY / 200 + 0.5} start={scrollY / 1100}>
      <Navbar>
        <NavLeft>
          <Logo
            onClick={() => {
              navigate('/main');
              dispatch(closeSearchModal());
              dispatch(switchSearchIcon(0));
              window.scrollTo(0, 0);
            }}
          />
          <Menu
            onClick={() => {
              navigate('/list');
              dispatch(closeSearchModal());
              dispatch(switchSearchIcon(0));
              window.scrollTo(0, 0);
            }}
          >
            TV프로그램
          </Menu>
        </NavLeft>
        <NavRight>
          {
            [
              <FiSearch
                className="SearchIcon"
                onClick={() => {
                  dispatch(openSearchModal());
                  dispatch(switchSearchIcon(1));
                  dispatch(setInputKeyword(''));
                  window.scrollTo(0, 0);
                }}
                key="0"
              />,
              <IoClose
                className="SearchIcon"
                onClick={() => {
                  dispatch(closeSearchModal());
                  dispatch(
                    switchSearchIcon(location.pathname === '/search' ? 2 : 0)
                  );
                  window.scrollTo(0, 0);
                }}
                key="1"
              />,
              <div key="3" />,
            ][searchIconStatus]
          }
          <Profile
            onMouseOver={() => setHeaderMenuHide(false)}
            onMouseOut={() => setHeaderMenuHide(true)}
          />
        </NavRight>
      </Navbar>
      {!headerMenuHide && (
        <HeaderMenu
          onOpen={() => {
            setHeaderMenuHide(false);
          }}
          onClose={() => {
            setHeaderMenuHide(true);
          }}
        />
      )}
      {searchModalStatus && <ModalLayout />}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: linear-gradient(
    rgba(0, 0, 0, ${props => props.end}),
    rgba(0, 0, 0, ${props => props.start})
  );
  z-index: 2;
`;

const Navbar = styled.div`
  width: 100%;
  height: 6%;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
  }
`;

const NavLeft = styled.div`
  margin: 1.5% 0;
  width: 20%;
  min-width: 130px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img.attrs(props => ({
  src: '/image/COVING-LOGO.png',
  alt: 'logo',
}))`
  width: 40%;
  cursor: pointer;
`;

const Menu = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2vw;
  font-weight: 700;
  color: #c4c4c4;
  cursor: pointer;
  :hover {
    filter: brightness(150%);
  }
`;

const NavRight = styled.div`
  width: 8%;
  min-width: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  .SearchIcon {
    width: 30%;
    min-width: 15px;
    font-size: calc(10px + 1.4vw);
    cursor: pointer;
    :hover {
      filter: brightness(150%);
    }
  }
`;

const Profile = styled.img.attrs(props => ({
  src: 'https://i.ibb.co/8sYR6ps/profile-image-default.png',
  alt: 'dropdownMenu',
}))`
  width: 40%;
  min-width: 22px;
  padding-left: 10%;
  object-fit: contain;
  align-self: stretch;
  cursor: pointer;
`;
