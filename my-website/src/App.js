import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='container'>
        <Outlet />
      </div>
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
