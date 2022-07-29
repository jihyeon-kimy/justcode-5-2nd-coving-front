import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import debounce from 'lodash.debounce';
import BASE_URL from '../../../config';
import SearchModal from './searchModal';
import Modal from '../../../components/modal/modal';
import {
  closeSearchModal,
  switchSearchIcon,
  setInputKeyword,
} from '../../../store';

function ModalLayout() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let inputKeyword = useSelector(state => state.inputKeyword);
  const [openModal, setOpenModal] = useState(false);
  const [instantResultList, setInstantResultList] = useState([]);
  const [viewChange, setViewChange] = useState(false);

  const getInstantResult = event => {
    dispatch(setInputKeyword(event.target.value));
    const debounceHanddler = debounce(() => {
      axios
        .get(`${BASE_URL}/instantsearch?keyword=${event.target.value}`)
        .then(result => {
          if (result.status === 200) {
            setInstantResultList(result.data.dataList);
            setViewChange(true);
          } else {
            setViewChange(false);
          }
        });
    }, 600);
    debounceHanddler();
  };

  const [keywordList, setKeywordList] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('keywordList')) !== null) {
      setKeywordList(JSON.parse(localStorage.getItem('keywordList')));
    }
  }, []);

  const saveList = inputKeyword => {
    setKeywordList(prev => {
      const unduplicate = new Set([...prev, inputKeyword]);
      const newKeywordList = [...unduplicate];
      localStorage.setItem('keywordList', JSON.stringify(newKeywordList));
      return newKeywordList;
    });
  };

  return (
    <Background>
      <Container>
        <SearchBar>
          <SearchInput
            onChange={getInstantResult}
            onKeyPress={e => {
              if (
                e.key === 'Enter' &&
                (e.target.value === undefined || e.target.value === '')
              ) {
                setOpenModal(true);
              } else if (e.key === 'Enter') {
                saveList(e.target.value);
                dispatch(closeSearchModal());
                dispatch(switchSearchIcon(2));
                navigate(`/search?keyword=${inputKeyword}`);
              }
            }}
            value={inputKeyword}
            autoFocus
          />
          <FiSearch
            className="SearchBtn"
            onClick={() => {
              if (inputKeyword && inputKeyword !== '') {
                saveList(inputKeyword);
                dispatch(closeSearchModal());
                dispatch(switchSearchIcon(2));
                navigate(`/search?keyword=${inputKeyword}`);
              } else {
                setOpenModal(true);
              }
            }}
          />
        </SearchBar>
        <SearchModal
          keywordList={keywordList}
          setKeywordList={setKeywordList}
          instantResultList={instantResultList}
          viewChange={viewChange}
        />
      </Container>
      <Modal
        openModal={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        text="검색어를 입력해주세요."
      />
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
  padding: 10% 8% 4%;
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

const SearchInput = styled.input.attrs(() => ({
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
