import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main style={{minHeight:'100vh'}}>
          {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout