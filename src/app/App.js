import React from "react";
import {Routes,Route} from "react-router-dom"
import FlexBoxLayout from "../pages/Layouts/FlexBox";
import HomePage from "../pages/home";
import Login from "../pages/session/Login";
import GridLayout from "../pages/Layouts/Grid";

function App() {
  return (
<Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='login' element={<Login/>}/>
    {/*<Route path="*" element={<NotFound/>}/>*/}
  <Route path='flex-layout' element={<FlexBoxLayout/>}/>
  <Route path='grid-layout' element={<GridLayout/>}/>
</Routes>
  );
}

export default App;
