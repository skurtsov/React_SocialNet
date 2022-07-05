import React from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Header from './Header';

const App = () => {
  return (
<div className="grid">
  <Header/>
  <Sidebar/>
<Content/>
 
</div>
  );
}


export default App;
