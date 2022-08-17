import styled from 'styled-components';

/** Advertisement.jsx: 광고 컨테이너 */
// 광고 컨테이너
export const AdContainer = styled.div`
  width: 100%;
  height: 19%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: skyblue;*/
`;

// 광고 백그라운드
export const AdBackground = styled.div`
  width: 93%;
  height: 97%;
  border-radius: 10px;
  border: 4px solid #2ac1bc;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: #ffffff;
`;

export const AdText = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.7em;
  font-family: 'BMHannaPro';
  @media (max-width: 1200px) {
    font-size: 2.3em;
  }
  /*background-color: orange;*/
`;

export const AdImg = styled.img`
  width: 80px;
  height: 80px;

  /*background-color: #c0c0c0;*/
`;