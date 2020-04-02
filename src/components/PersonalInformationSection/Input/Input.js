import React, {useState} from 'react';
import classnames from 'classnames';
import {StyledInput} from "./styled";

export const Input = props => {
  const {name, placeholder, type, defaultValue, disabled} = props;

  const [value, setValue] = useState(defaultValue || '');

  const onChange = e => setValue(e.target.value);

  return <StyledInput className={classnames('styled-input', {'have-value': value !== ''})}>
    <input
      disabled={disabled}
      onChange={onChange}
      name={name}
      type={type}
      className='input'
      value={value}/>
    <button disabled className="placeholder">{placeholder}</button>
  </StyledInput>
};