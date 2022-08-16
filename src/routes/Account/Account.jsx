import React from 'react';
import { 
  AccountPart,
  AccountContainer,
  AccountListBox,
} from './Account';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';
import Cloth from './../../components/Cloth/Cloth.jsx';
import ScrollHorizontal from 'react-scroll-horizontal';
import Week from '../Week/Week.jsx';

const accountList = [
  { 
    id: 0,
    contents: '🤍'
  },
  { 
    id: 1,
    contents: '🧡'
  },
  { 
    id: 2,
    contents: '💛'
  },
  { 
    id: 3,
    contents: '💚'
  },
  { 
    id: 4,
    contents: '💙'
  },
  { 
    id: 5,
    contents: '💜'
  },
  { 
    id: 6,
    contents: '🖤'
  },
]

function Account(props) {
  return (
    <>
      <AccountPart>
        <Advertisement />
        <AccountContainer>
          <ScrollHorizontal>
            {accountList.map((e) => (
              <AccountListBox key={e.id}>
                {e.contents}
              </AccountListBox>
            ))}
          </ScrollHorizontal>
        </AccountContainer>
        <Cloth />
      </AccountPart>
    </>
  );
}

export default Account;