import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const fileStructure = [
  { id: 1, name: 'About.js', path: '/about' },
  { id: 2, name: 'File 2', path: '/file-2' },
  { id: 3, name: 'File 3', path: '/file-3' },
];

function FileExplorer() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {fileStructure.map((file) => (
          <ListItem list-item-button key={file.id} component={Link} to={file.path}>
            <ListItemText primary={file.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default FileExplorer;