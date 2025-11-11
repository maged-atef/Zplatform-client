
import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../../Components/Z/Footer'
import Navbar from '../../Components/Z/Navbar'

const Z = () => {
  return <>
   

    <Outlet />
    <Footer />
  </>
}

export default Z