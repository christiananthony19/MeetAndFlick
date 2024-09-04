import React, { useState } from 'react';
import NavBar from '../components/NavBar'
import Loginpage from '../pages/Loginpage'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const toggleModal = () => {
    setLoginOpen(!isLoginOpen);
  };

  return (
    <>
        <NavBar LoginToggle={toggleModal}/>
        <Loginpage isOPen={isLoginOpen} setModal={toggleModal} />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout