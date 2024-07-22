import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import Edit from './pages/Edit';
import Imgupload from './fireBaseComponent/componentsF/Img';
import Edit1 from './fireBaseComponent/Edit1';



function App() {


  return (

    <div className='App'>
      
      <h1 style={{padding:'1%'}}>Meme generator </h1>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<HomePage> </HomePage>}></Route>
        <Route path='/edit/' element={<Edit></Edit>}></Route>
        <Route path='/edit1/' element={<Edit1></Edit1>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
