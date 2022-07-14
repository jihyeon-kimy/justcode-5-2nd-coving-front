import styled from 'styled-components';
import KeywordView from './keywordView';
import ModalLayout from './modalLayout';
import SearchView from './SearhView';

function SearchModal() {
  return (
    <ModalLayout>
      <SearchBody>
        <KeywordView />
        {/* <SearchView /> */}
      </SearchBody>
    </ModalLayout>
  );
}

export default SearchModal;

const SearchBody = styled.div``;
