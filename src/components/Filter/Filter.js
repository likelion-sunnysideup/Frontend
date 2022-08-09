import styled from 'styled-components';

/** Filter.jsx: 드롭다운 + 필터링 기능 */
// 필터 컨테이너
export const FilterContainer = styled.div` 
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1% 0 1% 0;

  /*background-color: #8ec0e4;*/
`;

// 필터 백그라운드
export const FilterBackground = styled.div`
  width: 41%;
  height: 95%;
  margin: 3%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: #c9c9c9;*/
`;

export const FilterSelect = styled.select`
  width: 95%;
  height: 60%;
  border-radius: 10px;
  border: 2px solid #d9d9d9;
  margin: 0 2% 0 2%;
  outline: none;
  cursor: pointer;
`;
