import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  padding: 0 2%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 5px;

  background-color: rgba(173, 173, 173, 0.7);
  :hover {
    cursor: pointer;
  }
`;

const Gage = styled.div`
  width: ${prop => prop.value}%;
  height: 100%;
  background-color: red;
`;
const PlayRange = styled.input`
  width: 100%;
  background-color: #d93434;
  :hover {
    cursor: pointer;
  }
`;

function ProgressBar({ max, value, onChange, onMouseDown, onMouseUp }) {
  const percentNum = (value / max || 0) * 100;
  const percent = `${percentNum}%`;
  return (
    <Container>
      <Wrapper>
        <Gage value={percentNum} />
        {/* <PlayRange
          onChange={e => onChange(parseInt(e.target.value, 10))}
          onTouchStart={onMouseDown}
          onTouchEnd={onMouseUp}
          type="range"
          min="0"
          max="100"
          step="1"
          value={percentNum}
        /> */}
      </Wrapper>
    </Container>
  );
}

export default ProgressBar;
