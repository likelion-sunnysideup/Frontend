import React, { useState } from 'react';
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
import logoImage from '../../styles/assets/logo.png';
import whitePostImg from '../../styles/assets/whitePost.png';
import whiteSaveImg from '../../styles/assets/whiteSave.png';
import whiteAccountImg from '../../styles/assets/whiteAccount.png';
import blackPostImg from '../../styles/assets/blackPost.png';
import blackSaveImg from '../../styles/assets/blackSave.png';
import blackAccountImg from '../../styles/assets/blackAccount.png';

function Header() { 
  const navigate = useNavigate();
  const [post, setPost] = useState(false);
  const [save, setSave] = useState(false);
  const [account, setAccount] = useState(false);
  
  const goHome = () => {
    navigate('/')
    setPost(false);
    setSave(false);
    setAccount(false);
  };

  const goPost = () => {
    navigate('/post');
    setPost(!post);
    setSave(false);
    setAccount(false);
  };

  const goSave = () => {
    navigate('/save');
    setPost(false);
    setSave(!save);
    setAccount(false);
  };

  const goAccount = () => {
    navigate('/account');
    setPost(false);
    setSave(false); 
    setAccount(!account);
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
            <IconBackground 
              onClick={goPost}>
              { post ? (
                <PostImg src={blackPostImg} />
              ) : (
                <PostImg src={whitePostImg} />
              )}  
            </IconBackground>

            <IconBackground 
              onClick={goSave}>
              { save ? (
                <SaveImg src={blackSaveImg} />
              ) : (
                <SaveImg src={whiteSaveImg} />
              )}
            </IconBackground>

            <IconBackground 
              onClick={goAccount}>
              { account ? (
                <AccountImg src={blackAccountImg}/>
              ) : (
                <AccountImg src={whiteAccountImg}/>
              )}
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