import styled from 'styled-components';

export const StyledInput = styled('label')`
  position: relative;
  margin: 0 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  &.have-value {
    .placeholder {
      font-size: 10px;
      top: 20%;
    }
  }
  .input {
    padding: 17px 10px;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    background-color: transparent;
    color: #000;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border: 1px solid ${({theme}) => theme.mainColor};
    }
    &:focus + .placeholder {
      font-size: 10px;
      top: 20%;
    }
  }
  .placeholder {
    position: absolute;
    width: 100%;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border: none;
    color: #c8c8c8;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    background-color: transparent;
    transition: font-size .3s, top .3s;
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    width: 520px;
    margin: 0 auto 25px auto;
    &.have-value {
      .placeholder {
        font-size: 14px;
        top: 24%;
      }
    }
    .input, .placeholder {
      padding: 15px 10px;
      font-size: 24px;
      line-height: 28px;
    }
    .input {
      padding: 23px 10px 12px 10px;
      font-size: 20px;
      line-height: 23px;
      &:focus + .placeholder {
        font-size: 14px;
        top: 24%;
      }
    }
  }
`;