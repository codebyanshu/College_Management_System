import React from 'react'
import NavBar from './NavBar'
import UserLogo from './userLogo'

const HomePage = () => {
  return (
   <>
   <NavBar userlogo = {true}/>  
   <div className='h-[91vh]' ></div> 
   </>
  )
}

export default HomePage