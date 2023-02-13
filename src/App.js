import React from "react";
import './App.css';
import {Home, SmartphoneDetail, CategoryDetail, BrandDetail, EssentialDetail} from './pages';
import {Navbar, Footer} from "./shared";
import {Route, Routes} from 'react-router-dom';
import ApiContext from './context/ApiContext'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <ApiContext>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/smartphone/:id' element={<SmartphoneDetail/>} />
          <Route path='/category/:id' element={<CategoryDetail/>} />
          <Route path='/brand/:id' element={<BrandDetail/>} />
          <Route path='/essential/:id' element={<EssentialDetail/>} />
        </Routes>
        </ApiContext>
      </div>
      <Footer/>
    </>
  );
}

export default App;
