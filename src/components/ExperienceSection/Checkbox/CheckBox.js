import React from 'react';
import {ReactComponent as CheckSvg} from "../../../assets/svg/check.svg";
import {StyledCheckbox} from "./styled";

export const CheckBox = props => {
  const {label, className} = props;

  return <StyledCheckbox className={className}>
    <input type="checkbox"/>
    <span className='indicator'><CheckSvg className='indicator-svg'/></span>
    <span className="label">{label}</span>
  </StyledCheckbox>
};