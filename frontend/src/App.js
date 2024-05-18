import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication'
import {AuthorizeUser} from './middleware/auth';

import * as React from "react";
import SignUp from './Components/Authentication/SignUp';
import SignIn from './Components/Authentication/SignIn'

function App(){

  return (
    <div>
      <Routes>
        <Route path='/*' element={<AuthorizeUser><HomePage/></AuthorizeUser>}/>
        {/* <Route path='/*' element={isAuthenticate?<HomePage />:<SignIn/>} /> */}
        {/* <Route path='/login' element={<Authentication/>}></Route> */}
        <Route path='/login' element={<SignIn/>}></Route>
      </Routes>
    </div>
  )
}

export default App;