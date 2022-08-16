import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ClothesContainer,
  ClothBackground,
  ClothImg,
  ClothInfo,
  SaveBtnBox,
  SaveBtnImg,
} from './Cloth';

import Filter from '../Filter/Filter.jsx';

import clothImg from '../../styles/assets/bonobono.jpg';
import Loading from '../../components/Loading/Loading.jsx';

import emptyBtn from '../../styles/assets/emptyBtn.png';
import fullBtn from '../../styles/assets/fullBtn.png';

// mock-data
const clothList = [
  {
    id: 0,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  }, 
  {
    id: 1,
    temperature: '🌥 온도차 없는 날',
    top: '상의: 나시',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 2,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 3,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 4,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 5,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  }, 
  {
    id: 6,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 7,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 8,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
  {
    id: 9,
    temperature: '🌥 온도차 심한날',
    top: '상의: 나시 + 가디건',
    bottom: '하의: 핀턴 롱팬츠',
  },
]

function Cloth() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [save, setSave] = useState();
  const onSave = (btnID) => {
    setSave(!save);
    console.log(btnID);
  };

  const goShowPost = () => {
    navigate('/cloth/:id');
  };

  return (
    <>
      <Filter/>
      <ClothesContainer>
        {clothList.map((e) => (
          <ClothBackground key={e?.id}>
            <ClothImg 
              src={clothImg}
              onClick={goShowPost}
            />
            <SaveBtnBox
              key={e?.id}
              active={save === e?.id}
              onClick={() => onSave(e?.id)}
            >
            <SaveBtnImg src={emptyBtn}/>
            </SaveBtnBox>
            <ClothInfo>
              {e?.temperature}
              <br/>
              {e?.top}
              <br/>
              {e?.bottom}
            </ClothInfo>
          </ClothBackground>
        ))}
      </ClothesContainer>
    </>
  );
}

export default Cloth;