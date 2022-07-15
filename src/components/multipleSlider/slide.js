import styled from 'styled-components';

function Slide({ data, idx }) {
  return (
    <Contatiner>
      <ProgramImg img={data.img} />
      <Title>{data.title}</Title>
    </Contatiner>
  );
}

export default Slide;

const Contatiner = styled.div`
  width: 100%;
  padding-top: 10px;

  :hover {
    transform: translateY(-3%);
    transition: transform 0.4s ease-in-out;
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

const Title = styled.div`
  padding-top: 5%;
  overflow: hidden;
  font-size: calc(7px + 0.5vw);
  text-overflow: ellipsis;
  white-space: nowrap;
`;
