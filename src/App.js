import React, { useContext, useEffect } from 'react'
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import { Routes,Route, useNavigate } from 'react-router-dom'
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
function App() {

  return (
    <div>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/create' element={<CreatePage />}/>
      <Route path='/viewposts/:id' element={<ViewPost />}/>
    </Routes>
    </div>
  );
}

export default App;
