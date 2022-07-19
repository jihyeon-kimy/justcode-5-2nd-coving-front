import styled from 'styled-components';
import MultipleSlider from '../../components/multipleSlider/multipleSlider';
import Banner from './banner/banner';

function Main() {
  return (
    <Container>
      <Banner />
      <MultipleSlider rank={false} summary={false} title="기본형" />
      <MultipleSlider rank={true} summary={false} title="Rank형" />
      <MultipleSlider rank={false} summary={true} title="Summary형" />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
