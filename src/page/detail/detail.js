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
  const wish = [1, 2, 4, 6];

  const { data } = DETAILDATA;
  const programInfo = data.program_info;
  const episode = data.program_info.episode_info;
  const isTitle = data.program_info.title;
  const similarProgram = data.similar_program_list;
  const withProgram = data.with_program_list;
  console.log(data);
  console.log(similarProgram);
  console.log(withProgram);
  const suggestion = [
    {
      name: '같이 보기 좋은 프로그램',
      poster: [...similarProgram],
    },
    {
      name: '유사한 프로그램',
      poster: [...withProgram],
    },
  ];

  return (
    <Container>
      <Header />
      <TopContainer data={programInfo} wish={wish} />
      <EpListContainer data={episode} title={isTitle} />
      {suggestion.map(i => (
        <PosterContainer name={i.name} data={i.poster} />
      ))}
    </Container>
  );
}

export default Detail;
