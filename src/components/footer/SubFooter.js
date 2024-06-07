

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './SubFooter.css'

const SubFooter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'PRESS', href: '#about' },
    { text: 'DISCLAIMER', href: '#restaurant' },
    { text: 'PRIVACY POLICY', href: '#menu' },
    { text: 'CANCEL AND REFUND POLICY', href: '#gallery' },
    { text: 'TERMS AND CONDITIONS', href: '#conference' },
    { text: 'RESERVATIONS T&C', href: '#blog' },
  ];

  return (
    <div className="subfooter-container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="app-bar-subfooter">
          <Toolbar variant="dense" className="toolbar-subfooter">
            <Typography variant="h6" color="inherit" component="div" className="logo-container-subfooter">
              <Link to='thakkardhara508@gmail.com' className="menu-item-subfooter"> <EmailIcon /></Link>
              <Link to='https://github.com/Dharat2503/' className="menu-item-subfooter"><GitHubIcon /> </Link>
              <Link to='thakkardhara508@gmail.com' className="menu-item-subfooter"> <LinkedInIcon /></Link>
            </Typography>
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                className="menu-icon-subfooter"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <div className="menu-items-subfooter">
                {menuItems.map((item, index) => (
                  <a key={index} href={item.href} className="menu-item-subfooter">
                    {item.text}
                  </a>
                ))}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ className: "drawer-paper-subfooter" }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component="a" href={item.href} onClick={handleDrawerToggle}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SubFooter;
