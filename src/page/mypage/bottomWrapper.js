import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const BottomBox = styled.div`
  width: 100%;
  height: auto;
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
    margin-bottom: 15px;
  }
`;

const HistoryBox = styled.div`
  width: 100%;
`;
const WishBox = styled.div`
  display: flex;
  width: 100%;
`;

const PosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: auto;
  margin-top: 3%;
  margin-right: 0.6%;
  :hover {
    transform: translateY(-15px);
    transition: all 0.2s;
    cursor: pointer;
  }
  transition: all 0.2s;
`;

const Poster = styled.img`
  width: 100%
  height: auto;
  max-height: 250px;
  margin-bottom: 10px;
  border-radius:3px;
`;
function BottomWrapper({ wishs }) {
  const wishInterface = [{ id: null, title: '', poster_img_url: '' }];
  const [wish, setWish] = useState(wishInterface);
  const [value, setValue] = useState(true);
  const navigate = useNavigate();
  const onClickHistory = () => {
    setValue(true);
  };
  const onClickWish = () => {
    setValue(false);
  };

  useEffect(() => {
    setWish(wishs);
  }, [wishs]);

  return (
    <BottomBox>
      <TabBox>
        <div onClick={onClickHistory}>시청 내역</div>
        <div onClick={onClickWish}>찜</div>
      </TabBox>
      {value ? (
        <HistoryBox>시청내역</HistoryBox>
      ) : (
        <WishBox>
          {wish.map(i => (
            <PosterWrapper onClick={() => navigate(`/detail/${i.id}`)}>
              <Poster src={i.poster_img_url} />
              {i.title}
            </PosterWrapper>
          ))}
        </WishBox>
      )}
    </BottomBox>
  );
}

export default BottomWrapper;
