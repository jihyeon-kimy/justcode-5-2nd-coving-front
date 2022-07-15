import styled from 'styled-components';
import TopContainer from './topContainer/topContainer';
import EpListContainer from './epListContainer/epListContainer';
import Header from '../main/header/header';
import PosterContainer from './posterContainer/posterContainer';
import DETAILDATA from './data';

const Container = styled.section`
  max-width: 100%;
  height: auto;
`;

function Detail() {
  const suggestion = [
    {
      name: '오늘 볼만한 영화',
      poster: [
        'https://ifh.cc/g/BTGGoS.jpg',
        'https://ifh.cc/g/rvW4S3.jpg',
        'https://ifh.cc/g/vwrHxY.jpg',
        4,
        6,
        7,
        8,
      ],
    },
    {
      name: '내일 볼만한 영화',
      poster: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
    },
  ];
  const { data } = DETAILDATA;
  const episode = data.program_info.episode_info;
  const isTitle = data.program_info.title;
  console.log(data);
  return (
    <Container>
      <Header />
      <TopContainer data={data.program_info} />
      <EpListContainer data={episode} title={isTitle} />
      {suggestion.map(i => (
        <PosterContainer name={i.name} data={i.poster} />
      ))}
    </Container>
  );
}

export default Detail;
