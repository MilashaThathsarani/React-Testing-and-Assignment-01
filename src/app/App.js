import React from "react";
import {Routes,Route} from "react-router-dom"
import HomePage from "../pages/home";
import Login from "../pages/session/Login";

function App() {
  return (
<Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route path='login' element={<Login/>}/>
    {/*<Route path="*" element={<NotFound/>}/>*/}
</Routes>
  );
}

export default App;
