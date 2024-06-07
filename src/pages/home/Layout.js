

import React from 'react';
import video from '../../assets/patangvideo.mp4';
import './Layout.css'

const Layout = () => {
  return (
    <div style={styles.container}>
      <video style={styles.video} autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        <div style={styles.textBox}>
          <h1 style={styles.text}>Revolving - Patang Firki - Reimagining</h1>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', 
    height: 0,
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    // backgroundColor: 'rgba(0,0,0,0)',
  },
  textBox: {
    padding: '1%',
    width: '80%',
    maxWidth: '900px', 
    borderTop: '2px solid #a08261',
    borderBottom: '2px solid #a08261',
    backgroundColor: '#333333c4',
  },
  text: {
    fontSize: '24px', 
    textAlign: 'center',
    color: '#a08261',
    margin: 0,
  },
};

export default Layout;


// import React from 'react';
// import video from '../../assets/patangvideo.mp4';
// import './Layout.css'; 

// const Layout = () => {
//   return (
//     <div className="container">
//       <video className="video" autoPlay loop muted playsInline>
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="overlay">
//         <div className="textBox">
//           <h1 className="text">Revolving - Patang Firki - Reimagining</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Layout;
