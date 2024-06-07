


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
      <div style={{ height: isFixed ? '130px' : '0px' }}></div> {/* Placeholder element */}
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
                  width: '60px',
                  height: '60px',
                  margin: { xs: '10px 0', sm: '10px 0' },
                }}
              />
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: '10px', sm: '15px', md: '20px' },
                alignItems: 'center',
                mr: { xs: '1%', sm: '2%' },
              }}
            >
              <a href="#about" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>ABOUT</a>
              <a href="#restaurant" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>RESTAURANT</a>
              <a href="#menu" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>MENU</a>
              <a href="#gallery" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>GALLERY</a>
              <a href="#conference" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>CONFERENCE</a>
              <a href="#blog" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>BLOG</a>
              <a href="#groupbooking" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>GROUP BOOKING</a>
              <a href="#feedback" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>FEEDBACK</a>
              <a href="#csr" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>CSR</a>
              <a href="#contact" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>CONTACT</a>
              <a href="#reservations" style={{ color: '#a08261', textDecoration: 'none', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>RESERVATIONS</a>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default SubNav;


// import React, { useState, useEffect } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import logo from '../../assets/logo.png';
// import './SubNav.css'

// const SubNav = () => {
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 130) { 
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="subnav-container">
//       <div className="placeholder-subnav" style={{ height: isFixed ? '130px' : '0px' }}></div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar
//           position="static"
//           className="app-bar-subnav"
//           sx={{
//             height: { xs: '80px', sm: '100px', md: '130px' },
//             ...(isFixed && {
//               position: 'fixed',
//               top: 0,
//               width: '100%',
//               zIndex: 1000,
//             }),
//           }}
//         >
//           <Toolbar variant="dense" className="toolbar-subnav">
//             <Typography variant="h6" color="inherit" component="div" className="logo-container-subnav">
//               <img src={logo} alt="Logo" className="logo-subnav" />
//             </Typography>
//             <Box className="menu-items-subnav">
//               <a href="#about" className="menu-item-subnav menu-item-text-subnav">ABOUT</a>
//               <a href="#restaurant" className="menu-item-subnav menu-item-text-subnav">RESTAURANT</a>
//               <a href="#menu" className="menu-item-subnav menu-item-text-subnav">MENU</a>
//               <a href="#gallery" className="menu-item-subnav menu-item-text-subnav">GALLERY</a>
//               <a href="#conference" className="menu-item-subnav menu-item-text-subnav">CONFERENCE</a>
//               <a href="#blog" className="menu-item-subnav menu-item-text-subnav">BLOG</a>
//               <a href="#groupbooking" className="menu-item-subnav menu-item-text-subnav">GROUP BOOKING</a>
//               <a href="#feedback" className="menu-item-subnav menu-item-text-subnav">FEEDBACK</a>
//               <a href="#csr" className="menu-item-subnav menu-item-text-subnav">CSR</a>
//               <a href="#contact" className="menu-item-subnav menu-item-text-subnav">CONTACT</a>
//               <a href="#reservations" className="menu-item-subnav menu-item-text-subnav">RESERVATIONS</a>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </div>
//   );
// };

// export default SubNav;
