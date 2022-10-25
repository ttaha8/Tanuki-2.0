import React from 'react';
import './ToolSelector.css'

const ToolSelector = (props) => {

  const options = props.tools.map(({ id, title }) => <option key={id} value={id} className="tool-selection__option">{title}</option>)
  
  const handleChange = event => props.onChange(event.target.value)
  
  return (
    <div className='tool-selection'>
      <select className="tool-selection__select" size={props.size} onChange={handleChange}>
        {options}
      </select>
    </div>
  )
}

export default ToolSelector