import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Buttons() {
  const genres = ['코미디', '범죄', '로맨스', '공포', '복수'];
  const navigate = useNavigate();

  return (
    <Btns>
      {genres.map((genre, idx) => {
        return (
          <Btn
            key={genre.toString() + idx.toString()}
            onClick={() => {
              navigate(`/list?genre=${genre}`);
            }}
          >
            {genre}
          </Btn>
        );
      })}
    </Btns>
  );
}

export default Buttons;

const Btns = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  padding: 0.8% 2%;
  margin-right: 1%;
  appearance: none;
  background: #212121;
  border-radius: 50px;
  font-size: calc(8px + 0.5vw);
  color: #ffdc3e;
  cursor: pointer;

  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
`;
