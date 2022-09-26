# 🎞 COVING 프로젝트


## 1. 프로젝트 소개

- 프로젝트 : OTT서비스 [TVING](https://www.tving.com/onboarding?&utm_source=google_keyword&utm_medium=cpc&utm_campaign=tving&utm_content=pcweb&utm_term=%ED%8B%B0%EB%B9%99&BSCPN=TVING&BSPRG=GOOGLESA&BSCCN1=%ED%8B%B0%EB%B9%99&gclid=CjwKCAjw-L-ZBhB4EiwA76YzOeu4oSYXm5AweGcYFiKmgi_G4q17Uluples3kZC1kCDwH_r6DeuA_BoCAhcQAvD_BwE)을 참고하여 진행한 팀 프로젝트
- 개발기간 : 2022/7/11 ~ 2022/7/26
- 개발 인원 : 6명(FE 2명, BE 4명)
- 팀원: 김지현, 김민욱, 김형우, 이상민, 이주리, 케빈
- Github 링크 : [프론트엔드](https://github.com/wecode-bootcamp-korea/justcode-5-2nd-coving-front) / [백엔드](https://github.com/wecode-bootcamp-korea/justcode-5-2nd-coving-back)
- [노션 프로젝트 페이지](https://www.notion.so/wecode/4-Coving-2b7f3313343345588d57b47cb711a019)
    
<br />

## 2. 팀원 역할 분담

| 이름 | 포지션 | 역할 |
| ------ | ------ | ------ |
| 김지현 | FE | **오프닝 페이지, 메인 페이지, 프로그램 페이지, 검색 모달, 검색 페이지** |
| 김민욱 | FE | 서브 페이지, 상세페이지, 비디오플레이, 마이페이지 |
| 김형우 | BE | 검색 API(키워드 검색& 실시간 인기 검색어), 소셜로그인 - 카카오톡 |
| 이상민 | BE | 상세페이지 API, 마이페이지 API, 소셜로그인 - 네이버 |
| 이주리 | BE | 메인페이지 API, TV 프로그램 API |
| 케빈 | BE | 로그인/회원가입 API, 소셜로그인 - 구글, AWS 배포 |


<br />

## 3. 기술 스택

- Front-End : Javascript, React.js, Styled-Component
- Back-End : Node.js, express, Bcrypt, JWT, RESTful API, 소셜 로그인 (카카오, 네이버, 구글)
- Infra : S3, AWS EC2, Docker, MySQL, RDS

<br />

## 4. 데모 영상

https://user-images.githubusercontent.com/78922001/192206297-ef364876-2f46-47da-a173-c3885a660f54.mp4

<br />

## 5. 구현 기능

### 1) 메인 페이지(/main)
- React-Swiper 라이브러리를 커스터마이징하여 4종 슬라이더 컴포넌트 구현

  ![ezgif com-gif-maker](https://user-images.githubusercontent.com/78922001/192216019-dbc9b5a1-e572-4668-9db7-356de6cba78e.gif)


### 2) 프로그램 페이지(/list)
- 장르, 채널에 따른 filter / 인기순, 최신순 sorting 기능 구현

  ![ezgif com-gif-maker](https://user-images.githubusercontent.com/78922001/192218489-ff936904-5caa-4168-8c07-162013973099.gif)


### 3) 검색 모달, 검색 페이지(/search)
- 검색어 입력 시, 엔터없이 API호출 후 결과 출력(lodash-debounce 라이브러리 사용/과도한 이벤트 발생 방지)
- 최근 검색어 localStorage 저장 후 출력 및 삭제 기능 구현
- 검색 후 유저가 프로그램을 클릭할 경우 실시간 인기 검색어API 호출(POST)

  ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/78922001/192218780-8b61b5c8-4455-459c-9685-f89582bbe095.gif)


### 4) 공통 컴포넌트(Nav, footer)
- Redux toolkit을 사용하여, 현재 페이지에 맞춰 검색 아이콘 변경
- 스크롤 다운 시, Nav  linear-gradient값 증가
- profile에 mouse-down시 드롭다운 메뉴


