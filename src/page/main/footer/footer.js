import styled from 'styled-components';

function Footer() {
  const informations = [
    [
      '대표이사 : 홍길동',
      '사업자정보확인',
      '개인정보관리 책임자 : 홍길동',
      '사업자등록번호 : 000-00-0000',
      '통신판매신고번호 : 2020-서울마포-3641호',
    ],
    [
      '사업장 : 서울특별시 관악구 남현동 도르마무길 큐브디지털 15층',
      '호스팅사업자 : 인사이더',
    ],
    [
      '고객문의 바로가기',
      '대표이메일 : gooddeveloper@gmail.com',
      '고객센터:0000-0000(평일/주말 09시~18시, 공휴일 휴무',
    ],
    [
      'ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 000-0000-0000',
      '방송 편성문의 : 0000-0000',
    ],
  ];

  const buttons = [
    '고객센터',
    '이용약관',
    '개인정보처리방침',
    '청소년 보호정책',
    '법적고지',
    '이벤트',
    '인재채용',
  ];

  return (
    <Contatiner>
      <NoticeGroup>
        <Notice>
          <Title>공지사항</Title>
          <span>[안내] 2차 프로젝트 종료 예정(2022년 7월 22일 오후 2시)</span>
        </Notice>
        <Links>
          <Link>브랜드 바로가기 +</Link>
          <Link>그룹계열사 바로가기 +</Link>
        </Links>
      </NoticeGroup>
      <ButtonGroup>
        {buttons.map((button, idx) => {
          return (
            <Button key={button.toString() + idx.toString()}>{button}</Button>
          );
        })}
      </ButtonGroup>
      {informations.map((information, idx) => {
        return (
          <InfoGroup key={idx.toString()}>
            {information.map((data, idx) => {
              return (
                <Info key={data[0].toString() + idx.toString()}>{data}</Info>
              );
            })}
          </InfoGroup>
        );
      })}
    </Contatiner>
  );
}

export default Footer;

const Contatiner = styled.div`
  min-width: 800px;
  height: 400px;
  padding: 40px;
`;

const NoticeGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Notice = styled.div`
  margin: 10px 0;
  font-size: calc(7px + 0.5vw);
  font-weight: 600;
  line-height: calc(40px + 0.2vh);
`;

const Title = styled.span`
  padding-right: 15px;
  font-weight: 600;
  color: #757373eb;
  }
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.div`
  margin: 10px 0 10px 20px;
  font-size: calc(7px + 0.5vw);
  line-height: calc(40px + 0.2vh);

  :hover {
    filter: brightness(120%);
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  border-top: 1px solid #757373eb;
  display: flex;
`;
const Button = styled.div`
  margin: 10px;
  font-size: calc(7px + 0.5vw);
  line-height: calc(40px + 0.2vh);

  :nth-child(1) {
    margin-left: 0;
  }

  :hover {
    filter: brightness(120%);
    cursor: pointer;
  }
`;

const InfoGroup = styled.div`
  display: flex;
`;

const Info = styled.div`
  padding: 0 8px;
  margin: 8px 0;
  border-right: 1px solid #8e8e8e;
  font-size: calc(5px + 0.5vw);
  font-weight: 600;
  line-height: 10px;
  color: #757373eb;

  :nth-child(1) {
    margin-left: 0;
    padding-left: 0;
  }
`;
