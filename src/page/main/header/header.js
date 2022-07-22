import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Dropdown from './dropdown';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import ModalLayout from '../searchModal/modalLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeSearchModal,
  openSearchModal,
  switchSearchIcon,
} from '../../../store';

function Header() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let searchModalStatus = useSelector(state => state.searchModalStatus);
  let searchIconStatus = useSelector(state => state.searchIconStatus);
  const [dropdownHide, setdropdownHide] = useState(false);

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
                  window.scrollTo(0, 0);
                }}
                key="0"
              />,
              <IoClose
                className="SearchIcon"
                onClick={() => {
                  dispatch(closeSearchModal());
                  dispatch(switchSearchIcon(0));
                  window.scrollTo(0, 0);
                }}
                key="1"
              />,
              <div key="3" />,
            ][searchIconStatus]
          }
          <DropdownMenu
            onMouseOver={() => setdropdownHide(true)}
            onMouseOut={() => setdropdownHide(false)}
          />
        </NavRight>
      </Navbar>
      {dropdownHide && <Dropdown setdropdownHide={setdropdownHide} />}
      {searchModalStatus && <ModalLayout />}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, ${props => props.end}),
    rgba(0, 0, 0, ${props => props.start})
  );
  position: fixed;
  top: 0;
  width: 100vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
`;

const Navbar = styled.div`
  width: 100%;
  height: 6%;
  padding: 0 3.4%;
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
    width: 40%;
    font-size: calc(10px + 1.1vw);
    cursor: pointer;
    :hover {
      filter: brightness(150%);
    }
  }
`;

const DropdownMenu = styled.img.attrs(props => ({
  src: 'https://i.ibb.co/8sYR6ps/profile-image-default.png',
  alt: 'dropdownMenu',
}))`
  padding: 11.5%;
  width: 50%;
  min-width: 18px;
  object-fit: contain;
  align-self: stretch;
  cursor: pointer;
`;
