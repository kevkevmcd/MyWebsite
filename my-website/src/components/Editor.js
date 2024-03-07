import React from 'react';
import { Outlet } from 'react-router-dom';
import '../index.css';
import EditorNav from './EditorNav';
import FileExplorer from './FileExplorer';

function Editor() {
  return (
    <div>
      <div className='container'>
        <EditorNav />
        <FileExplorer />
        <Outlet />
      </div>
      <br />
    </div>
  );
}

export default Editor;