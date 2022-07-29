import KeywordView from './keywordView/keywordView';
import SearchView from './searchView/searchView';

function SearchModal({
  keywordList,
  setKeywordList,
  instantResultList,
  viewChange,
}) {
  return viewChange ? (
    <SearchView instantResultList={instantResultList} />
  ) : (
    <KeywordView keywordList={keywordList} setKeywordList={setKeywordList} />
  );
}

export default SearchModal;
