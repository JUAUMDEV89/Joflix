import React from 'react';

import formStyle from './style';

function FormField({label ,type, name, value, onChange }){
    return(
        <div>
        <label>
          {label}:
        </label>
    
        <input 
            type={type}  
            name={name}
            value={value}
            onChange={onChange}
          />
    </div>
    )
}

export default FormField;