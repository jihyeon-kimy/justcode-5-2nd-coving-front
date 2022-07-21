import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiCheck } from 'react-icons/bi';
import BASE_URL from '../../config';

const BottomBox = styled.div`
  overflow-x: hidden;
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
  overflow-x: hidden;
  display: flex;
  width: 100%;
  height: 70vh;
`;
const WishBox = styled.div`
  overflow-x: hidden;
  display: flex;
  width: 100%;
  height: 70vh;
`;

const PosterWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: ${prop => prop.width};
  height: auto;
  margin-top: 5%;
  margin-right: 0.6%;
  transform: translateY(0px);
  :hover {
    transform: translateY(-15px);
    transition: all 0.2s;
    cursor: pointer;
  }
  transition: all 0.2s;
`;

const Poster = styled.img`

  width: ${prop => prop.width}
  height: auto;
  max-height: ${prop => prop.height}
  margin-bottom: 10px;
  border-radius:3px;
  filter: brightness(${prop => prop.edit});
  
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CheckBtn = styled.button`
  position: absolute;
  right: 0;
  margin: 10px;
  font-size: 32px;
  color: ${prop => prop.clicked.color};
  background-color: ${prop => prop.clicked.bgColor};
  border: ${prop => prop.clicked.border};
  border-radius: 25px;
  width: 42px;
  :hover {
    cursor: pointer;
    color: ${prop => prop.clicked.hoverColor};
    border: 2px solid white;
  }
`;

const EditBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 7%;
  color: #858585;
  background-color: black;
  padding: 0.3%;
  font-size: 15px;
  border: 0.1px solid #858585;
  border-radius: 3px;
  margin-top: 1%;
  cursor: pointer;
  :hover {
    color: white;
    border: 0.1px solid white;
  }
