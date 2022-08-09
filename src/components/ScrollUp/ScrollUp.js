import styled from 'styled-components';

/** ScrollUp.jsx: 스크롤 기능 */
// 스크롤 업 컨테이너
export const ScrollUpContainer = styled.div`
  width: 6%;
  height: 6%;
  position: fixed;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  /*background-color: black;*/
`;

// 스크롤 업 버튼 이미지
export const ScrollUpBtnImg = styled.img`
  width: 2.5em;
  height: 2.5em;
  cursor: pointer;
`;