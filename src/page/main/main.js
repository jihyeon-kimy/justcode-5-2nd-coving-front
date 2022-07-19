import styled from 'styled-components';
import MultipleSlider from '../../components/multipleSlider/multipleSlider';
import Banner from './banner/banner';
import ButtonGroup from './buttonGroup/buttonGroup';

function Main() {
  return (
    <Container>
      <Banner />
      <ButtonGroup />

      <MultipleSlider rank={false} summary={false} title="기본형" />
      <MultipleSlider rank={true} summary={false} title="Rank형" />
      <MultipleSlider rank={false} summary={true} title="Summary형" />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
