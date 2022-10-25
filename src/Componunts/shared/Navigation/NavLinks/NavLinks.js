import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

  const setTool= (e)=>{
    props.change(decodeURIComponent(e.target.getAttribute('href')).replace(/^\//,""));

  }

  return (
    <ul className='nav-links'>
      {props.tools.map(tool => <li key={tool.id}>
        <NavLink to={encodeURIComponent(tool.title)} onClick={setTool} >{tool.title}</NavLink>
      </li>)}      
    </ul>
  )
}

export default NavLinks