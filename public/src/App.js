import './App.scss';
import React,{useState} from 'react';
import Landing from './components/Landing';
import Login from './components/Login'
import Register from './components/Register'
import Jobs from './components/Jobs';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Edit from './components/Edit';
import Nav from './components/Nav'

function App() {
  return (

    <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<Landing/>}>        
      </Route>
      <Route path='/login' element={<Login />}>       
      </Route>
      <Route path='/register' element={<Register/>}>
      </Route>
      <Route path='jobs' element={<Jobs/>} ></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/error' element={<Error/>}></Route>
    </Routes>
   
    </Router>

  );
}

export default App;
