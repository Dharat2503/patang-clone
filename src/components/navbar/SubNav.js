
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';

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
    <div>
      <div style={{ height: isFixed ? '130px' : '0px' }}></div> 
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#333',
            color: '#a08261',
            height: { xs: '80px', sm: '100px', md: '130px' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...(isFixed && {
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 1000,
            }),
          }}
        >
          <Toolbar
            variant="dense"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              minHeight: '50px',
              px: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                textAlign: 'center',
                ml: { xs: '1%', sm: '2%' },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  borderRadius: '50%',
                  textAlign: 'center',
                  width: '100px',
                  height: '100px',
                  margin: { xs: '10px 0', sm: '10px 0' },
                }}
              />
            </Typography>
        
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: '10px', sm: '10px', md: '10px' },
                alignItems: 'center',
                mr: { xs: '1%', sm: '2%' },
              }}
            >
              {['ABOUT', 'RESTAURANT', 'MENU', 'GALLERY', 'CONFERENCE', 'BLOG', 'GROUP BOOKING', 'FEEDBACK', 'CSR', 'CONTACT', 'RESERVATIONS'].map((text) => {
                const isReservations = text === 'RESERVATIONS';
                return (
                  <Box
                    key={text}
                    component="a"
                    href={`#${text.toLowerCase().replace(' ', '')}`}
                    sx={{
                      color: '#a08261',
                      textDecoration: 'none',
                      fontSize: { xs: '12px', sm: '14px', md: '16px' },
                      position: 'relative',
                      padding: '5px',
                      margin: '5px',
                      display: 'inline-block',
                      fontWeight: 300,
                      letterSpacing: '1px',
                      borderTop: isReservations ? '2px solid #a08261' : 'none',
                      borderBottom: isReservations ? '2px solid #a08261' : 'none',
                      '&:before, &:after': {
                        content: '""',
                        display: 'block',
                        margin: '0 auto',
                        width: 0,
                        height: '2px',
                        backgroundColor: '#a08261',
                        transition: 'opacity .3s ease, width .3s ease',
                      },
                      '&:before': {
                        top: 0,
                      },
                      '&:after': {
                        bottom: 0,
                      },
                      '&:hover:before, &:hover:after': {
                        width: isReservations ? '0' : '100%',
                      },
                      '&:hover': {
                        backgroundColor: isReservations ? '#a08261' : 'transparent',
                        color: isReservations ? '#333' : '#a08261',
                      },
                    }}
                  >
                    {text}
                  </Box>
                );
              })}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default SubNav;
