import axios from 'axios';
import { useEffect, useState } from 'react';
import MultipleSlider from '../../../components/multipleSlider/multipleSlider';
import BASE_URL from '../../../config';

function MainBody() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/`, {
        headers: {
          access_token: localStorage.getItem('token'),
        },
      })
      .then(result => {
        setData(result.data.data);
      });
  }, []);
  return (
    data && (
      <>
        {data[0].listByIsWatching.length !== 0 && (
          <MultipleSlider
            rank={false}
            summary={true}
            title="시청 중인 컨텐츠"
            programList={data[0].listByIsWatching}
          />
        )}
        <MultipleSlider
          rank={true}
          summary={false}
          title="코빙에서 꼭 봐야하는 콘텐츠"
          programList={data[1].listByPopularity}
        />
        <MultipleSlider
          rank={false}
          summary={true}
          title="당신이 즐겨볼 로맨스 영화"
          programList={data[2].listByGenre}
        />
        <MultipleSlider
          rank={false}
          summary={false}
          title="디렉터가 추천하는 콘텐츠 모음집"
          programList={data[3].listByDirector}
        />
        <MultipleSlider
          rank={false}
          summary={true}
          title="<우리들의 여름> 배우들의 컬렉션"
          programList={data[4].listByActor}
        />
      </>
    )
  );
}

export default MainBody;
