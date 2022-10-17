import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { propTypes } from 'react-bootstrap/esm/Image'

export default props
<aside className+"menu-area">
<nav className='menu'>
    <Link to="/">
        <i className="fa fa-home"></i>Início 
        </Link>
        <Link to="/users">
        <i className="fa fa-users"></i>Usuários 
        </Link>
        <Link to="/products">
        <i className="fa-brands fa-product-hunt"></i>Productos
        
        </Link>
        
</nav>