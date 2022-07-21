import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Buttons from './buttons';
import Dropdown from './dropDown';

function ButtonGroup() {
  let location = useLocation();

  return (
    <Container>
      {decodeURI(location.search) ? (
        <>
          <Title>TV프로그램 전체 보기</Title>
          <Dropdown />
        </>
      ) : (
        <>
          <Title>장르</Title>
          <Buttons />
        </>
      )}
    </Container>
  );
}

export default ButtonGroup;

const Container = styled.div`
  padding: 0 3.9%;
  margin: 2.5% 0 3%;
`;

const Title = styled.div`
  min-height: 30px;
  margin-bottom: 1%;
  display: flex;
  align-items: flex-end;
  font-size: calc(9px + 0.9vw);
  font-weight: 600;
  color: white;
`;
