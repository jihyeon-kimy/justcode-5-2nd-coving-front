import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  openSearchModal,
  setInputKeyword,
  switchSearchIcon,
  setSearchResultList,
  initSearchResultList,
  onLoading,
  offLoading,
} from '../../store';
import NoResult from './noResult';
import Result from './result';
import BASE_URL from '../../config';

function Search() {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = useSelector(state => state.searchResultList);
  const inputKeyword = useSelector(state => state.inputKeyword);

  useEffect(() => {
    dispatch(onLoading());
    let initInputKeyword = decodeURI(location.search).includes('keyword')
      ? decodeURI(location.search).split('=')[1]
      : '';
    dispatch(setInputKeyword(initInputKeyword));

    axios
      .get(`${BASE_URL}/searchresult?keyword=${initInputKeyword}`)
      .then(result => {
        if (result.status === 200) {
          dispatch(setSearchResultList(result.data));
        } else {
          dispatch(initSearchResultList());
        }
      })
      .finally(() => {
        dispatch(offLoading());
      });
  }, [dispatch, location.search]);

  return (
    <Container>
      <SearchGroup>
        <SearchBar>
          <SearchInput
            onClick={() => {
              dispatch(openSearchModal());
              dispatch(switchSearchIcon(1));
            }}
            value={inputKeyword || ''}
            onChange={e => {
              dispatch(setInputKeyword(e.target.value));
            }}
            autoFocus
          />
          <FiSearch
            className="SearchBtn"
            onClick={() => {
              dispatch(openSearchModal());
            }}
          />
        </SearchBar>
      </SearchGroup>

      {!data.loading &&
        (Object.keys(data.data).length !== 0 ? (
          <Result dataList={data.data.dataList} count={data.data.count} />
        ) : (
          <NoResult />
        ))}
    </Container>
  );
}

export default Search;
const Container = styled.div`
  width: 100%;
  z-index: -1;
`;

const SearchGroup = styled.div`
  padding: 10% 8% 0;
`;

const SearchBar = styled.div`
  height: 20%;
  margin-bottom: 3%;
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
  value: props.value,
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
