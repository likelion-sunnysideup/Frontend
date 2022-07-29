import styled from 'styled-components';

/** Basic setting */
export const GlobalPart = styled.div`
  margin: 0px auto;
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  @media screen (max-width: 1024px) {
    width: 100%;
  }
`;

export const CenterPart = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`;

export const BarPart = styled.div`
  width: 10px;
  height: 90vh;

  border-radius: 0 0 4px 4px;
  background-color: #f3b85e;
`;