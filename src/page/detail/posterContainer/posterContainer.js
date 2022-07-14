import styled from 'styled-components';
import PostSlider from './postSlider';
import 'swiper/css/bundle';
import { useState } from 'react';

const PosterBox = styled.div`
  width: 100%;
  height: 400px;
  padding-top: 5%;
`;

const SuggestionBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  margin-left: 2.5%;
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
