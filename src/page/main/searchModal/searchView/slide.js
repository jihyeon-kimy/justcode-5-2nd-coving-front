import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Slide({ data }) {
  let keywordInput = useSelector(state => state.inputKeyword.keyword);
  return (
    <SlideContainer>
      <ProgramImg img={data.poster_img_url} />
      <Title>
        {data.title.includes(keywordInput) ? (
          <>
            {data.title.split(keywordInput)[0]}
            <Highlight>{keywordInput}</Highlight>
            {data.title.split(keywordInput)[1]}
          </>
        ) : (
          data.title
        )}
      </Title>
    </SlideContainer>
  );
}

export default Slide;

const SlideContainer = styled.div`
  width: 100%;
  padding-top: 10px;
  positioin: relative;
  :hover {
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
const Title = styled.div`
  padding-top: 5%;
  font-size: calc(7px + 0.5vw);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Highlight = styled.span`
  color: red;
`;
