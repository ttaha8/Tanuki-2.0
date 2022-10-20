import React from 'react'

const Input = (props) => {
    
    return (
        <div>
          <label className='tool-form__input-label'>{props.label}</label>
          <input type="text" {...props.register} />
        </div>
      )
}

export default Input