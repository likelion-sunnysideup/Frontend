import React from 'react';
import { 
  PostPart,
  PostContainer,
  PostHeaderContainer,
  PostHeaderBackground,
  PostHeaderText,
  PostBtn,
  PostBodyContainer,
  PhotoContainer,
  UploadBox,
  UploadIconBox,                      
  UploadIcon,
  UploadText,
  UploadBtnBox,
  UploadLabel,
  UploadBtn,
  PreviewBox,
  PreviewHeader,
  PreviewHeaderText,
  InputsContainer,
  InputsBackground,
  InputsTitleBox,
  InputsTitle,
  InputsBox,
  InputContents,
} from './Post';
import Advertisement from './../../components/Advertisement/Advertisement.jsx';

import photoImg from '../../styles/assets/photoIcon.png'

function Post(props) {
  return (
    <>
      <PostPart>
        <Advertisement />
        <PostContainer>
          <PostHeaderContainer>
            <PostHeaderBackground>
              <PostHeaderText>새 게시물 작성하기</PostHeaderText>
            </PostHeaderBackground>
            <PostBtn>게시하기</PostBtn> 
          </PostHeaderContainer>
          <PostBodyContainer>
            <PhotoContainer>
              <UploadBox>
                <UploadIconBox>
                  <UploadIcon src={photoImg}></UploadIcon>
                </UploadIconBox>
                <UploadText>사진을 업로드하세요!</UploadText>
                <UploadBtnBox>
                  <UploadLabel htmlFor={'upload'}>내 컴퓨터에서 선택</UploadLabel>
                  <UploadBtn 
                    type='file'
                    accept='image/*'
                    id='upload'
                  />
                </UploadBtnBox>
              </UploadBox>
              <PreviewBox>
                <PreviewHeader>
                  <PreviewHeaderText>사진 미리보기</PreviewHeaderText>
                </PreviewHeader>
              </PreviewBox>
            </PhotoContainer>
            <InputsContainer>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>Title</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>위치</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>시간</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>              

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>상의</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>하의</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>신발</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>Tips</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents></InputContents>
                </InputsBox>
              </InputsBackground>

            </InputsContainer>
          </PostBodyContainer>
        </PostContainer>
      </PostPart>
    </>
  );
}

export default Post;