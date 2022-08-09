import styled from 'styled-components';

/** Account.jsx: 개인 계정 페이지 */
// 계정 페이지 전체화면
export const AccountPart = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2%;
  
  /*background-color: #6eceda;*/
`;

// 게시물 컨테이너  
export const AccountContainer = styled.div`
  width: 100%;
  height: 38%;
  margin: 1% 0 0 0;

  /*background-color: #8ec0e4;*/
`;

export const AccountListBox = styled.div`
  display: grid;
  width: 17em;
  height: 13em;
  margin: 2%;
  align-items: center;
  text-align: center;
  background-color: #d9d9d9;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover{
    background-color: #F3B85E;
    color: white;
    transform: scale(1.1);
  }
`;