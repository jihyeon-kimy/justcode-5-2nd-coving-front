import styled from 'styled-components';
import TopContainer from './topContainer/topContainer';
import BASE_URL from '../../config';
import EpListContainer from './epListContainer/epListContainer';
import Header from '../main/header/header';
import PosterContainer from './posterContainer/posterContainer';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VideoModal from '../viedo/videoModal';
const Container = styled.section`
  max-width: 100%;
  height: auto;
`;

function Detail() {
  const dataInterface = {
    latest_watching_episode: [{ episode_num: null, video_url: '' }],
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
  const stateInterface = { url: '', boolean: false };
  const [location, setLocation] = useState(stateInterface);
  const [datas, setDatas] = useState(dataInterface);
  const [watch, setWatch] = useState([]);
  const [epTitle, setEptitle] = useState('');
  const [video, setVideo] = useState(false);
  const [urls, setUrls] = useState('');
  const { state } = useLocation();
  const { id } = useParams();
  const programId = Number(id);

  const token = localStorage.getItem('token');

  const closeModal = () => {
    setLocation(null);
    setVideo(false);
  };

  useEffect(() => {
    if (location !== null) {
      setLocation(state);
      setUrls(location.url);
      setVideo(location.boolean);
      const modalTitle = `${location.title} 제${location.epiNum}화`;
      setEptitle(modalTitle);
    }
  }, [state, location]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/program/${programId}`, {
        method: 'GET',
        headers: {
          access_token: token,
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();

      setDatas(json.data);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/my/watch`, {
        method: 'GET',
        headers: {
          access_token: token,
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      setWatch(json.data.map(i => i.id));
    })();
  }, [id]);

  const {
    isLiked: wishList,
    latest_watching_episode: [last],
    programInfo: [info],
    similar_program_list: similarProgram,
    with_program_list: withProgram,
  } = datas;

  const { episode_info: episode, title } = info;

  const suggestion = [
    {
      name: '함께 즐겨보는 프로그램',
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
        <TopContainer data={info} wishList={wishList} last={last} />
        <EpListContainer
          data={episode}
          title={title}
          watch={watch}
          programId={programId}
        />
        {suggestion.map((i, inx) => (
          <PosterContainer id={inx} name={i.name} data={i.poster} />
        ))}
      </Container>
      {video && (
        <VideoModal closeModal={closeModal} url={urls} epTitle={epTitle} />
      )}
    </>
  );
}

export default Detail;
