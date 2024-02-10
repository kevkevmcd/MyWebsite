import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
