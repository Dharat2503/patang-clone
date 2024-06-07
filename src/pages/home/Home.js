import React from 'react'
import Nav from '../../components/navbar/Nav'
import SubNav from '../../components/navbar/SubNav'
import SubFooter from '../../components/footer/SubFooter'
import Footer from '../../components/footer/Footer'
import Layout from './Layout'
import Section from './Section'

const Home = () => {
  return (
    <div>
        <Nav/>
        <SubNav/>
          <Layout/>
          <Section/>
      <SubFooter/>
      <Footer/>
    </div>
  )
}

export default Home
