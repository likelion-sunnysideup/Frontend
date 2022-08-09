import styled from 'styled-components';

/** Cloth.jsx: 옷 전체 리스트 컨테이너 */
// 옷 컨테이너
export const ClothesContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  /*background-color: #8ec0e4;*/
`;

// 옷(1개) 백그라운드
export const ClothBackground = styled.div`
  width: 10em;
  height: 15em;
  margin: 2%;
  position: relative;
  
  /*background-color: #263959;*/
`;

// 옷(1개) 이미지
export const ClothImg = styled.img`
  width: 10em;
  height: 10em; 

  cursor: pointer;
`;

// 옷(1개) 정보
export const ClothInfo = styled.div`
  display: flex;
  justify-content: center;

  font-size: 15px;
`;

// 저장 버튼 박스
export const SaveBtnBox = styled.div`
  width: 25%;
  height: 10%;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 12px;
  cursor: pointer;
`;

// 저장 버튼 이미지 
export const SaveBtnImg = styled.img`
  width: 1.2em;
  height: 1.5em;
  margin: 10% 10% 0 0;
  
  cursor: pointer;
`;
