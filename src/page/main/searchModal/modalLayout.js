import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchModal from './searchModal';

function ModalLayout(props) {
  const [keywordInput, setKeywordInput] = useState();
  const [keywordList, setKeywordList] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('keywordList')) !== null) {
      setKeywordList(JSON.parse(localStorage.getItem('keywordList')));
    }
  }, []);

  function SaveList() {
    setKeywordList(prev => {
      const unduplicate = new Set([...prev, keywordInput]);
      const newKeywordList = [...unduplicate];
      localStorage.setItem('keywordList', JSON.stringify(newKeywordList));
      return newKeywordList;
    });
  }

  return (
    <Container>
      <SearchBar>
        <SearchInput
          onChange={e => {
            setKeywordInput(e.target.value);
          }}
        />
        <FiSearch
          className="SearchBtn"
          onClick={() => {
            SaveList();
          }}
        />
      </SearchBar>
      <SearchModal keywordList={keywordList} setKeywordList={setKeywordList} />
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
    font-size: calc(10px + 1.2vw);
    cursor: pointer;
  }
`;

const SearchInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'TV프로그램, 영화 제목 및 출연진으로 검색해보세요',
}))`
  width: 100%;
  height: 100%;
  padding-bottom: 1.5%;
  border: none;
  outline-style: none;
  background: transparent;
  font-size: calc(10px + 1vw);
  font-weight: 600;
  color: #ffffff;
`;
