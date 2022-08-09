import styled from 'styled-components';

/** Basic setting */
export const GlobalPart = styled.section`
  margin: 0px auto;
  width: 100%;
  height: 100vh;

  min-height: 100%;
  background-color: #ffffff;
  @media screen (max-width: 1024px) {
    width: 100%;
  }
`;

export const CenterPart = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
  font-family: 'NotoSansKR';

  flex: 1;
`;

export const BarPart = styled.div`
  width: 10px;
  height: 90vh;

  border-radius: 0 0 4px 4px;
  background-color: #f3b85e;
`;

/*   
position: relative;
padding-bottom: 100%;
*/