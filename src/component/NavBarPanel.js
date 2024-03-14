import React from 'react'
import { Link } from 'react-router-dom'

const NavBarPanel = () => {
  return (
    <div>
      <nav>
        <a style={{float:"left"}}>Redux ToolKit</a>
        <Link to='/' style={{float:"left",marginLeft:'10px',textDecoration:'none'}}>Product</Link>
        <Link to='/cart' style={{float:"right",marginRight:'10px',textDecoration:'none'}}>My Bag 0</Link>
      </nav>
    </div>
  )
}

export default NavBarPanel
