import styled from 'styled-components';

export const StyledAboutSection = styled('div')`
  margin-bottom: 40px;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__icon {
      margin-bottom: 10px;
    }
    &__title {
      margin: 0 0 13px 0;
      font-weight: 300;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
    }
    &__subtitle {
      margin: 0 0 30px 0;
      font-weight: 300;
      font-size: 16px;
      line-height: 140%;
      text-align: center;
    }
  }
  .textarea-container {
    position: relative;
    overflow: hidden;
    
    margin-bottom: 40px;
    &.have-value {
      .textarea-placeholder {
        top: -100px;
      }
    }
  }
  .textarea {
    padding: 20px;
    width: 100%;
    height: 130px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 5px;
    resize: none;
  }
  .textarea-placeholder {
    position: absolute;
    padding: 0;
    top: 20px;
    left: 20px;
    border: none;
    color: #c8c8c8;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    background-color: transparent;
    pointer-events: none;
    transition: top .3s;
  }
  .submit-button {
    display: block;
    margin: 0 auto;
    padding: 14px 32px;
    border: none;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    pointer-events: none;
    color: #fff;
    background-color: ${({theme}) => theme.mainColor};
    border-radius: 10px;
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    margin-bottom: 80px;
    .header {
      &__title {
        margin: 0 0 13px 0;
        font-size: 30px;
        line-height: 35px;
      }
      &__icon {
        margin-bottom: 16px;
      }
      &__subtitle {
        max-width: 518px;
        margin: 0 0 40px 0;
      }
    }
    .textarea-container {
      margin: 0 auto 66px auto;
      width: 520px;
    }
    .textarea {
      height: 180px;
      
    }
    .textarea-placeholder, .textarea {
      font-size: 20px;
      line-height: 23px;
    }
  }
`;