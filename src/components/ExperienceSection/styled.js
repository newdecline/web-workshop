import styled from 'styled-components';

export const StyledExperienceSection = styled('div')`
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
  .checkbox-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    &__col {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    margin-bottom: 63px;
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
    .checkbox-wrapper {
      flex-direction: row;
      padding: 0 20px;
      &__col {
        &:nth-child(1) {
          margin-right: 117px;
        }
        &:nth-child(2) {
          margin-right: 90px;
        }
      }
    }
  }
`;