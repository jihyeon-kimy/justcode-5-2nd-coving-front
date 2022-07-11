import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 900;
  font-size: 24px;
  color: white;
`;
const P = styled.p`
  font-weight: 900;
`;

const Hover = styled.div`
  font-weight: 900;
  :hover {
    color: white;
  }
`;
function Main() {
  return (
    <Container>
      <Title>티빙 오리지널, 지금 스트리밍하세요!</Title>
      <P>톱스타유백이/기본 폰트</P>
      <Hover>호버 색상</Hover>
    </Container>
  );
}

export default Main;
