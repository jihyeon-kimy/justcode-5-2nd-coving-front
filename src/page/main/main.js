import styled from 'styled-components';
import MultipleSlider from '../../components/multipleSlider/multipleSlider';
import Banner from './banner/banner';

function Main() {
  return (
    <Container>
      <Banner />
      <MultipleSlider rank={false} summary={false} />
      <MultipleSlider rank={true} summary={false} />
      <MultipleSlider rank={false} summary={true} />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
