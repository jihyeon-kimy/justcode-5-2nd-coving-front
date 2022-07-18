import styled from 'styled-components';
import TopContainer from './topContainer/topContainer';
import BASE_URL from '../../config';
import EpListContainer from './epListContainer/epListContainer';
import Header from '../main/header/header';
import PosterContainer from './posterContainer/posterContainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Container = styled.section`
  max-width: 100%;
  height: auto;
`;

function Detail() {
  const dataInterface = {
    programInfo: [
      {
        id: null,
        title: '',
        title_img_url: '',
        poster_img_url: '',
        age_range: '',
        genres: [''],
        channel: '',
        participants: [
          {
            type: '크리에이터',
            name: '',
          },
          {
            type: '출연',
            name: '',
          },
        ],
        summary: '',
        episode_info: [
          {
            id: null,
            episode_num: null,
            img_url: '',
            video_url: '',
            summary: '',
            release_date: '',
            running_time: '',
          },
        ],
      },
    ],

    similar_program_list: [
      {
        id: null,
        title: '',
        poster_img_url: '',
      },
    ],

    with_program_list: [
      {
        id: null,
        title: '',
        poster_img_url: '',
      },
    ],
  };
  const [datas, setDatas] = useState(dataInterface);
  const { id } = useParams();
  const programId = Number(id);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/program/${programId}`);
      const json = await res.json();

      setDatas(json.data);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const req = {
  //       method: 'GET',
  //       headers: {
  //         access_token: token,
  //         'Content-Type': 'application/json',
  //       },
  //     };

  //     const res = await fetch(`${BASE_URL}/my/favorite`, req);
  //     const json = await res.json();
  //     const wishProgram = await json.data.map(i => i.id);
  //     setWishs(wishProgram);
  //   })();
  // }, []);

  const isWish = datas.isLiked;
  const info = datas.programInfo[0];
  const episode = datas.programInfo[0].episode_info;
  const isTitle = datas.programInfo[0].title;
  const similarProgram = datas.similar_program_list;
  const withProgram = datas.with_program_list;
  console.log(isWish);
  const suggestion = [
    {
      name: '같이 보기 좋은 프로그램',
      poster: [...withProgram],
    },
    {
      name: '유사한 프로그램',
      poster: [...similarProgram],
    },
  ];

  return (
    <Container>
      <Header />
      <TopContainer data={info} isWish={isWish} />
      <EpListContainer data={episode} title={isTitle} />
      {suggestion.map((i, inx) => (
        <PosterContainer id={inx} name={i.name} data={i.poster} />
      ))}
    </Container>
  );
}

export default Detail;
