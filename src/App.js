import React from 'react';
import './App.css';
//import Content from './components/Profile/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dialog from './components/Dialogs/Dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Profile/Content';

const App = () => {
  return (
    
    <BrowserRouter>
<div className="grid">
  <Header/>
  <Sidebar/>
  <div class="app-content">
    <Routes>
    <Route path="/" element={<Content/>}/>
    <Route path="/profile" element={<Content/>}/>
    <Route path="/dialog" element={<Dialog/>}/>
    </Routes>
  </div>
</div>
</BrowserRouter>);
}


export default App;
