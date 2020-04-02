import styled from 'styled-components';

export const StyledPersonalInformationSection = styled('div')`
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
      margin: 0 0 30px 0;
      font-weight: 300;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
    }
  }
  .options-wrapper {
    height: 150px;
  }
  .react-select-container {
    &__control {
      margin-bottom: 20px;
      border: 1px solid #e5e5e5;
      &--menu-is-open {
        .react-select-container__indicator {
          transform: rotate(180deg);
        }
      }
    }
    &__value-container {
      padding: 17px 8px;
      margin-right: -36px;
    }
    &__placeholder, &__single-value {
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      font-size: 18px;
      line-height: 24px;
      color: #c8c8c8;
      text-align: center;
    }
    &__single-value {
      color: #000;
    }
    &__indicator {
      transition: transform .3s;
      svg {
        color: ${({theme}) => theme.mainColor};
      }
    }
    &__option {
      text-align: center;
      color: ${({theme}) => theme.mainColor};
    }
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
     margin-bottom: 80px;
    .header {
      &__title {
        margin: 0 0 50px 0;
        font-size: 30px;
        line-height: 35px;
      }
      &__icon {
        margin-bottom: 16px;
      }
    }
    .react-select {
      width: 320px;
      margin: 0 auto;
    }
    .react-select-container {
      &__control {
        margin: 0 auto 25px auto;
        &:hover {
          border: 1px solid #e5e5e5;
        }
      }
      &__placeholder, &__single-value {
        font-size: 24px;
        line-height: 28px;
      }
      &__option {
        font-size: 20px;
        line-height: 23px;
      }
    }
  }
`;