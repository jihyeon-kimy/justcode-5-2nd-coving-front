import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Dropdown from './dropdown';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import ModalLayout from '../searchModal/modalLayout';
function Header() {
  const [dropdownHide, setdropdownHide] = useState(false);
  const [searchModalHide, setsearchModalHide] = useState(false);
  let navigate = useNavigate();

  return (
    <Container>
      <Navbar>
        <NavLeft>
          <Logo
            onClick={() => {
              navigate('/');
              setsearchModalHide(false);
            }}
          />
          <Menu>TV프로그램</Menu>
        </NavLeft>
        <NavRight>
          {searchModalHide ? (
            <IoClose
              className="SearchIcon"
              onClick={() => {
                setsearchModalHide(false);
              }}
            />
          ) : (
            <FiSearch
              className="SearchIcon"
              onClick={() => {
                setsearchModalHide(true);
              }}
            />
          )}
          <DropdownMenu
            onMouseOver={() => setdropdownHide(true)}
            onMouseOut={() => setdropdownHide(false)}
          />
        </NavRight>
      </Navbar>
      {dropdownHide && <Dropdown setdropdownHide={setdropdownHide} />}
      {searchModalHide && (
        <ModalLayout setsearchModalHide={setsearchModalHide} />
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 2;
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
  src: './image/COVING-LOGO.png',
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
