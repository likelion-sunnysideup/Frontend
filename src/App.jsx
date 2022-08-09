import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalPart, CenterPart, BarPart } from './styles/css/styledComponents';
import Header from './routes/Header/Header.jsx';
import Main from './routes/Main/Main.jsx';
import Post from './routes/Post/Post.jsx';
import ShowPost from './components/ShowPost/ShowPost.jsx';
import Save from './routes/Save/Save.jsx';
import Account from './routes/Account/Account.jsx';
import Week from './routes/Week/Week.jsx';
import ScrollUp from './components/ScrollUp/ScrollUp.jsx';
//import Footer from './routes/Footer/Footer.jsx';


function App(props) {
  return (
    <>
      <GlobalPart>
        <Header/>
        <CenterPart>
          <Week/> 
          <BarPart/>     
          <Routes>
            <Route exact path="/" element={<Main />}></Route> {/** 메인 화면 */}
            <Route path="/post" element={<Post />}></Route> {/** 포스트 생성 로직 */}
            <Route path="/cloth/:id" element={<ShowPost />}></Route> {/** 포스트 하나의 데이터 */}
            <Route path="/save" element={<Save />}></Route> {/** (타계정) 포스트 (저장) 리스트 */}
            <Route path="/account" element={<Account />}></Route> {/** (나만의 것) 포스트 (저장) 리스트 */}
          </Routes>
          <ScrollUp />
          {/*<Footer/>*/}
        </CenterPart>
      </GlobalPart>
    </>
  );
}

export default App;