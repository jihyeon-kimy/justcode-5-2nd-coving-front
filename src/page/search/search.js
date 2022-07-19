import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BASE_URL from '../../config';
import axios from 'axios';
import { changeKeyword, openSearchModal, switchSearchIcon } from '../../store';
import NoResult from './noResult';
import Result from './result/result';

function Search() {
  let dispatch = useDispatch();
  let location = useLocation();
  let keywordInput = useSelector(state => state.inputKeyword.keyword);
  let [haveContent, setHaveContet] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/search?keyword=${keywordInput}`).then(result => {
      if (result.status === 200) {
        setHaveContet(true);
        setData(result.data);
      } else {
        setHaveContet(false);
      }
    });
  }, [location.search]);

  return (
    <Container>
      <SearchGroup>
        <SearchBar>
          <SearchInput
            onClick={() => {
              dispatch(openSearchModal());
              dispatch(switchSearchIcon(1));
            }}
            onChange={e => {
              dispatch(changeKeyword(e.target.value));
            }}
            value={keywordInput || ''}
          />
          <FiSearch
            className="SearchBtn"
            onClick={() => {
              dispatch(openSearchModal());
            }}
          />
        </SearchBar>
      </SearchGroup>

      <Contents>
        {haveContent ? (
          <Result dataList={data.dataList} count={data.count} />
        ) : (
          <NoResult />
        )}
      </Contents>
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

const Contents = styled.div``;
