import styled from 'styled-components';

/** Header.jsx */
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

// 230px * 50px
export const LogoContainer = styled.div`
  width: 14em;
  height: 3em; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 13px;

  /*background-color: #8ebf95;*/
`;

// 40px * 40px
export const LogoBackground = styled.div`
  width: 40px;
  height: 40px;

  background-color: #fcccd4;
`;

// 40px * 40px
export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

// 180px * 40px
export const WebTitle = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  margin: 0 0 0 5px;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
  cursor: pointer;
  
  /*background-color: #fb9da7;*/
`;

// 220px * 40px
export const MenuContainerBox = styled.div`
  width: 12.5em;
  height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px 0 0;

  /*background-color: #917b56;*/
`;

// 130px * 40px
export const IconContainer = styled.div`
  width: 10em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  /*background-color: #fb9da7;*/
`;

// 40px * 40px
export const IconBackground = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #fcccd4;*/
`;

// 20px * 20px
export const PostImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// 20px * 20px
export const SaveImg = styled.img`
width: 18px;
height: 20px;
cursor: pointer;
`;

// 20px * 20px
export const AccountImg = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

// 100px * 30px
export const LoginManageBackground = styled.div`
  width: 8em;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #c3e2dd;*/
`;

// 80px * 25px
export const LoginBtn = styled.button`
  width: 6em;
  height: 1.8em;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: #f3c208;
`;

export const LoginBtnTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

// 100% * 20px
export const HeaderStyleLine = styled.div`
  width: 100%;
  height: 1.2em;

  background-color: #f3c208;
`;