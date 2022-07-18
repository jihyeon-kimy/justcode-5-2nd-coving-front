import styled from 'styled-components';

function SubHeader({ black }) {
  return (
    <Container black={black}>
      <Navbar>
        <NavLeft>
          <Logo />
        </NavLeft>
        <NavRight></NavRight>
      </Navbar>
    </Container>
  );
}

export default SubHeader;

const Container = styled.div`
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
  src: './image/COVING-LOGO.png',
  alt: 'logo',
}))`
  width: 40%;
  cursor: pointer;
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
