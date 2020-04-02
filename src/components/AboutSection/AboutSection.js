import React, {useState} from 'react';
import {StyledAboutSection} from "./styled";
import {ReactComponent as AboutSvg} from "../../assets/svg/about.svg";
import classnames from "classnames";

export const AboutSection = () => {
  const [value, setValue] = useState('');

  const onChange = e => setValue(e.target.value);

  return <StyledAboutSection id='about'>
    <div className="container">
      <div className="header">
        <div className="header__icon">
          <AboutSvg/>
        </div>
        <h6 className="header__title">Расскажите о себе</h6>
        <p className="header__subtitle">Напишите несколько предложений,
          чем привлекла наша вакансия
          и что вы ожидаете от работы у нас.</p>
      </div>

      <form className='form'>
        <div className={classnames('textarea-container', {'have-value': value !== ''})}>
          <textarea
            value={value}
            onChange={onChange}
            className='textarea'
            name="text"/>
          <button
            disabled
            className="textarea-placeholder">Понравилась тем, что...</button>
        </div>

        <button
          type='submit'
          className="submit-button">Готово</button>
      </form>

    </div>
  </StyledAboutSection>
};