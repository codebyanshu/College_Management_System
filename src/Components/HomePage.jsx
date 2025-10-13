import React from 'react'
import NavBar from './NavBar'
import UserLogo from './userLogo'
import SideBarInHome from './SideBarInHome'

const HomePage = () => {
  return (
   <>
   <NavBar userlogo = {true}/>  
   <SideBarInHome/>
   <div className='h-[91vh]' ></div> 
   </>
  )
}

export default HomePage