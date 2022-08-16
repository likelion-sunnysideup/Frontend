import React from 'react';
import { 
  AdContainer, 
  AdBackground,
  AdText,
  AdImg
} from './Advertisement';
import BMIcon from '../../styles/assets/BMIcon.png';

function Advertisement(props) {
  return (
    <AdContainer>
      <AdBackground>
        <AdText>오늘 먹을 칰을 내일로 미루지 말자</AdText>
        <AdImg src={BMIcon}/>
      </AdBackground>
    </AdContainer>
  );
}

export default Advertisement;