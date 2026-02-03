import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>FS</span>
            <h3>Francisco Sanz WEB</h3>
        </div>
        <nav className='nav'>
            <ul>
                <li><NavLink to='/inicio' className={({isActive}) => isActive ? 'active' : ''} >Home</NavLink></li>
                <li><NavLink to='/portafolio' className={({isActive}) => isActive ? 'active' : ''} >Portfolio</NavLink></li>
                <li><NavLink to='/Servicios' className={({isActive}) => isActive ? 'active' : ''} >Services</NavLink></li>
                {/* <li><NavLink to='/Curriculum' className={({isActive}) => isActive ? 'active' : ''} >Curriculum</NavLink></li> */}
                {/* <li><NavLink to='/Contacto' className={({isActive}) => isActive ? 'active' : ''} >Contacto</NavLink></li> */}
            </ul>
        </nav>
    </header>
  )
}
