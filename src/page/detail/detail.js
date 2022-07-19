import styled from 'styled-components';
import TopContainer from './topContainer/topContainer';
import BASE_URL from '../../config';
import EpListContainer from './epListContainer/epListContainer';
import Header from '../main/header/header';
import PosterContainer from './posterContainer/posterContainer';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VideoModal from '../viedo/videoModal';
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
  const [watch, setWatch] = useState([]);
  const { id } = useParams();
  const programId = Number(id);
  const location = useLocation();

  const [video, setVideo] = useState(false);
  const [urls, setUrls] = useState('');

  const closeModal = () => {
    setVideo(false);
  };

  useEffect(() => {
    if (location.state.url) {
      setUrls(location.state.url);
      setVideo(location.state.boolean);
      console.log(video);
      console.log(location.state.id);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/program/${programId}`);
      const json = await res.json();

      setDatas(json.data);
    })();
  }, [id]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/my/watch`);
      const json = await res.json();
      setWatch(json.data.map(i => i.id));
    })();
  }, [id]);
  console.log(watch);

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
    <>
      <Container>
        <Header />
        <TopContainer data={info} isWish={isWish} />
        <EpListContainer
          data={episode}
          title={isTitle}
          watch={watch}
          programId={programId}
        />
        {suggestion.map((i, inx) => (
          <PosterContainer id={inx} name={i.name} data={i.poster} />
        ))}
      </Container>
      {video ? <VideoModal closeModal={closeModal} url={urls} /> : null}
    </>
  );
}

export default Detail;
