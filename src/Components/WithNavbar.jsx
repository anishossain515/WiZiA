import React from 'react'
import NavbarArea from './Navbar'

function WithNavbar({children}) {
  return (
    <>
     <NavbarArea/>
     {children}
    </>
  )
}

export default WithNavbar