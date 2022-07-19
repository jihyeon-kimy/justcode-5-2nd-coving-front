import styled from 'styled-components';
import MultipleSlider from '../../components/multipleSlider/multipleSlider';
import Banner from './banner/banner';
import ButtonGroup from './buttonGroup/buttonGroup';

function Main() {
  return (
    <Container>
      <Banner />
      <ButtonGroup />
      <MultipleSlider rank={false} summary={false} />
      <MultipleSlider rank={true} summary={false} />
      <MultipleSlider rank={false} summary={true} />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
