// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Admin/Login";
import AdminSignUp from "./Components/Admin/AdminSignUp";
import Form from "./Components/Client/Form";
import AdminData from "./Components/Admin/AdminData";
import Navbar2 from "./Components/Navbar2";

function App() {
  return (
    <>
      <React.Fragment>
        <header>
          <Navbar />
          {/* <Navbar2 /> */}
        </header>
        <main>
          <Routes>
            <Route path="/Login" element={<Login />} exact />
            <Route path="/Form" element={<Form />} exact />
            <Route path="/AdminSignUp" element={<AdminSignUp />} exact />
            <Route path="/AdminData" element={<AdminData />} exact />
            {/* <Route path='/Navbar2' element={<Navbar2/>}exct/> */}
          </Routes>
        </main>
      </React.Fragment>
    </>
  );
}
export default App;
