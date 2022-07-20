import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import debounce from 'lodash.debounce';
import BASE_URL from '../../../config';
import SearchModal from './searchModal';
import Modal from '../../../components/modal/modal';
import {
  closeSearchModal,
  switchSearchIcon,
  setSearchResultList,
  initSearchResultList,
  onLoading,
  offLoading,
} from '../../../store';

function ModalLayout() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [keywordInput, setKeywordInput] = useState(
    decodeURI(location.search).includes('keyword')
      ? decodeURI(location.search).split('=')[1]
      : ''
  );

  const [instantResultList, setInstantResultList] = useState([]);
  const [viewChange, setViewChange] = useState(false);
  const handleChange = event => {
    setKeywordInput(event.target.value);
    const debounceHanddler = debounce(() => {
      axios
        .get(`${BASE_URL}/search/instant?keyword=${event.target.value}`)
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

  const searchInputKeyword = async keyword => {
    dispatch(onLoading());
    dispatch(initSearchResultList());
    await axios
      .get(`${BASE_URL}/search?keyword=${keyword}`)
      .then(result => {
        if (result.status === 200) {
          dispatch(setSearchResultList(result.data));
        } else {
          dispatch(initSearchResultList());
        }
      })
      .finally(() => {
        dispatch(offLoading());
        navigate(`/search?keyword=${keyword}`);
      });
  };

  const [keywordList, setKeywordList] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('keywordList')) !== null) {
      setKeywordList(JSON.parse(localStorage.getItem('keywordList')));
    }
  }, []);

  const saveList = keywordInput => {
    setKeywordList(prev => {
      const unduplicate = new Set([...prev, keywordInput]);
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
            onChange={handleChange}
            onKeyPress={e => {
              if (
                e.key === 'Enter' &&
                (keywordInput === undefined || keywordInput === '')
              ) {
                setOpenModal(true);
              } else if (e.key === 'Enter') {
                searchInputKeyword(keywordInput);
                saveList(keywordInput);
                dispatch(closeSearchModal());
                dispatch(switchSearchIcon(2));
              }
            }}
            value={keywordInput}
          />
          <FiSearch
            className="SearchBtn"
            onClick={() => {
              if (keywordInput && keywordInput !== '') {
                searchInputKeyword(keywordInput);
                saveList(keywordInput);
                dispatch(closeSearchModal());
                dispatch(switchSearchIcon(2));
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
          keywordInput={keywordInput}
        />
      </Container>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
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
