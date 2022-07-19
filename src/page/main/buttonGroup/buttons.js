import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Buttons() {
  let navigate = useNavigate();
  return (
    <Container>
      <Title>장르</Title>
      <BtnGroup>
        <Btn
          onClick={() => {
            navigate('/');
          }}
        >
          코미디
        </Btn>
        <Btn>범죄</Btn>
        <Btn>로맨스</Btn>
        <Btn>공포</Btn>
        <Btn>복수</Btn>
      </BtnGroup>
    </Container>
  );
}

export default Buttons;
const Container = styled.div``;

const Title = styled.div`
  top: 13px;
  font-size: calc(6px + 0.9vw);
  font-weight: 600;
  color: white;
  margin-bottom: 1%;
`;
const BtnGroup = styled.div``;

const Btn = styled.button`
  font-size: calc(7px + 0.7vw);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #212121;
  color: #ffdc3e;
  padding: 1.2% 3%;
  margin-right: 1%;
  border-radius: 50px;
  cursor: pointer;

  display: inDropdownItemne-block;
  transition-duration: $defaultDuration;
  transition-property: transform;

  @include hideTapHighDropdownItemghtColor();
  @include hardwareAccel();
  @include improveAntiADropdownItemas();

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
`;
