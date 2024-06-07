import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Nav = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#a08261', height: '30px', display: 'flex', color: '#3a3a3c', justifyContent: 'center', alignItems: 'center' }}>
          <Toolbar variant="dense" style={{ minHeight: '50px' }}>
            <Typography variant="h6" color="inherit" component="div" style={{ textAlign: 'center', width: '100%', fontSize: 'medium' }}>
              PATANG FIRKI
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Nav;
