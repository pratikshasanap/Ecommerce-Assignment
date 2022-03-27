import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className='navbar navbar-expand navbar-light '>
        <NavLink className='navbar-brand' to='/'>
          Fashion Digital
        </NavLink>
        <div className='' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
              }
              to='/productList'
            >
              Product List
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
              }
              to='/statistics'
            >
              Statistics
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
