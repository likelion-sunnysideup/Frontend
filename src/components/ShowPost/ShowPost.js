import styled from 'styled-components';

/** ShowPost.jsx: Post.jsx >> 코디 상세 정보 보여주는 페이지 (상세페이지) */
// ShowPost 전체 화면
export const ShowPostPart = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2%; 

  /*background-color: #d4dfe6;*/
`;

// 쇼 컨테이너
export const ShowContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 2% 0 0 0;
  display: flex;
  flex-direction: column;
  
  /*background-color: #FFEEE4;*/
`;

// 헤더 영역
export const ShowHeaderBackground = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /*background-color: red;*/
`;

// 유저 이미지 + 이름 박스
export const UserBox = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: white;*/
`;

// 유저 이미지
export const UserImage = styled.img`
  width: 5vmin;
  height: 5vmin;
`;

// 유저 네임
export const UserName = styled.div`
  width: 53%;
  height: 80%;
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: blue;*/
`;

// 저장 이미지 + 저장 카운트 박스
export const SaveBox = styled.div`
  width: 10%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /*background-color: blue;*/
`;

// 저장 이미지
export const SaveImage = styled.img`
  width: 3vmin;
  height: 4vmin;
`;

// 저장 카운트
export const SaveCount = styled.div`
width: 50%;
height: 80%;
display: flex;
font-size: 1.2em;
font-weight: bold;
align-items: center;
@media (max-width: 900px) {
  font-size: 0.4em;
}
`;

// 포스팅 보여지는 영역
export const ShowBodyBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  /*background-color: skyblue;*/
`;


// 좌측(이미지, 버튼) 요소 컨테이너
export const ImgBtnContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /*background-color: gray;*/
`;

// 포스팅 이미지 박스
export const PostingImageBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /*background-color: navy;*/
`;

// "목록으로" 버튼 박스 
export const BackButtonBox = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;

  /*background-color: orange;*/
`;

// "목록으로" 버튼
export const BackButton = styled.button`
  width: 18%;
  height: 65%;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  margin: 0 0 0 9%;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  background-color: #F3C20B;
`;

// 포스팅 이미지
export const PostingImage = styled.img`
  width: 70vmin;
  height: 70vmin;
  @media (min-width: 500px) {
    width: 80%;
    height: 80%;
  }
`;

// 포스팅 텍스트 박스
export const PostingTextBox = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /*background-color: pink;*/
`;

// 제목
export const ShowTitleBox = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.6em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: red;*/
`;


export const ShowClothInfoBox = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /*background-color: green;*/
`;

export const ClothTitle = styled.div`
  width: 90%;
  height: 40%;
  font-size: 1.2em;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: yellow;*/
`;

export const ClothContents = styled.div`
  width: 90%;
  height: 30%;
  font-size: 1em;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: white;*/
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 10%;

  /*background-color: purple;*/
`;