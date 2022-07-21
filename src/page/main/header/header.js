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

function Header({ black }) {
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
    <Container black={black} scrollY={scrollY / 130}>
      <Navbar>
        <NavLeft>
          <Logo
            onClick={() => {
              navigate('/');
              dispatch(closeSearchModal());
              dispatch(switchSearchIcon(0));
            }}
          />
          <Menu
            onClick={() => {
              navigate('/list');
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
                }}
                key="0"
              />,
              <IoClose
                className="SearchIcon"
                onClick={() => {
                  dispatch(closeSearchModal());
                  dispatch(switchSearchIcon(0));
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
  background: rgba(0, 0, 0, ${props => props.scrollY});
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
  background-color: ${prop => prop.black};
`;

const Navbar = styled.div`
  width: 100%;
  height: 6%;
  padding: 0 5%;
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
  width: 6%;
  min-width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  .SearchIcon {
    font-size: calc(10px + 1vw);
    cursor: pointer;
    :hover {
      filter: brightness(150%);
    }
  }
`;

const DropdownMenu = styled.img.attrs(props => ({
  src: 'https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100',
  alt: 'dropdownMenu',
}))`
  width: 35%;
  min-width: 18px;
  object-fit: contain;
  align-self: stretch;
  cursor: pointer;
`;
