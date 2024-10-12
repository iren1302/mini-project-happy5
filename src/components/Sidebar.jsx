import React from 'react'
import Logo from '../assets/logo-happy.svg'
import '../App.css'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <img src={Logo} alt="logo" />
    </aside>
  )
}

export default Sidebar
