import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeaderPart,
  LogoContainer,
  LogoBackground,
  LogoImg,
  WebTitle,
  MenuContainerBox,
  IconContainer,
  IconBackground,
  PostImg,
  SaveImg,
  AccountImg,
  LoginManageBackground,
  LoginBtn,
  LoginBtnTitle,
  HeaderStyleLine,
} from './Header';
import logoImage from '../../styles/assets/logo.jpg'
import postImage from '../../styles/assets/post.png';
import saveImage from '../../styles/assets/save.png';
import accountImage from '../../styles/assets/account.png';

function Header() { 
  const navigate = useNavigate();
  
  const goHome = () => {
    navigate('/')
  };

  const goPost = () => {
    navigate('/post');
  };

  const goSave = () => {
    navigate('/save');
  };

  const goAccount = () => {
    navigate('/account');    
  }
  
  return (
    <>
      <HeaderPart>
        <LogoContainer>
          <LogoBackground>
            <LogoImg src={logoImage}/>
          </LogoBackground>
          <WebTitle onClick={goHome}>SUNNY side UP!</WebTitle>
        </LogoContainer>

        <MenuContainerBox>
          <IconContainer>
            <IconBackground>
              <PostImg src={postImage} onClick={goPost}/>
            </IconBackground>

            <IconBackground>
              <SaveImg src={saveImage} onClick={goSave}/>
            </IconBackground>

            <IconBackground>
              <AccountImg src={accountImage} onClick={goAccount}/>
            </IconBackground>
          </IconContainer>
          
          <LoginManageBackground>
            <LoginBtn>
              <LoginBtnTitle>로그아웃</LoginBtnTitle>
            </LoginBtn>
          </LoginManageBackground>
        </MenuContainerBox>
      </HeaderPart>
      <HeaderStyleLine/>
    </>
  );
}

export default Header;