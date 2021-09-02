import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="botao">
      <Button id="link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <h1 className="titulo-menu">
        Open Menu
      </h1>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Inicio</MenuItem>
        <MenuItem onClick={handleClose}>Recomendação</MenuItem>
      </Menu>
    </div>
  );
}