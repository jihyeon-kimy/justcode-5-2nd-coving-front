import styled from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const TopBox = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  height: 40vh;
  background-color: #171717;
`;
const PhotoBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  padding-left: 5%;
  height: 100%;
`;
const PhotoBox = styled.img.attrs(props => ({
  src: 'https://i.ibb.co/8sYR6ps/profile-image-default.png',
  alt: 'PropfileImg',
}))`
  width: 100%;
  height: auto;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;
const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;
const UserInfoNameBox = styled.div`
  display: flex;
  font-size: 36px;
  margin: 1.5% 5%;
`;
const UserName = styled.div`
  color: white;
`;
const Edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #474747;
  margin-left: 2%;
  :hover {
    color: #8a8a8a;
    cursor: pointer;
  }
`;
const UserInfoVoucherBox = styled.div`
  display: flex;
  margin: 1.5% 5%;
  color: white;
  font-weight: 600;
`;

const UserVoucher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subscribe = styled.button`
  background: none;
  border: 1px solid #474747;
  color: #8a8a8a;
  padding: 0.5% 0.8%;
  margin-left: 2%;
  font-size: 14px;
  border-radius: 3px;
  :hover {
    color: white;
    cursor: pointer;
  }
`;

function TopWrapper({ email }) {
  const navigate = useNavigate();

  const goEdit = () => {
    navigate(`/profileedit`);
  };
  return (
    <TopBox>
      <PhotoBoxWrapper>
        <PhotoBox onClick={goEdit} />
      </PhotoBoxWrapper>
      <UserInfoWrapper>
        <UserInfoNameBox>
          <UserName>{email}</UserName>
          <Edit onClick={goEdit}>
            <HiPencil />
          </Edit>
        </UserInfoNameBox>
        <UserInfoVoucherBox>
          <UserVoucher>사용 중인 이용권이 없습니다.</UserVoucher>
          <Subscribe>이용권 구독</Subscribe>
        </UserInfoVoucherBox>
      </UserInfoWrapper>
    </TopBox>
  );
}

export default TopWrapper;
