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
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#333', color: '#a08261', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', minHeight: '50px' }}>
            <Typography variant="h6" color="inherit" component="div" sx={{ textAlign: 'center', marginLeft: '2%' }}>
              <Link to='thakkardhara508@gmail.com' style={{ color: 'inherit', textDecoration: 'none' }}> <EmailIcon /></Link>
              <Link to='https://github.com/dharathakkarz' style={{ color: 'inherit', textDecoration: 'none' }}><GitHubIcon /> </Link>
              <Link to='thakkardhara508@gmail.com' style={{ color: 'inherit', textDecoration: 'none' }}> <LinkedInIcon /></Link>
            </Typography>
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ marginRight: '2%' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', marginRight: '2%' }}>
                {menuItems.map((item, index) => {
                  const isReservations = item.text === 'RESERVATIONS T&C';
                  return (
                    <Box
                      key={index}
                      component="a"
                      href={item.href}
                      sx={{
                        color: '#a08261',
                        textDecoration: 'none',
                        fontSize: '16px',
                        position: 'relative',
                        padding: '5px',
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
                      {item.text}
                    </Box>
                  );
                })}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { backgroundColor: '#333', color: '#a08261' } }}
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

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import {Link} from 'react-router-dom'

// const SubFooter = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const menuItems = [
//     { text: 'PRESS', href: '#about' },
//     { text: 'DISCLAIMER', href: '#restaurant' },
//     { text: 'PRIVACY POLICY', href: '#menu' },
//     { text: 'CANCEL AND REFUND POLICY', href: '#gallery' },
//     { text: 'TERMS AND CONDITIONS', href: '#conference' },
//     { text: 'RESERVATIONS T&C', href: '#blog' },
//   ];

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" style={{ backgroundColor: '#333', color: '#a08261', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', minHeight: '50px' }}>
//             <Typography variant="h6" color="inherit" component="div" style={{ textAlign: 'center', marginLeft: '2%' }}>
//               <Link to='thakkardhara508@gmail.com' style={{ color: 'inherit', textDecoration: 'none' }}> <EmailIcon /></Link>
//               <Link to='https://github.com/dharathakkarz' style={{ color: 'inherit', textDecoration: 'none' }}><GitHubIcon /> </Link>
//               <Link to='thakkardhara508@gmail.com' style={{ color: 'inherit', textDecoration: 'none' }}> <LinkedInIcon /></Link>

//             </Typography>
//             {isMobile ? (
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleDrawerToggle}
//                 style={{ marginRight: '2%' }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             ) : (
//               <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginRight: '2%' }}>
//                 {menuItems.map((item, index) => (
//                   <a key={index} href={item.href} style={{ color: '#a08261', textDecoration: 'none', fontSize: '16px' }}>
//                     {item.text}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Drawer
//         anchor="bottom"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//         PaperProps={{ style: { backgroundColor: '#333', color: '#a08261' } }}
//       >
//         <List>
//           {menuItems.map((item, index) => (
//             <ListItem button key={index} component="a" href={item.href} onClick={handleDrawerToggle}>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default SubFooter; //without seprate css file 


// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import EmailIcon from '@mui/icons-material/Email';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import { Link } from 'react-router-dom';
// import './SubFooter.css'

// const SubFooter = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const menuItems = [
//     { text: 'PRESS', href: '#about' },
//     { text: 'DISCLAIMER', href: '#restaurant' },
//     { text: 'PRIVACY POLICY', href: '#menu' },
//     { text: 'CANCEL AND REFUND POLICY', href: '#gallery' },
//     { text: 'TERMS AND CONDITIONS', href: '#conference' },
//     { text: 'RESERVATIONS T&C', href: '#blog' },
//   ];

//   return (
//     <div className="subfooter-container">
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" className="app-bar-subfooter">
//           <Toolbar variant="dense" className="toolbar-subfooter">
//             <Typography variant="h6" color="inherit" component="div" className="logo-container-subfooter">
//               <Link to='thakkardhara508@gmail.com' className="menu-item-subfooter"> <EmailIcon /></Link>
//               <Link to='https://github.com/dharathakkarz' className="menu-item-subfooter"><GitHubIcon /> </Link>
//               <Link to='thakkardhara508@gmail.com' className="menu-item-subfooter"> <LinkedInIcon /></Link>
//             </Typography>
//             {isMobile ? (
//               <IconButton
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={handleDrawerToggle}
//                 className="menu-icon-subfooter"
//               >
//                 <MenuIcon />
//               </IconButton>
//             ) : (
//               <div className="menu-items-subfooter">
//                 {menuItems.map((item, index) => (
//                   <a key={index} href={item.href} className="menu-item-subfooter">
//                     {item.text}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Drawer
//         anchor="bottom"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//         PaperProps={{ className: "drawer-paper-subfooter" }}
//       >
//         <List>
//           {menuItems.map((item, index) => (
//             <ListItem button key={index} component="a" href={item.href} onClick={handleDrawerToggle}>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default SubFooter;
