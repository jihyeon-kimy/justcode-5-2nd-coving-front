import styled from 'styled-components';
import KeywordView from './keywordView/keywordView';
import SearchView from './searchView/searchView';

function SearchModal({
  keywordList,
  setKeywordList,
  searchResultList,
  viewChange,
}) {
  return (
    <SearchBody>
      {viewChange ? (
        <SearchView searchResultList={searchResultList} />
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
