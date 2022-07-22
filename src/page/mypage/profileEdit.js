import { useRef, useState } from 'react';
import styled from 'styled-components';
import SubHeader from './components/subHeader';

const Container = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 48%;
  height: 100vh;
`;
const Title = styled.div`
  font-size: 34px;
  color: white;

  margin: 4%;
`;

const PhotoBox = styled.div`
  width: 24.5%;
  height: auto;
  margin: 3%;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
`;
const FormBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 30%;
  margin: 2%;
`;
const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

const Input = styled.input`
  width: 100%;
  height: 65%;
  font-size: 18px;
  padding: 18px;
  border: none;
  border-radius: 3px;
  background-color: #171717;
`;
const Rules = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45%;
  margin-bottom: 3%;
  button {
    width: 55%;
    height: 70%;
    font-weight: 700;
    font-size: 19px;
    border-radius: 3px;
  }
`;

const Confirm = styled.button`
  margin-right: 1%;
  background-color: #d1d1d1;
  border: 0.1px solid #d1d1d1;
  :hover {
    background-color: white;
    border: 0.1px solid white;
    cursor: pointer;
  }
`;

const Cancel = styled.button`
  margin-left: 1%;
  background: none;
  color: #c4c4c4;
  border: 0.1px solid #c4c4c4;
  :hover {
    color: white;
    border: 0.1px solid white;
    cursor: pointer;
  }
`;
function ProfileEdit() {
  const [name, setName] = useState('');
  const image =
    'https://image.tving.com/upload/profile/default.png/dims/resize/F_webp,100';
  const onEditModal = () => {};
  const onChange = e => {
    const edit = e.target.value;
    setName(edit);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>프로필 편집</Title>
          <PhotoBox>
            <Photo src={image} alt="PropfileImg" onClick={onEditModal} />
          </PhotoBox>
          <FormBox onSubmit={onSubmit}>
            <NameBox>
              <Input
                type="text"
                placeholder="김민욱"
                onChange={onChange}
                value={name}
              />
              <Rules>
                - 2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
              </Rules>
            </NameBox>
            <ButtonBox>
              <Confirm>확인</Confirm>
              <Cancel>취소</Cancel>
            </ButtonBox>
          </FormBox>
        </Wrapper>
      </Container>
    </>
  );
}

export default ProfileEdit;
