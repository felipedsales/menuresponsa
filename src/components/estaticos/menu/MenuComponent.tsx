import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import './MenuComponent.css'

export default function MenuComponent() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
         <MenuIcon className="menu"/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem  onClick={handleClose}>Home</MenuItem>
          <MenuItem  onClick={handleClose}>Temas</MenuItem>
          <MenuItem  onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }