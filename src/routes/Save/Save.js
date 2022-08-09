import styled from 'styled-components';

/** Save.jsx: 옷 정보 세이브 페이지 */
// 세이브 페이지 전체화면
export const SavePart = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2%;
  
  /*background-color: #6eceda;*/
`;

// 저장 리스트 컨테이너 (부모)
export const SaveContainer = styled.div`
  width: 100%;
  height: 38%;
  margin: 1% 0 0 0;

  /*background-color: #8ec0e4;*/
`;

// 저장 리스트 요소
export const SaveListBox = styled.div`
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