`;
function BottomWrapper({ wishs, watchs, watchUpdate, wishUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [watchRes, setWatchRes] = useState();
  const [wishRes, setwishRes] = useState();
  const [clickId, setClickIdValue] = useState([]);
  const [wishClickId, setWishClickId] = useState([]);
  const wishInterface = [{ id: null, title: '', poster_img_url: '' }];
  const watchInterface = [
    { id: null, img_url: '', title: '', episode_num: null, updated_at: '' },
  ];
  const [wish, setWish] = useState(wishInterface);
  const [watch, setWatch] = useState(watchInterface);
  const [value, setValue] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const onClickHistory = () => {
    setValue(true);
    setEditMode(false);
  };
  const onClickWish = () => {
    setValue(false);
    setEditMode(false);
  };
  useEffect(() => {
    setWatchRes(clickId);

    console.log(clickId);
    console.log(watchRes);
  }, [clickId, watchRes]);

  useEffect(() => {
    setwishRes(wishClickId);

    console.log(wishClickId);
    console.log(wishRes);
  }, [wishClickId, wishRes]);

  const watchResponse = {
    id: watchRes,
  };

  const wishResponse = {
    id: wishRes,
  };

  useEffect(() => {
    setWish(wishs);
    setWatch(watchs);
  }, [wishs, watchs]);

  const onClick = e => {
    const clicked = Number(e.currentTarget.value);
    if (!clickId.includes(clicked)) {
      setClickIdValue([clicked, ...clickId]);
    } else if (clickId.includes(clicked)) {
      const deleteId = clickId.filter(i => i !== clicked);
      setClickIdValue(deleteId);
    }
    console.log(!clickId.includes(clicked));
  };

  const wishClick = e => {
    const wishClicked = Number(e.currentTarget.value);
    if (!wishClickId.includes(wishClicked)) {
      setWishClickId([wishClicked, ...wishClickId]);
    } else if (wishClickId.includes(wishClicked)) {
      const deleteId = wishClickId.filter(i => i !== wishClicked);
      setWishClickId(deleteId);
    }
    console.log(!wishClickId.includes(wishClicked));
  };

  const unClickedStyle = {
    color: '#c4c4c4',
    border: '2px solid #c4c4c4',
    bgColor: 'rgba(0, 0, 0, 0.3)',
    hoverColor: 'white',
  };
  const clickedStyle = {
    color: 'black',
    border: '2px solid white',
    bgColor: 'white',
    hoverColor: 'black',
  };
  return (
    <BottomBox>
      <TabBox>
        <div onClick={onClickHistory}>시청 내역</div>
        <div onClick={onClickWish}>찜</div>
      </TabBox>
      {value ? (
        <HistoryBox>
          {editMode ? (
            <EditBtn
              onClick={() => {
                setEditMode(false);
                fetch(`${BASE_URL}/my/watch`, {
                  method: 'DELETE',
                  headers: {
                    access_token: token,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(watchResponse),
                })
                  .then(res => res.json())
                  .then(res => {
                    console.log(res);
                    watchUpdate(clickId);
                    setClickIdValue([]);
                  });
              }}
            >
              완료({clickId.length})
            </EditBtn>
          ) : (
            <EditBtn
              onClick={() => {
                setEditMode(true);
              }}
            >
              편집
            </EditBtn>
          )}
          {editMode ? (
            <>
              {watch.map(i => (
                <PosterWrapper width="20%">
                  <Box>
                    <Poster
                      src={i.img_url}
                      width="100%"
                      height="auto"
                      edit={'0.5'}
                    />
                    {i.title}&nbsp;제
                    {i.episode_num}화<div>{i.updated_at}</div>
                    <CheckBtn
                      onClick={onClick}
                      value={i.id}
                      clicked={
                        clickId.includes(i.id) ? clickedStyle : unClickedStyle
                      }
                    >
                      <BiCheck />
                    </CheckBtn>
                  </Box>
                </PosterWrapper>
              ))}
            </>
          ) : (
            <>
              {watch.map(i => (
                <PosterWrapper width="20%">
                  <Poster
                    src={i.img_url}
                    width="100%"
                    height="auto"
                    edit={'1.0'}
                  />
                  {i.title}&nbsp;제
                  {i.episode_num}화<div>{i.updated_at}</div>
                </PosterWrapper>
              ))}
            </>
          )}
        </HistoryBox>
      ) : (
        <WishBox>
          {editMode ? (
            <EditBtn
              onClick={() => {
                setEditMode(false);
                fetch(`${BASE_URL}/my/favorite`, {
                  method: 'DELETE',
                  headers: {
                    access_token: token,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(wishResponse),
                })
                  .then(res => res.json())
                  .then(res => {
                    console.log(res);
                    wishUpdate(wishClickId);
                    setWishClickId([]);
                  });
              }}
            >
              완료({wishClickId.length})
            </EditBtn>
          ) : (
            <EditBtn
              onClick={() => {
                setEditMode(true);
              }}
            >
              편집
            </EditBtn>
          )}
          {editMode ? (
            <>
              {wish.map(i => (
                <PosterWrapper
                  width="14%"
                  // onClick={() => navigate(`/detail/${i.id}`)}
                >
                  <Box>
                    <Poster
                      src={i.poster_img_url}
                      width="100%"
                      height="250px"
                      edit={'0.5'}
                    />
                    {i.title}
                    <CheckBtn
                      onClick={wishClick}
                      value={i.id}
                      clicked={
                        wishClickId.includes(i.id)
                          ? clickedStyle
                          : unClickedStyle
                        // clickId.includes(i.id) ? clickedStyle : unClickedStyle
                      }
                    >
                      <BiCheck />
                    </CheckBtn>
                  </Box>
                </PosterWrapper>
              ))}
            </>
          ) : (
            <>
              {wish.map(i => (
                <PosterWrapper
                  width="14%"
                  // onClick={() => navigate(`/detail/${i.id}`)}
                >
                  <Poster
                    src={i.poster_img_url}
                    width="100%"
                    height="250px"
                    edit={'1.0'}
                  />
                  {i.title}
                </PosterWrapper>
              ))}
            </>
          )}
        </WishBox>
      )}
    </BottomBox>
  );
}

export default BottomWrapper;
