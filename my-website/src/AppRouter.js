import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;