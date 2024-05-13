
// import * as React from "react";
// import { Route, Routes } from "react-router-dom";


// import { Callback } from "../Components/Auth/callback";
// import { Logout } from "../Components/Auth/logout";
// import { LogoutCallback } from "../Components/Auth/logoutCallback";
// import { PrivateRoute } from "./privateRoute";
// import { Register } from "../Components/Auth/register";
// import { SilentRenew } from "../Components/Auth/silentRenew";
// import {PublicPage} from "../Components/publicpage"
// import {PrivatePage} from "../Components/privatepage"


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