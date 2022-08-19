import axios from 'axios';
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


import clothImg from '../../styles/assets/bonobono.jpg';
import Loading from '../../components/Loading/Loading.jsx';

import emptyBtn from '../../styles/assets/emptyBtn.png';
import fullBtn from '../../styles/assets/fullBtn.png';

// mock-data
// const clothList = [
//   {
//     id: 0,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   }, 
//   {
//     id: 1,
//     temperature: '🌥 온도차 없는 날',
//     top: '상의: 나시',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 2,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 3,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 4,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 5,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   }, 
//   {
//     id: 6,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 7,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 8,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
//   {
//     id: 9,
//     temperature: '🌥 온도차 심한날',
//     top: '상의: 나시 + 가디건',
//     bottom: '하의: 핀턴 롱팬츠',
//   },
// ]

function Cloth({ whether }) {
  const getByWhetherUrl = "https://port-0-backend-5faq24l6klj7k3.gksl1.cloudtype.app/posts/by-whether";
  const getClothPosts = async() => {
    try {
      let response = await axios
      .get(
        `${getByWhetherUrl}?temp-avg=${whether.taAvg}&precipitation=${whether.precipitationMax}`,
        {
          headers: { AccessToken : "6b48eb3a-4eff-4294-b630-6dad4f9a7244", },

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


  const onSave = (btnID) => {
    setSave(!save);
    // console.log(btnID);
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
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/299402392_536768871582767_792273822812627732_n.jpg?stp=dst-jpg_e35&cb=2d435ae8-d7f9aae8&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=XkuIw86hv64AX_RNXP5&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwNTg0NTAxNzEzNjMyMTE4OA%3D%3D.2-ccb7-5&oh=00_AT_eRdM_bw_1-0LeerZwYM-6yJdLi0vyDravycKOX1-Pjw&oe=6306109C&_nc_sid=30a2ef"
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