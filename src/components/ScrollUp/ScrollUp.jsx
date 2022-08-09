import React from 'react';
import { 
  ScrollUpContainer,
  ScrollUpBtnImg,
} from './ScrollUp';

import scrollUpImg from '../../styles/assets/scrollUp.png'

const handleScroll = (e) => {
  if(!window.scrollY) return;

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function ScrollUp(props) {
  return (
    <>
      <ScrollUpContainer>
          <ScrollUpBtnImg 
            src={scrollUpImg} 
            onClick={handleScroll}
          />
      </ScrollUpContainer>
    </>
  );
}

export default ScrollUp;