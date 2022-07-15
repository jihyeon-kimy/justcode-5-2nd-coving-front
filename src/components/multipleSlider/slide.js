import styled from 'styled-components';

function Slide({ data, idx, rank }) {
  return (
    <Contatiner>
      <ProgramImg img={data.img} />
      {rank ? (
        <ProgramInfo>
          <Rank>{idx + 1}</Rank>
          <Title>{data.title}</Title>
        </ProgramInfo>
      ) : (
        <Title>{data.title}</Title>
      )}
    </Contatiner>
  );
}

export default Slide;

const Contatiner = styled.div`
  width: 100%;
  padding-top: 10px;
  positioin: relative;
  :hover {
    transform: translateY(-3%);
    transition: transform 0.4s ease-in-out;
    cursor: pointer;
  }
`;

const ProgramImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  border-radius: 5px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const ProgramInfo = styled.div`
  position: relative;
  top: -18px;
  display: flex;
  align-items: center;
`;

const Rank = styled.div`
  margin-right: 3%;
  transform: skewX(-10deg) translateY(-0.2em);
  font-family: 'Noto Sans KR', sans-serif;
  font-size: calc(30px + 1.2vw);
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

const Title = styled.div`
  padding-top: 5%;
  overflow: hidden;
  font-size: calc(7px + 0.5vw);
  text-overflow: ellipsis;
  white-space: nowrap;
`;
