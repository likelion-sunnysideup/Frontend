import React from 'react';
import { 
  AdContainer, 
  AdBackground 
} from './Advertisement';

function Advertisement({ AD }) {
  return (
    <AdContainer>
      <AdBackground>{AD}</AdBackground>
    </AdContainer>
  );
}

export default Advertisement;