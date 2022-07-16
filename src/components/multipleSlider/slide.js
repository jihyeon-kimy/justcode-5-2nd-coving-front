import { useState } from 'react';
import styled from 'styled-components';

function Slide({ data, idx, rank, summary }) {
  const [summaryhide, setSummaryHide] = useState(false);
  return (
    <Contatiner>
      {summary ? (
        <ProgramImg
          img={!summaryhide && data.img}
          onMouseOver={() => {
            setSummaryHide(true);
          }}
          onMouseOut={() => {
            setSummaryHide(false);
          }}
        >
          {summaryhide && (
            <CardContents>
              <ProgramTitle>{data.title}</ProgramTitle>
              <Programgenre>{data.genre}</Programgenre>
              <Summary>{data.summary}</Summary>
            </CardContents>
          )}
        </ProgramImg>
      ) : (
        <ProgramImg img={data.img} />
      )}

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
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const ProgramImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  border-radius: 5px;
  background: #212121;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const CardContents = styled.div`
  padding: 12%;
`;

const ProgramTitle = styled.div`
  margin-bottom: 8%;
  font-size: calc(7px + 1vw);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #ffffff;
`;

const Programgenre = styled.div`
  margin-bottom: 8%;
  font-size: calc(7px + 0.5vw);
  font-weight: 600;
  color: #6e6e6e;
`;

const Summary = styled.div`
  height: 100%;
  font-weight: 600;
  color: #6e6e6e;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  font-size: calc(7px + 0.5vw);
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
  color: #ffffff;
`;

const Title = styled.div`
  padding-top: 5%;
  font-size: calc(7px + 0.5vw);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
