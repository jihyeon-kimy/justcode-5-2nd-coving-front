import { useState } from 'react';
import styled from 'styled-components';
const BottomBox = styled.div`
  width: 100%;
  height: 43vh;
  padding: 2% 5%;
  background-color: black;
`;
const TabBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  border-bottom: 0.1px solid #c4c4c4;
  div {
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 100%;
    margin-right: 30px;
  }
`;

const HistoryBox = styled.div`
  width: 100%;
`;
const WishBox = styled.div`
  width: 100%;
`;
function BottomWrapper() {
  const [value, setValue] = useState(true);
  const onClickHistory = () => {
    setValue(true);
  };
  const onClickWish = () => {
    setValue(false);
  };

  return (
    <BottomBox>
      <TabBox>
        <div onClick={onClickHistory}>시청 내역</div>
        <div onClick={onClickWish}>찜</div>
      </TabBox>
      {value ? <HistoryBox>시청내역</HistoryBox> : <WishBox>찜</WishBox>}
    </BottomBox>
  );
}

export default BottomWrapper;
