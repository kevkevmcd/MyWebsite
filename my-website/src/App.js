import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';

function App(){
  return <div className='App'>
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  </div>
}

export default App;
