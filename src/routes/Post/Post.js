import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';

/** Post.jsx: 포스팅 페이지*/
// "포스트 페이지" 전체 화면
export const PostPart = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2%;
  
  /*background-color: #f1bbba;*/
`;

// 포스트 컨테이너
export const PostContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 2% 0 0 0;
  
  /*background-color: #FFEEE4;*/
`;

// 포스트 헤더 컨테이너
export const PostHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /*background-color: #a79c8e;*/
`;

//  포스트 헤더 백그라운드
export const PostHeaderBackground = styled.div`
  width: 85%;
  height: 45%;

  background-color: #f3c20b;
`;

// 헤더 텍스트
export const PostHeaderText = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 2%;
  font-weight: bold;
  font-size: 0.9em;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: #ffffff;*/
`;

// 헤더 버튼
export const PostBtn = styled.button`
  width: 9%;
  height: 45%;
  border: none;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  background-color: #f3c20b;
  transition: all 0.7s;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
  transition: all 0.7s;
  :hover {
    color: #ffffff;
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
  }
`;

// 포스트 바디 컨테이너
export const PostBodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  /*background-color: #274c5e;*/
`;

// 포토 컨테이너
export const PhotoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /*background-color: #7f9eb2;*/
`;

// 사진 업로드 영역
export const UploadBox = styled.div`
  width: 78%;
  height: 70%;
  border: 2px solid #c9c9c9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5%;

  background-color: #ffffff;
`;

// 업로드 아이콘 박스
export const UploadIconBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /*background-color: blue;*/
`;

// 업로드 아이콘
export const UploadIcon = styled.img`
  width: 10vmin;
  height: 10vmin;

  /*background-color: orange;*/
`;

// 업로드 문구
export const UploadText = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  font-size: 1.1em;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: green;*/
`;

// 업로드 버튼 박스
export const UploadBtnBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /*background-color: yellow;*/
`;

// 업로드 버튼 디자인
export const UploadLabel = styled.label`
  width: 28%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9em;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  background-color: #0095f6;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
  transition: all 0.2s linear;
  &:hover {
    opacity: 0.4;
  }
`;

// 업로드 버튼
export const UploadBtn = styled.input`
  width: 30%;
  height: 30%;
  display: none;

  background-color: blue;
`;

// 사진 미리보기 영역
export const PreviewBox = styled.div`
  width: 80%;
  height: 40%;
  margin: 0 0 0 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  /*background-color: #9055A2;*/
`;

// 사진 미리보기 헤더
export const PreviewHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;

  /*background-color: #D499B9;*/
`;

// "사진 미리보기" 텍스트
 export const PreviewHeaderText = styled.div`
  width: 40%;
  height: 80%;
  font-size: 0.9em;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 0 0 2%;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: #ffffff;*/
 `;

// 사진 미리보기 컨테이너
export const PreviewImgContainer = styled.div`
  width: 90%;
  height: 40vmin;
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 10px;
  border: 2px dashed #d9d9d9;
  /*background-color: navy;*/
`;

// 사진 미리보기 박스
export const PreviewImgBox = styled.div`
  width: 8em;
  height: 8em;
  margin: 4%;
  position: relative;

  background-color: #d9d9d9;
`;

// 사진 이미지
export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
`

// 사진 삭제
export const ImgDelete = styled.img`
  width: 0.7em;
  height: 0.7em;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;

  /*background-color: #d9d9d9;*/
`;

// 글쓰기 컨테이너
export const InputsContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;

  /*background-color: #dae9f4;*/
`;

// "Inputs" > 전체 백그라운드
export const InputsBackground = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /*background-color: red;*/
`;

// "Input" 제목 영역
export const InputsTitleBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;

  /*background-color: red;*/
`;

// "Input" 제목 텍스트
export const InputsTitle = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  @media (max-width: 900px) {
    font-size: 0.6em;
  }

  /*background-color: skyblue;*/
`;

// "Input" 내용 영역
export const InputsBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;

  /*background-color: skyblue;*/
`;

// "Input" 컨텐츠 입력
export const InputContents = styled.input`
  width: 100%;
  height: 50%;
  padding: 1%;
  border: none;
  outline: none;
  border-radius: 6px;
  border: 2px solid #c9c9c9;
  background-color: white;
`;

// 위치 아이콘
export const LocationImage = styled.img`
  width: 16px;
  height: 20px;
  cursor: pointer;
  :& hover {
    opacity: 0.4;
  }
`;

// 위치 아이콘 텍스트
export const InfoText = styled.div`
  width: 25%;
  height: 95%;
  display: flex;
  font-size: 0.9em;
  align-items: center;
  color: #d9d9d9;
  margin: 0 0 0 2%;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }

  /*background-color: green;*/
`;

export const PlusMinusImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 3% 0 0;
  cursor: pointer;
`;

export const TimeSelectBox = styled.div`
  width: 95%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 3% 0 0 0;
  /*background-color: red;*/
`;

export const OutSelectBox = styled.div`
  width: 95%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  align-items: center;

  /*background-color: blue;*/
`;

export const InSelectBox = styled.div`
  width: 95%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  align-items: center;

  /*background-color: green;*/
`;

// 시간 선택 
export const CustomReactDatePicker = styled(ReactDatePicker)`
  width: 84%;
  height: 1.8em;
  border: 1px solid #d9d9d9;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.7em;
  icon: black;
`;

export const TimeText = styled.div`
  width: 32%;
  height: 80%;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
  /*background-color: skyblue;*/
`;

export const OutTimeSelect = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: yellow;*/
`;

export const InTimeSelect = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: yellow;*/
`;