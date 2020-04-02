import React, {useState} from 'react';
import {StyledPersonalInformationSection} from "./styled";
import {ReactComponent as InformationSvg} from "../../assets/svg/information.svg";
import Select from 'react-select';
import {Scrollbars} from "react-custom-scrollbars";
import {Input} from "./Input/Input";

const startData = new Date().getFullYear();
const endData = 1980;
let options = [];

for (let i = startData; i >= endData; i--) {
  options.push({value: i, label: i},);
}

export const PersonalInformationSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const renderScrollbar = props => {
    return (
      <div className='options-wrapper'>
        <Scrollbars>{props.children}</Scrollbars>
      </div>
    );
  };

  return <StyledPersonalInformationSection id='personal-information'>
    <div className="container">
      <div className="header">
        <div className="header__icon">
          <InformationSvg/>
        </div>
        <h6 className="header__title">Личная информация</h6>
      </div>

      <Input
        type='text'
        placeholder='ФИО'
        name='full-name'/>

      <Select
        className='react-select'
        classNamePrefix='react-select-container'
        value={selectedOption}
        placeholder={'Год рождения'}
        onChange={handleChange}
        clearable={false}
        options={options}
        components={{
          MenuList: renderScrollbar,
          IndicatorSeparator: () => null
        }}/>

      <Input
        defaultValue='г. Челябинск'
        disabled={true}
        type='text'
        placeholder='Место проживания'
        name='place-of-residence'/>

      <Input
        type='text'
        placeholder='Skype'
        name='skype'/>

      <Input
        type='email'
        placeholder='E-mail'
        name='e-mail'/>
    </div>
  </StyledPersonalInformationSection>
};