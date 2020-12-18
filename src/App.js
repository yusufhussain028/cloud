import React from 'react';
import MediaCard from './allUser.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import UserInfo from './userInfo.jsx';
import Dropdwn from './dropdwn.jsx';

function App() {
  return (
    <>
    <MediaCard/>
    <BrowserRouter>
    <Route exact path='/' component={MediaCard}/>
    <Route path='/userInfo' component={UserInfo}/>
    </BrowserRouter>
    </>
  );
}

export default App;
