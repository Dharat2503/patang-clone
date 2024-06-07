import React from 'react'
// import Nav from './components/navbar/Nav'
// import SubNav from './components/navbar/SubNav'
// import SubFooter from './components/navbar/SubNav'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
     <Router>
      {/* <Nav/>
      <SubNav/> */}
      <Routes>
       <Route path='/' element={<Home/>} />
      </Routes>
      {/* <SubFooter/>
      <Footer/> */}
     </Router>
  
    </div>
  )
}

export default App
