import styled from 'styled-components';
import { BiHeart, BiUpload } from 'react-icons/bi';
import 'swiper/css/bundle';

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
`;
const WishTextBox = styled.div`
  color: white;
`;

const Sharebox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShareTextBox = styled.div`
  color: white;
`;

const CreatorBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
    font-size: 17px;
    font-weight: 500;
  }
`;
const ActorBox = styled.div`
  display: flex;
  div {
    margin-right: 15px;
    font-size: 17px;
    font-weight: 500;
  }
`;

const SummaryBox = styled.div`
  margin-top: 20px;
  font-weight: 500;
`;

function LeftBox({ data }) {
  const creatorArr = data.participants.filter(i => i.type === '크리에이터');
  const creator = creatorArr.map(i => i.name);
  const actorArr = data.participants.filter(i => i.type === '출연');
  const actor = actorArr.map(i => i.name);
  const isSummary = data.summary;
  const titleImg = data.title_img_url;
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
        <PlayBtn>이용권 구독하기</PlayBtn>
        <Wishbox>
          <BiHeart size="40" color="white" />
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
      <SummaryBox>{isSummary}</SummaryBox>
    </LeftWrapper>
  );
}

export default LeftBox;
