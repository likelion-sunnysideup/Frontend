import React from 'react';
import { 
  ShowPostPart,
  ShowContainer,
  ShowHeaderBackground,
  UserBox,
  UserImage,
  UserName,
  SaveBox,
  SaveImage,
  SaveCount,
  ShowBodyBackground,
  ImgBtnContainer,
  PostingImageBox,
  BackButtonBox,
  BackButton,
  PostingImage,
  PostingTextBox,
  ShowTitleBox,
  ShowClothInfoBox,
  ClothTitle,
  ClothContents,
} from './ShowPost';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';

import clothImg from '../../styles/assets/bonobono.jpg'

import userImg from '../../styles/assets/userIcon.png'
import saveImg from '../../styles/assets/blackSave.png'
import { useNavigate, useParams } from 'react-router-dom';

function ShowPost(props) {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  return (
    <>
      <ShowPostPart>
        <Advertisement />
        <ShowContainer>
          <ShowHeaderBackground>
            <UserBox>
              <UserImage src={userImg} />
              <UserName>멋사 10기</UserName>
            </UserBox>

            <SaveBox>
              <SaveImage src={saveImg} />
              <SaveCount>12</SaveCount>
            </SaveBox>
          </ShowHeaderBackground>
          
          <ShowBodyBackground>
          
            <ImgBtnContainer>
              <PostingImageBox>
                <PostingImage src={clothImg} />
              </PostingImageBox>
              <BackButtonBox>
                  <BackButton onClick={() => {navigate(-1)}}>목록으로</BackButton>
              </BackButtonBox>
            </ImgBtnContainer>
            
            <PostingTextBox>
              <ShowTitleBox>낮엔 30도 이상 덥고, 일교차가 큰 날</ShowTitleBox>

              <ShowClothInfoBox>
                <ClothTitle>👕 상의</ClothTitle>
                <ClothContents>크롭 나시</ClothContents>
              </ShowClothInfoBox>

              <ShowClothInfoBox>
                <ClothTitle>👖 하의</ClothTitle>
                <ClothContents>린넨 핀턱 롱팬츠</ClothContents>
              </ShowClothInfoBox>

              <ShowClothInfoBox>
                <ClothTitle>👟 신발</ClothTitle>
                <ClothContents>플립플랍 or 샌들</ClothContents>
              </ShowClothInfoBox>

              <ShowClothInfoBox>
                <ClothTitle>Tips</ClothTitle>
                <ClothContents>
                  낮에는 나시만 입고, 저녁엔 가디건 걸치기
                  <br/>
                  무채색 톤온톤 코디로 시크하게
                </ClothContents>
              </ShowClothInfoBox>

            </PostingTextBox>

          </ShowBodyBackground>
        </ShowContainer>        
      </ShowPostPart>
    </>
  );
}

export default ShowPost;