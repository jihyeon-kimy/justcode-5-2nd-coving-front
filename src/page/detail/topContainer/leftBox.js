import styled from 'styled-components';
import { BiUpload } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import BASE_URL from '../../../config';
import { useNavigate } from 'react-router-dom';

const LeftWrapper = styled.div`
  width: 560px;
  height: auto;
`;

const TitleBox = styled.div`
  width: auto;
  max-width: 500px;
  img {
    max-width: 100%;
    height: auto;
    max-height: 200px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  width: auto;
  height: 34px;
  background-size: cover;
  margin-top: 20px;
  div {
    font-size: 17px;
    height: 29px;
    line-height: 28px;
    padding-left: 4px;
    padding-right: 4px;
    border: 0.1px solid #c4c4c4;
    border-radius: 3px;
    margin: 4px;
  }
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PlayBtn = styled.button`
  width: 270px;
  height: 80px;
  border-radius: 5px;
  border: none;
  margin-right: 25px;
  font-weight: 900;
  font-size: 18px;

  :hover {
    transform: scale(1.03);
    transition: all 0.2s;
    cursor: pointer;
  }
`;

const Wishbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 25px;
  :hover {
    cursor: pointer;
  }
`;
const WishTextBox = styled.div`
  color: white;
`;

const Sharebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;
const ShareTextBox = styled.div`
  color: white;
`;

const CreatorBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
    font-size: 17px;
    font-weight: 700;
  }
`;
const ActorBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
    font-size: 17px;
    font-weight: 700;
  }
`;

const SummaryBox = styled.div`
  max-width: 560px;
  max-height: 80px;
  margin-top: 15px;
  overflow: hidden;
  word-break: keep-all;
  white-space: normal;
  line-height: 1.2;
  height: 3.6em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const FullSummaryBox = styled.div`
  max-width: 560px;
  height: auto;
  margin-top: 15px;
  word-break: keep-all;
`;

const More = styled.div`
  display: flex;
  margin-top: 15px;

  :hover {
    cursor: pointer;
    color: white;
  }
  div {
    margin-right: 5px;
  }
`;

function LeftBox({ data, last, wishList }) {
  const [wishValue, setWishValue] = useState(wishList);
  const [summaryValue, setSummaryValue] = useState(true);
  const { episode_num: lastEp, video_url: video } = last;
  const {
    id: programId,
    title: isTitle,
    participants,
    summary: isSummary,
    title_img_url: titleImg,
  } = data;
  const creatorArr = participants.filter(i => i.type === '크리에이터');
  const creator = creatorArr.map(i => i.name);
  const actorArr = participants.filter(i => i.type === '출연');
  const actor = actorArr.map(i => i.name);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    setWishValue(wishList);
  }, [wishList]);

  const onMore = () => {
    setSummaryValue(prev => !prev);
  };

  const onWish = () => {
    (async () => {
      const res = await fetch(`${BASE_URL}/program/${programId}`, {
        method: 'POST',
        headers: {
          access_token: token,
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      await setWishValue(json.data.isLiked);
    })();
  };

  const isData = {
    episode_num: lastEp,
    id: null,
    img_url: '',
    release_date: '',
    running_time: null,
    summary: null,
    video_url: video,
  };

  const continueWatch = () => {
    window.scrollTo(0, 0);
    navigate('/video', {
      state: {
        title: isTitle,
        data: isData,
        watch: true,
        programId: programId,
      },
    });
  };

  const watch = () => {
    window.scrollTo(0, 0);
    navigate('/video', {
      state: {
        title: isTitle,
        data: data.episode_info[0],
        watch: false,
        programId: programId,
      },
    });
  };

  return (
    <LeftWrapper>
      <TitleBox>
        <img src={titleImg} />
      </TitleBox>
      <InfoBox>
        <div>{data.age_range}</div>
        {data.genres.map(i => (
          <div>{i}</div>
        ))}
      </InfoBox>
      <BtnBox>
        {lastEp !== null ? (
          <PlayBtn onClick={continueWatch}>
            <p>제&nbsp;{lastEp}화 이어보기</p>
          </PlayBtn>
        ) : (
          <PlayBtn onClick={watch}>
            <p>{isTitle}&nbsp;시청하기</p>
          </PlayBtn>
        )}

        <Wishbox onClick={onWish}>
          {wishValue ? (
            <AiFillHeart size="40" color="white" />
          ) : (
            <AiOutlineHeart size="40" color="white" />
          )}
          <WishTextBox>찜</WishTextBox>
        </Wishbox>
        <Sharebox>
          <BiUpload size="40" color="white" />
          <ShareTextBox>공유</ShareTextBox>
        </Sharebox>
      </BtnBox>
      <CreatorBox>
        <div>크리에이터</div>
        <div>
          {creator.map(i => (
            <span>{i} </span>
          ))}
        </div>
      </CreatorBox>
      <ActorBox>
        <div>출연</div>
        <div>
          {actor.map(i => (
            <span>{i} </span>
          ))}
        </div>
      </ActorBox>
      {summaryValue ? (
        <>
          <SummaryBox>{isSummary}</SummaryBox>
          <More onClick={onMore}>
            <div>더보기</div>
            <FiChevronDown />
          </More>
        </>
      ) : (
        <>
          <FullSummaryBox>{isSummary}</FullSummaryBox>
          <More onClick={onMore}>
            <div>닫기</div>
            <FiChevronUp />
          </More>
        </>
      )}
    </LeftWrapper>
  );
}

export default LeftBox;
