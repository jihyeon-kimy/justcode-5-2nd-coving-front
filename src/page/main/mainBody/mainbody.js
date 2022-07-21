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
        {data.listByIsWatching.length !== 0 && (
          <MultipleSlider
            rank={false}
            summary={false}
            title="시청 중인 컨텐츠"
            programList={data.listByIsWatching}
          />
        )}
        <MultipleSlider
          rank={true}
          summary={false}
          title="코빙에서 꼭 봐야하는 콘텐츠"
          programList={data.listByPopularity}
        />
        <MultipleSlider
          rank={false}
          summary={true}
          title="당신이 즐겨볼 로맨스 영화"
          programList={data.listByGenre}
        />
        <MultipleSlider
          rank={false}
          summary={false}
          title="디렉터가 추천하는 콘텐츠 모음집"
          programList={data.listByDirector}
        />
        <MultipleSlider
          rank={false}
          summary={true}
          title="<우리들의 여름> 배우들의 컬렉션"
          programList={data.listByActor}
        />
      </>
    )
  );
}

export default MainBody;
