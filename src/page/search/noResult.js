import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsExclamationCircle } from 'react-icons/bs';
import BASE_URL from '../../config';

function NoResult() {
  let navigate = useNavigate();
  const [popularKeywordList, setPopularKeywordList] = useState([]);
  let inputKeyword = useSelector(state => state.inputKeyword);
  useEffect(() => {
    axios.get(`${BASE_URL}/search/popular`).then(result => {
      setPopularKeywordList(result.data);
    });
  }, []);

  return (
    <Container>
      <BsExclamationCircle className="icon" />
      <Desc>'{inputKeyword}' 검색 결과가 없습니다.</Desc>
      <Info>요즘 인기 있는 검색어를 추천해 드릴게요.</Info>
      {popularKeywordList &&
        popularKeywordList.map((keyword, index) => {
          return (
            <Keyword
              key={keyword?.toString() + index?.toString()}
              onClick={() => navigate(`/detail/${keyword.program_id}`)}
            >
              {keyword.title}
            </Keyword>
          );
        })}
    </Container>
  );
}

export default NoResult;

const Container = styled.div`
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: calc(60px + 1vw);
  }
`;
const Desc = styled.div`
  padding-top: 3%;
  font-size: calc(15px + 1vw);
  font-weight: 600;
  color: #ffffff;
`;
const Info = styled.div`
  padding: 2% 0;
  font-size: calc(8px + 0.8vw);
  font-weight: 500;
  color: #888888;
`;

const Keyword = styled.div`
  padding-bottom: 1%;
  font-size: calc(7px + 0.6vw);
  font-weight: 600;
  color: #868686;

  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
