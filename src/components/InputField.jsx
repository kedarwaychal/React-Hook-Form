import React from 'react';

const InputField = ({ label, name, value, onChange}) => {
  return (
    <div className='col-md-6'>
      <label>
        {label}:
        <input
          type="text"
          className='form-control'
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default InputField;






























