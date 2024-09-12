import React from 'react';

const InputField = ({ className, type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
