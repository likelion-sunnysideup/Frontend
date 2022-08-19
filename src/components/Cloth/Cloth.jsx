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
import axios from 'axios';

import emptyBtn from '../../styles/assets/emptyBtn.png';

function Cloth({ whether }) {
  const getByWhetherUrl = "https://port-0-backend-5faq24l6klj7k3.gksl1.cloudtype.app/posts/by-whether";
  const getClothPosts = async() => {
    try {
      let response = await axios
      .get(
        `${getByWhetherUrl}?temp-avg=${whether.taAvg}&precipitation=${whether.precipitationMax}`,
        {
          headers: { AccessToken : "f21bf0f6-3b40-4c9f-8850-88de1507a487", },

          withCredentials: false,
        },
      );
      console.log(response.data[0].img_url);
      setClothList(response.data);
    } catch(error) {
      console.log("=====================================ERROR=================================");
      console.log(error);
    }
  };

  const { id } = useParams();

  const navigate = useNavigate();
  const [clothList, setClothList] = useState([]);
  const [save, setSave] = useState();


  const onSave = () => {
    setSave(!save);
  };

  const goShowPost = () => {
    navigate('/cloth/:id');
  };

  useEffect(() => {
    getClothPosts();
  }, [whether]);
  
  return (
    <>
      <ClothesContainer>
        {clothList.map((cloth) => (
          <ClothBackground key={cloth?.id}>
            <ClothImg 
              crossorigin="anonymous"
              decoding="auto"
              src={cloth.img_url}
              onClick={goShowPost}
            />
            <SaveBtnBox
              key={cloth?.id}
              active={save === cloth?.id}
              onClick={() => onSave(cloth?.id)}
            >
            <SaveBtnImg src={emptyBtn}/>
            </SaveBtnBox>
            <ClothInfo>
              {cloth?.title}
              <br/>
              상의 : {cloth?.top.map((e) => (
                e
              ))}
              <br/>
              하의 : {cloth?.pants}
            </ClothInfo>
          </ClothBackground>
        ))}
      </ClothesContainer>
    </>
  );
}

export default Cloth;