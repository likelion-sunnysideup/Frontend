import React, { useState } from 'react';
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
  LocationImage,
  InfoText,
  PlusMinusImage,
  TimeSelectBox,
  OutSelectBox,
  InSelectBox,
  TimeText,
  CustomReactDatePicker,
  OutTimeSelect,
  InTimeSelect,
  PreviewImgContainer,
  PreviewImgBox,
  PreviewImg,
  ImgDelete,
} from './Post';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';
import 'react-datepicker/dist/react-datepicker.css';

import Advertisement from './../../components/Advertisement/Advertisement.jsx';

import photoImg from '../../styles/assets/photoIcon.png'
import locationImg from '../../styles/assets/location.png';
import deleteImg from '../../styles/assets/delete.png';
import plusImg from '../../styles/assets/plus.png';
import minusImg from '../../styles/assets/minus.png';

function Post(props) {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [inputs, setInputs] = useState({
    title: '',
    top: '',
    pants: '',
    shoes: '',
    tips: '',
  });

  const { title, top, pants, shoes, tips } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [showImages, setShowImages] = useState([]);

  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++){
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 3){
      imageLists = imageLists.slice(0, 3);
    }
    setShowImages(imageUrlLists);
  };
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  }

  const [address, setAddress] = useState();
  const geolocation = useGeolocation();
  const longitude = geolocation.longitude;
  const latitude = geolocation.latitude;
  const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  const getLocation = async() => {
    await axios
    .get( `https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&x=${longitude}&y=${latitude}`,
    { 
      headers: { Authorization: `KakaoAK ${API_KEY}`, },
    },
    )
    .then((response) => {
      console.log(response.data.documents[0]);
      setAddress(response.data.documents[0].address.address_name)
    })
    .catch((error) => {
      console.log("====================getLocation======================")
      console.log(error);
    })
  };

{/** 통신
  const onSubmit = () => {
      axios
      .post(`{{base_url}}/posts/`,{
        title: inputs.title,
        start_time: startTime,
        end_time: endTime,  
        top: inputs.tops,
        pants: inputs.pants,
        shoes: inputs.shoes,
        tips: inputs.tips,
      })
      .then((res) => {
        navigate('../')
      })
      .catch((error) => {
        console.log('=============postError============')
        console.log(error);
      })
    }
  };
*/}

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
                    multiple
                    accept='image/*'
                    id='upload'
                    onChange={handleAddImages}
                  />
                </UploadBtnBox>
              </UploadBox>
              <PreviewBox>
                <PreviewHeader>
                  <PreviewHeaderText>사진 미리보기</PreviewHeaderText>
                </PreviewHeader>
                
                <PreviewImgContainer>
                  {showImages.map((image, id) => (
                    <PreviewImgBox key={id}>
                      <ImgDelete src={deleteImg} onClick={() => handleDeleteImage(id)}></ImgDelete>
                      <PreviewImg src={image} alt={`${image}-${id}`}/>
                    </PreviewImgBox>
                  ))}
                </PreviewImgContainer>
              </PreviewBox>
            </PhotoContainer>
            <InputsContainer>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>제목</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents                  
                    name="title"
                    value={title}
                    onChange={onChange}
                  />
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>위치</InputsTitle>
                  <LocationImage src={locationImg} onClick={getLocation}></LocationImage>
                  <InfoText>현재위치</InfoText>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents placeholder={address}></InputContents>
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>⏰ 시간</InputsTitle>
                </InputsTitleBox>
                <TimeSelectBox>
                  <OutSelectBox>
                    <TimeText>외출 시작 시간</TimeText>
                    <OutTimeSelect>
                      <CustomReactDatePicker
                        selected={startTime}
                        onChange={(time) => setStartTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60}
                        timeCaption='Time'
                        dateFormat='aa h:mm'
                        placeholderText='선택'
                      />
                    </OutTimeSelect>
                  </OutSelectBox>
                  <InSelectBox>
                    <TimeText>외출 끝 시간</TimeText>
                    <InTimeSelect>
                      <CustomReactDatePicker
                        selected={endTime}
                        onChange={(time) => setEndTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60}
                        timeCaption='Time'
                        dateFormat='aa h:mm'
                        placeholderText='선택'
                      />
                    </InTimeSelect>
                  </InSelectBox>
                </TimeSelectBox>
              </InputsBackground>              

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>👕 상의</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents
                    name="top"
                    value={top}
                    onChange={onChange}
                  />
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>👖 하의</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents
                    name="pants"
                    value={pants}
                    onChange={onChange}
                  />
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>👟 신발</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents
                    name="shoes"
                    value={shoes}
                    onChange={onChange}
                  />
                </InputsBox>
              </InputsBackground>

              <InputsBackground>
                <InputsTitleBox>
                  <InputsTitle>✔ Tips</InputsTitle>
                </InputsTitleBox>
                <InputsBox>
                  <InputContents
                    name="tips"
                    value={tips}
                    onChange={onChange}
                  />
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