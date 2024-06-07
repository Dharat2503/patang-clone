

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#a08261', height: 'auto', display: 'flex', color: '#3a3a3c', justifyContent: 'center', alignItems: 'center' }}>
        <Toolbar variant="dense" style={{ minHeight: '50px', flexDirection: 'column', textAlign: 'center' }}>
          <Typography variant="body1" color="inherit" component="div" style={{ fontSize: 'medium' }}>
            © 2024 Patang Firki. Clone of Patang - <b>Dhara Thakkar</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
