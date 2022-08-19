import React from 'react';
import { 
  SavePart,
  SaveContainer,
  SaveListBox,
} from './Save';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';
import Cloth from './../../components/Cloth/Cloth.jsx';
import ScrollHorizontal from 'react-scroll-horizontal';

const saveList = [
  { 
    id: 0,
    title: '#맑은 날',
  },
  { 
    id: 1,
    title: '#비오는 날',
  },
  { 
    id: 2,
    title: '#일교차 심한 날',
  },
  { 
    id: 3,
    title: '#구름 많은 날',
  },
  { 
    id: 4,
    title: '#기분 안 좋은 날',
  },
  { 
    id: 5,
    title: '#기분 좋은 날',
  },
  { 
    id: 6,
    title: '#너무너무 흐린 날',
  },
]

function Save(props) {
  return (
    <>
      <SavePart>
        <Advertisement />
          <SaveContainer>
            <ScrollHorizontal>
              {saveList.map((e) => (
                <SaveListBox key={e.id}>                
                  {e.title}
                </SaveListBox>
              ))}
            </ScrollHorizontal>
          </SaveContainer>    
          <Cloth />
      </SavePart>
    </>
  );
}

export default Save;