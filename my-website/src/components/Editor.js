import React from 'react';
import { Outlet } from 'react-router-dom';
import '../index.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Editor() {
  return (
    <div>
      <div className='container'>
        <NavBar />
        <Outlet />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Editor;