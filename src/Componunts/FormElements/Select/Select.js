import React from 'react'

import './Select.css'

const Select = (props) => {


  const options = props.options.map(option => {
    return (
      <option
        key={option.id}
        value={option.id}
        className="tool-form__option"
      >
        {option.label}
      </option>
    )
  });
  options.unshift(<option key={0} className="tool-form__option" hidden>No Selection</option>)

  const classes = `tool-form__select ${props.errorClass}`

  return (
    <div className="tool-form__select-main">
      <label className='tool-form__select-label'>{props.label}</label>
      <select {...props.register} className={classes}>
        {options}
      </select>
      {props.errors && <span className='error'>an option must be selected</span>}
    </div>
  )
}

export default Select