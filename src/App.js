import React, { useContext, useEffect } from 'react'
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import { Routes,Route, useNavigate } from 'react-router-dom'
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/ProductContext'
function App() {

  return (
    <div>
      <Post>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/create' element={<CreatePage />}/>
      <Route path='/viewposts/:id' element={<ViewPost />}/>
    </Routes>
    </Post>
    </div>
  );
}

export default App;
