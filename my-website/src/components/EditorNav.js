import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function EditorNav() {
  const [fileAnchorEl, setFileAnchorEl] = React.useState(null);
  const [editAnchorEl, setEditAnchorEl] = React.useState(null);
  const [viewAnchorEl, setViewAnchorEl] = React.useState(null);
  const [terminalAnchorEl, setTerminalAnchorEl] = React.useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const handleMenuClick = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  useEffect(() => {
    setPopoverAnchorEl(document.getElementById('run-button'));
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          aria-controls="file-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuClick(event, setFileAnchorEl)}
          color="inherit"
        >
          File
        </Button>
        <Button
          aria-controls="edit-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuClick(event, setEditAnchorEl)}
          color="inherit"
        >
          Edit
        </Button>
        <Button
          aria-controls="view-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuClick(event, setViewAnchorEl)}
          color="inherit"
        >
          View
        </Button>
        <Button
          aria-controls="terminal-menu"
          aria-haspopup="true"
          onClick={(event) => handleMenuClick(event, setTerminalAnchorEl)}
          color="inherit"
        >
          Terminal
        </Button>
        <Button
          aria-controls="run-popover"
          aria-haspopup="true"
          onClick={() => navigate('/app/home')}
          color="inherit"
          id="run-button"
        >
          Run
        </Button>

        {/* Dropdown menus */}
        <Menu
          id="file-menu"
          anchorEl={fileAnchorEl}
          keepMounted
          open={Boolean(fileAnchorEl)}
          onClose={() => handleMenuClose(setFileAnchorEl)}
        >
          <MenuItem onClick={() => handleMenuClose(setFileAnchorEl)}>New File</MenuItem>
          <MenuItem onClick={() => handleMenuClose(setFileAnchorEl)}>Open File</MenuItem>
          <MenuItem onClick={() => handleMenuClose(setFileAnchorEl)}>Save</MenuItem>
        </Menu>

        <Menu
          id="edit-menu"
          anchorEl={editAnchorEl}
          keepMounted
          open={Boolean(editAnchorEl)}
          onClose={() => handleMenuClose(setEditAnchorEl)}
        >
          <MenuItem onClick={() => handleMenuClose(setEditAnchorEl)}>Undo</MenuItem>
          <MenuItem onClick={() => handleMenuClose(setEditAnchorEl)}>Redo</MenuItem>
          <MenuItem onClick={() => handleMenuClose(setEditAnchorEl)}>Cut</MenuItem>
        </Menu>

        <Popover
          id="run-popover"
          open={Boolean(popoverAnchorEl)}
          anchorEl={popoverAnchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography>
            Feel free to click Run to see the rest of my site!
          </Typography>
        </Popover>

      </Toolbar>
    </AppBar>
  );
}

export default EditorNav;