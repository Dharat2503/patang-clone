

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import './SubNav.css'

const SubNav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="subnav-container">
      <div className="placeholder-subnav" style={{ height: isFixed ? '130px' : '0px' }}></div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className="app-bar-subnav"
          sx={{
            height: { xs: '80px', sm: '100px', md: '130px' },
            ...(isFixed && {
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 1000,
            }),
          }}
        >
          <Toolbar variant="dense" className="toolbar-subnav">
            <Typography variant="h6" color="inherit" component="div" className="logo-container-subnav">
              <img src={logo} alt="Logo" className="logo-subnav" />
            </Typography>
            <Box className="menu-items-subnav">
              <a href="#about" className="menu-item-subnav menu-item-text-subnav">ABOUT</a>
              <a href="#restaurant" className="menu-item-subnav menu-item-text-subnav">RESTAURANT</a>
              <a href="#menu" className="menu-item-subnav menu-item-text-subnav">MENU</a>
              <a href="#gallery" className="menu-item-subnav menu-item-text-subnav">GALLERY</a>
              <a href="#conference" className="menu-item-subnav menu-item-text-subnav">CONFERENCE</a>
              <a href="#blog" className="menu-item-subnav menu-item-text-subnav">BLOG</a>
              <a href="#groupbooking" className="menu-item-subnav menu-item-text-subnav">GROUP BOOKING</a>
              <a href="#feedback" className="menu-item-subnav menu-item-text-subnav">FEEDBACK</a>
              <a href="#csr" className="menu-item-subnav menu-item-text-subnav">CSR</a>
              <a href="#contact" className="menu-item-subnav menu-item-text-subnav">CONTACT</a>
              <a href="#reservations" className="menu-item-subnav menu-item-text-subnav">RESERVATIONS</a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default SubNav;
