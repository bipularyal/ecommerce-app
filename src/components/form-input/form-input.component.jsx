import React from 'react';
import './form-input.styles.css';
const FormInput= ({ handleChange, label, ...otherProps}) =>(
    <div className='group'>

        <input className='form-input' onChange={handleChange} {...otherProps}/>  
        {/* All other props like name, input value will be passed into our form input component */}
        {
            label? <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>
                {/* so this always has a classname of form-input-label but in case user types something shrink class applies */}
                {label}
            </label>: null       }
    </div>
)
export default FormInput;