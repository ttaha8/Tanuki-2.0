import React from 'react'

import './Checkbox.css'

const CheckBox = props => {
  return (
    <div>
      <label className="tool-form__checkbox-container">{props.label}
        <input type="checkbox" {...props.register} />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default CheckBox