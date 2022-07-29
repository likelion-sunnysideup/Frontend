import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalPart, CenterPart, BarPart } from './styles/css/styledComponents';
import Header from './components/Header/Header.jsx';
import Main from './routes/Main/Main.jsx';
import Post from './routes/Post/Post.jsx';
import Save from './routes/Save/Save.jsx';
import Account from './routes/Account/Account.jsx';
import Week from './routes/Week/Week.jsx'
//import Footer from './components/Footer/Footer.jsx';

function App(props) {
  return (
    <>
      <GlobalPart>
        <Header/>
        <CenterPart>
          <Week/> 
          <BarPart/>     
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/save" element={<Save />}></Route>
            <Route path="/account" element={<Account />}></Route>
          </Routes>
        </CenterPart>
      </GlobalPart>
    </>
  );
}

export default App;