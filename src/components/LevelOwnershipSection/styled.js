import styled from 'styled-components';
import dotsSvg from "../../assets/svg/dots.svg";

export const StyledLevelOwnershipSection = styled('div')`
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
  .cursor-range {
    display: flex;
    transform: translate(16px, -15px) rotate(-90deg);
  }
  .rc-slider {
    height: 200px;
    width: 13px;
    padding: 0;
  }
  .rc-slider-step {
    width: 100%;
  }
  .rc-slider-track {
    width: 100%;
    left: 0;
    border-radius: 0;
    background: linear-gradient(90deg, #CCB1F1 0%, #435993 100%);
    clip-path: polygon(0% 100%,40% 100%,100% 0%,0% 0%);
  }
  .rc-slider-rail {
    width: 100%;
    border-radius: 0;
    clip-path: polygon(0% 100%,40% 100%,100% 0%,0% 0%);
  }
  .rc-slider-handle {
    width: 0;
    height: 0;
    margin: 0;
    border: none;
    background-color: transparent;
  }
  .rc-slider-mark {
    display: none;
  }
  .range-container {
    display: flex;
  }
  .rc-slider-dot {
    display: none;
  }
  .text-container {
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    &__item {
      font-weight: 300;
      font-size: 13px;
      line-height: 140%;
      color: #2E211C;
    }
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    margin-bottom: 110px;
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
    .range-container {
      flex-direction: column;
    }
    .rc-slider {
      width: 100%;
      height: 13px;
      order: 2;
      z-index: 1;
    }
    .rc-slider-rail {
      height: 100%;
      clip-path: polygon(0% 100%,100% 100%,100% 0%,0% 60%);
    }
    .rc-slider-track {
      height: 100%;
      clip-path: polygon(0% 100%,100% 100%,100% 0%,0% 60%);
    }
    .cursor-range {
      transform: translate(-12px, 20px) rotate(0);
    }
    .text-container {
      padding-left: 0;
      margin-bottom: 16px;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      order: 1;
      &__item {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          top: 100%;
          left: 0;
          width: 1px;
          height: 20px;
          background-image: url(${dotsSvg});
          background-repeat: repeat-y;
        }
        &:nth-child(1) {
          margin-right: 103px;
        }
        &:nth-child(2) {
          max-width: 141px;
          margin-right: 60px;
        }
        &:nth-child(3) {
          max-width: 185px;
        }
        &:nth-child(4) {
          max-width: 191px;
          margin-left: auto;
        }
      }
    }
  }
`;