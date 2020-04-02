import React from 'react';
import {StyledExperienceSection} from "./styled";
import {ReactComponent as ListSvg} from "../../assets/svg/list.svg";
import {CheckBox} from "./Checkbox/CheckBox";


export const ExperienceSection = () => {
  return <StyledExperienceSection id='experience'>
    <div className="container">
      <div className="header">
        <div className="header__icon">
          <ListSvg/>
        </div>
        <h6 className="header__title">Расскажите о своем опыте</h6>
      </div>

      <div className="checkbox-wrapper">
        <div className="checkbox-wrapper__col">
          <CheckBox className='checkbox-wrapper__item' label='БЭМ/OOCSS'/>
          <CheckBox className='checkbox-wrapper__item' label='Stylus/LESS/SASS'/>
          <CheckBox className='checkbox-wrapper__item' label='Работаю с SVG'/>
        </div>
        <div className="checkbox-wrapper__col">
          <CheckBox className='checkbox-wrapper__item' label='Верстаю семантично'/>
          <CheckBox className='checkbox-wrapper__item' label='ES2015/ES2016'/>
          <CheckBox className='checkbox-wrapper__item' label='Gulp/GRUNT'/>
        </div>
        <div className="checkbox-wrapper__col">
          <CheckBox className='checkbox-wrapper__item' label='Webpack'/>
          <CheckBox className='checkbox-wrapper__item' label='jQuery'/>
          <CheckBox className='checkbox-wrapper__item' label='Ипользую Git'/>
        </div>
      </div>
    </div>
  </StyledExperienceSection>
};