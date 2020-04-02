import styled from 'styled-components';

export const StyledCheckbox = styled('label')`
  position: relative;
  display: inline-flex;
  margin-bottom: 15px;
  input {
    visibility: hidden;
    position: absolute;
    z-index: -1;
    &:checked + .indicator {
      background-color: ${({theme}) => theme.mainColor};
    }
    &:checked + .indicator > .indicator-svg {
      transform: translate(1px, 1px) scale(1);
    }
  }
  .indicator {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid ${({theme}) => theme.mainColor};
    box-sizing: border-box;
    border-radius: 3px;
    transition: background-color .3s;
  }
  .indicator-svg {
    transform: translate(1px, 1px) scale(0);
    transition: transform .6s;
  }
  .label {
    margin-left: 12px;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    &:hover {
      cursor: pointer;
      .indicator {
        background: #E9EFFF;
      }
    }
  }
`;