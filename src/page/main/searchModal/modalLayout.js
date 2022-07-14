import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

function ModalLayout(props) {
  return (
    <Container>
      <SearchBar>
        <SearchInput />
        <FiSearch className="SearchBtn" />
      </SearchBar>
      {props.children}
    </Container>
  );
}

export default ModalLayout;

const Container = styled.div`
  width: 100%;
  padding: 8% 8% 4%;
  position: fixed;
  z-index: -1;
  background: #191919fc;
`;

const SearchBar = styled.div`
  height: 20%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ffffff;

  .SearchBtn {
    font-size: 35px;
    cursor: pointer;
  }
`;

const SearchInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'TV프로그램, 영화 제목 및 출연진으로 검색해보세요',
}))`
v
  height: 100%;
  padding-bottom: 1.5%;
  border: none;
  background: transparent;
  outline-style: none;
  font-size: calc(10px + 1vw);
  font-weight: 600;
  color: #ffffff;
`;
