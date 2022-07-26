import React from 'react';
import './App.css';
//import Content from './components/Profile/Content';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dialog from './components/Dialogs/Dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Profile/Content';

const App = (props) => {
  //props.addPost("hello");
  return (
    
    <BrowserRouter>
<div className="grid">
  <Header/>
  <Sidebar/>
  <div class="app-content">
    <Routes>
    <Route path="/"   element={<Content addPost={props.addPost} posts={props.posts} />}/>
    <Route path="/profile" element={<Content addPost={props.addPost} posts={props.posts}/>}/>
    <Route path="/dialog/*" element={<Dialog messages={props.messages}/>}/>
    </Routes>
  </div>
</div>
</BrowserRouter>);
}


export default App;
