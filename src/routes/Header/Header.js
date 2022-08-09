import styled from 'styled-components';

/** Header.jsx: 헤더 영역 */
// 헤더 전체 화면
// width: 100% * height: 60px
export const HeaderPart = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
`;  

// 로고 컨테이너
// 230px * 50px
export const LogoContainer = styled.div`
  width: 15em;
  height: 3em; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 13px;

  /*background-color: #8ebf95;*/
`;

// 로고 백그라운드
// 40px * 40px
export const LogoBackground = styled.div`
  width: 50px;
  height: 45px;

  /*background-color: #fcccd4;*/
`;

// 로고 이미지 (향후 변경)
// 40px * 40px
export const LogoImg = styled.img`
  width: 50px;
  height: 45px;
`;

// 타이틀 텍스트 박스
// 180px * 40px
export const WebTitle = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  margin: 0 0 0 5px;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Jalnan';
  
  /*background-color: #fb9da7;*/
`;

// 메뉴 컨테이너
// 220px * 40px
export const MenuContainerBox = styled.div`
  width: 14em;
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px 0 0;

  /*background-color: #917b56;*/
`;

// 아이콘(1개) 컨테이너
// 130px * 40px
export const IconContainer = styled.div`
  width: 12em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  /*background-color: #fb9da7;*/
`;

// 아이콘(1개) 백그라운드
// 40px * 40px
export const IconBackground = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #fcccd4;*/
`;

// 포스트 페이지 아이콘 이미지
// 20px * 20px
export const PostImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// 저장 페이지 아이콘 이미지
// 20px * 20px
export const SaveImg = styled.img`
width: 18px;
height: 20px;
cursor: pointer;
`;

// 계정 페이지 아이콘 이미지
// 20px * 20px
export const AccountImg = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

// 로그인 백그라운드
// 100px * 30px
export const LoginManageBackground = styled.div`
  width: 8em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #c3e2dd;*/
`;

// 로그인 버튼
// 80px * 25px
export const LoginBtn = styled.button`
  width: 6em;
  height: 2em;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: #f3c208;
`;

// 로그인 버튼 타이틀
export const LoginBtnTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;

  font-family: 'NotoSansKR';
`;

// 헤더 하단 스타일 라인
// 100% * 20px
export const HeaderStyleLine = styled.div`
  width: 100%;
  height: 1.2em;

  background-color: #f3c208;
`;