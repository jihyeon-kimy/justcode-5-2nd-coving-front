import styled from 'styled-components';
import MultipleSlider from '../../components/multipleSlider/multipleSlider';
import Banner from './banner/banner';
import MainBody from './mainBody/mainbody';

function Main() {
  return (
    <Container>
      <Banner />
      <MainBody />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
