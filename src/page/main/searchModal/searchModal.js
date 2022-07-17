import { useEffect, useState } from 'react';
import styled from 'styled-components';
import KeywordView from './keywordView';
import SearchView from './searhView';

function SearchModal({ keywordList, setKeywordList, keywordInput }) {
  const [isThere, setisThere] = useState('');
  useEffect(() => {
    setisThere(keywordInput?.length);
  }, [keywordInput]);
  return (
    <SearchBody>
      {isThere ? (
        <SearchView keywordInput={keywordInput} />
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
