import styled from 'styled-components';
import KeywordView from './keywordView';
import SearchView from './SearhView';

function SearchModal({ keywordList, setKeywordList }) {
  return (
    <SearchBody>
      <KeywordView keywordList={keywordList} setKeywordList={setKeywordList} />
      {/* <SearchView /> */}
    </SearchBody>
  );
}

export default SearchModal;

const SearchBody = styled.div``;
