import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import SearchModal from './searchModal';
import { useNavigate } from 'react-router-dom';

function ModalLayout({ setsearchModalHide }) {
  let navigate = useNavigate();
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
    <Background>
      <Container>
        <SearchBar>
          <SearchInput
            onChange={e => {
              setKeywordInput(e.target.value);
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                SaveList();
                navigate(`/search?keyword=${keywordInput}`);
                setsearchModalHide(false);
              }
            }}
          />
          <FiSearch
            className="SearchBtn"
            onClick={() => {
              SaveList();
              navigate(`/search?keyword=${keywordInput}`);
              setsearchModalHide(false);
            }}
          />
        </SearchBar>
        <SearchModal
          keywordList={keywordList}
          setKeywordList={setKeywordList}
          keywordInput={keywordInput}
        />
      </Container>
    </Background>
  );
}

export default ModalLayout;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000000a8;
  z-index: -1;
`;

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
