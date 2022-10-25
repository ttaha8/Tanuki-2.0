import React from 'react';
import NavLinks from '../shared/Navigation/NavLinks/NavLinks';
import './ToolSelector.css';

const ToolSelector = props => {
  
  return (
      <aside className='side-drawer'><NavLinks tools={props.tools} change={props.change}/></aside>
  )
}

export default ToolSelector