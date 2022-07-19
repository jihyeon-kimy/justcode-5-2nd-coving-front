import { useState } from 'react';
import styled from 'styled-components';
import Buttons from './buttons';

function ButtonGroup() {
  const [openDropdown, setOpneDropdown] = useState(false);
  return (
    <Container>
      <Buttons />
      <DropdownGroup>
        <DropdownTitle
          onClick={() => {
            setOpneDropdown(prev => !prev);
          }}
        >
          장르전체
        </DropdownTitle>
        {openDropdown && (
          <Dropdown>
            <DropdownItem onClick={() => {}}>장르전체</DropdownItem>
            <DropdownItem>코미디</DropdownItem>
            <DropdownItem>범죄</DropdownItem>
            <DropdownItem>로맨스</DropdownItem>
            <DropdownItem>공프</DropdownItem>
            <DropdownItem>복수</DropdownItem>
          </Dropdown>
        )}
      </DropdownGroup>
    </Container>
  );
}

export default ButtonGroup;

const Container = styled.div`
  padding-left: 3%;
  margin: 3% 0;
`;

const DropdownGroup = styled.div``;
const DropdownTitle = styled.div`
  padding-left: 0.7%;
  font-size: calc(7px + 0.7vw);
  color: #ffffff;

  :hover {
    cursor: pointer;
  }
`;
const Dropdown = styled.div`
  font-size: calc(7px + 0.7vw);
  width: 15%;
  display: flex;
  flex-direction: column;
  background: #212121;
`;
const DropdownItem = styled.div`
  // border: 1px solid yellow;
  font-weight: 500;
  padding: 5% 5%;

  :hover {
    background: #8180803d;
    color: #ffffff;
    cursor: pointer;
  }
`;
