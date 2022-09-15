import React from "react";
import {Routes,Route} from "react-router-dom"
import FlexBoxLayout from "../pages/Layouts/FlexBox";
import HomePage from "../pages/home";
import Login from "../pages/session/Login";

function App() {
  return (
<Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='login' element={<Login/>}/>
    {/*<Route path="*" element={<NotFound/>}/>*/}
  <Route path='flex-layout' element={<FlexBoxLayout/>}/>
</Routes>
  );
}

export default App;
