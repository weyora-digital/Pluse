import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication'


import * as React from "react";
import SignUp from './Components/Authentication/SignUp';
// import { Route, Routes } from "react-router-dom";


// import { Callback } from "./Components/Auth/callback";
// import { Logout } from "./Components/Auth/logout";
// import { LogoutCallback } from "./Components/Auth/logoutCallback";
// import { PrivateRoute } from "./Routes/privateRoute";
// import { Register } from "./Components/Auth/register";
// import { SilentRenew } from "./Components/Auth/silentRenew";
// import {PublicPage} from "./Components/publicpage"
// import {PrivatePage} from "./Components/privatepage"

// import React, {Component} from "react";
// import { AuthProvider } from "./Providers/authProvider";
// import { BrowserRouter as Router } from "react-router-dom";
// import {AppRoutes} from "./Routes/routes";


// export const AppRoutes = () => (
//     <Routes> {/* Switch is replaced by Routes */}
//         <Route path="/signin-oidc" element={<Callback />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/logout/callback" element={<LogoutCallback />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/silentrenew" element={<SilentRenew />} />
//         <Route path="/dashboard" element={<PrivateRoute component={PrivatePage} />} />
//         <Route path="/" element={<PublicPage />} />
//     </Routes>
// );

// function App() {
//   return (
//     <div className="">
//       <Routes>
//         <Route path="/signin-oidc" element={<Callback />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/logout/callback" element={<LogoutCallback />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/silentrenew" element={<SilentRenew />} />
//         <Route path="/dashboard" element={<PrivateRoute component={PrivatePage} />} />
//         <Route path="/" element={<PublicPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



// function App() {
//     return (
//       <Router>
//         <div className="App">
//           {/* Here we include AppRoutes which contains all your route definitions */}
//           <AppRoutes />
//         </div>
//       </Router>
//     );
//   }
  
//   export default App;

function App(){
  return (
    <div>
      <Routes>
        <Route path='/*' element={true?<HomePage />:<Authentication/>}>
        
        </Route>
        <Route path='/login' element={<Authentication/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  )
}

export default App;