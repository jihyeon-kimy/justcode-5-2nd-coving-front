import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openSearchModal, switchSearchIcon } from '../../store';
import NoResult from './noResult';
import Result from './result/result';

function Search() {
  let dispatch = useDispatch();
  let location = useLocation();
  let data = useSelector(state => state.searchResultList);
  let keywordInput = decodeURI(location.search).includes('keyword')
    ? decodeURI(location.search).split('=')[1]
    : '';

  return (
    <Container>
      <SearchGroup>
        <SearchBar>
          <SearchInput
            onClick={() => {
              dispatch(openSearchModal());
              dispatch(switchSearchIcon(1));
            }}
            value={keywordInput || ''}
            readOnly
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
        {!data.loading ? (
          Object.keys(data.data).length !== 0 ? (
            <Result
              dataList={data.data.dataList}
              count={data.data.count}
              keywordInput={keywordInput}
            />
          ) : (
            <NoResult keywordInput={keywordInput} />
          )
        ) : null}
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
const Test = styled.div`
  font-size: 500px;
  color: red;
`;
