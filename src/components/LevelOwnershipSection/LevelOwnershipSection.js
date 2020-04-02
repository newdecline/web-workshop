import React, {useState, useEffect} from 'react';
import {StyledLevelOwnershipSection} from "./styled";
import {ReactComponent as JsSvg} from "../../assets/svg/js.svg";
import {ReactComponent as CursorRangeSvg} from "../../assets/svg/cursor-range.svg";
import Slider, {Handle} from 'rc-slider';

export const LevelOwnershipSection = () => {
  const [rangeDirectionVertical, setRangeDirectionVertical] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setRangeDirectionVertical(false);
    }
  }, []);

  const handle = (props) => {
    const {value, dragging, index, ...restProps} = props;
    return <Handle value={value} {...restProps}><CursorRangeSvg className='cursor-range'/></Handle>;
  };

  const marks = {
    0: '',
    23: '',
    50: '',
    100: '',
  };

  return <StyledLevelOwnershipSection id='javascript'>
    <div className="container">
      <div className="header">
        <div className="header__icon">
          <JsSvg/>
        </div>
        <h6 className="header__title">Уровень владения JavaScript</h6>
      </div>

      <div className="range-container">
        <Slider
          marks={marks}
          step={null}
          handle={handle}
          vertical={rangeDirectionVertical}/>
        <div className="text-container">
          <div className='text-container__item'>Не владею</div>
          <div className='text-container__item'>Использую готовые решения</div>
          <div className='text-container__item'>Использую готовые решения и умею и переделывать</div>
          <div className='text-container__item'>Пишу сложный JS с нуля</div>
        </div>
      </div>
    </div>
  </StyledLevelOwnershipSection>
};