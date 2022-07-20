import styled from 'styled-components';
import KeywordView from './keywordView/keywordView';
import SearchView from './searchView/searchView';

function SearchModal({
  keywordList,
  setKeywordList,
  instantResultList,
  viewChange,
  keywordInput,
}) {
  return (
    <SearchBody>
      {viewChange ? (
        <SearchView
          instantResultList={instantResultList}
          keywordInput={keywordInput}
        />
      ) : (
        <KeywordView
          keywordList={keywordList}
          setKeywordList={setKeywordList}
        />
      )}
    </SearchBody>
  );
}

export default SearchModal;

const SearchBody = styled.div``;
