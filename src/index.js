import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { FirebaseContext } from './store/FirebaseContext';
import {firebase,auth,db} from './firebase'


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <FirebaseContext.Provider value={{firebase,auth,db}}>      
        <BrowserRouter>
      <App />
      </BrowserRouter>
      </FirebaseContext.Provider>
    </StrictMode>,
  )
  
