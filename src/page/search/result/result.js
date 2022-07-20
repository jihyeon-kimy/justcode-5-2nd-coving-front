import styled from 'styled-components';
import { useSelector } from 'react-redux';
import MultipleSlider from './multipleSlider';

function Result({ dataList, count }) {
  let keywordInput = useSelector(state => state.inputKeyword.keyword);
  return (
    <>
      <Desc>
        '<span>{keywordInput}</span>' 검색 결과가 {count || 0}개 있습니다.
      </Desc>
      {dataList &&
        dataList.map((data, idx) => {
          return (
            <MultipleSlider
              rank={false}
              summary={false}
              title={data.channel_name}
              count={`${data.programs.length}개`}
              key={data.channel_name.toString() + idx.toString()}
              programList={data.programs}
            />
          );
        })}
    </>
  );
}

export default Result;

const Desc = styled.div`
  text-align: center;
  font-weight: 500;
  color: #ffffff;
  font-size: calc(12px + 1.1vw);
  padding-bottom: 2%;

  span {
    font-weight: 700;
  }
`;
