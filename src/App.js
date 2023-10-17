import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from './views/auth/Register';
import Login from './views/auth/Login';
import Landing from './views/Landing';
import AuthLayout from "./layout/AuthLayout";

const App =() => {

const user = localStorage.getItem('user');


  return (
    <>
     <Routes>
          <Route path="/" element={<Landing />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="dashboard/*" element={<AuthLayout />} />
      </Routes>
    </>
  );
}

export default App;
