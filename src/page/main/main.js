import styled from 'styled-components';
import Banner from './banner/banner';
import Header from './header/header';

function Main() {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  );
}

export default Main;

const Container = styled.div``;
