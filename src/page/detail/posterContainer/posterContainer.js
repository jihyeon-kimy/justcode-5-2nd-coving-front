import styled from 'styled-components';
import PostSlider from './postSlider';
import 'swiper/css/bundle';

const PosterBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 3.5%;
`;

const SuggestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  margin-left: 4%;
  margin-bottom: 0.5%;
  div {
    width: 500px;
    font-size: 22px;
    color: white;
  }
`;

function PosterContainer({ data, name }) {
  return (
    <PosterBox>
      <SuggestionBox>
        <div>{name}</div>
      </SuggestionBox>
      <PostSlider width={198} height={276} data={data} />
    </PosterBox>
  );
}

export default PosterContainer;
