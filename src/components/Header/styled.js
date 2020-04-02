import styled, {keyframes} from 'styled-components'

const linkAppearance = keyframes`
  0% {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const StyledHeader = styled('header')`
  .nav-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    z-index: 2;
    transform: translate(-100%, 0);
    transition: transform .3s;
    &.open {
      transform: translate(0, 0);
      .nav-list__item {
        animation-name: ${linkAppearance};
        animation-timing-function: ease-in-out;
        &:nth-child(1) {
          animation-duration: 0.2s;
        }
        &:nth-child(2) {
          animation-duration: 0.4s;
        }
        &:nth-child(3) {
          animation-duration: 0.6s;
        }
        &:nth-child(4) {
          animation-duration: 0.8s;
        }
      }
    }
  }
  .nav-list {
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    &__item {
      text-align: center;
    }
  }
  .link {
    margin: 5px 0;
    display: inline-block;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    color: ${({theme}) => theme.mainColor};
    text-decoration: none;
    &.active {
      color: #1c1c1c;
    }
  }
  .burger-menu {
    position: fixed;
    top: 20px;
    right: 20px;
    height: 20px;
    width: 30px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    margin: 0;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    box-sizing: content-box;
    z-index: 2;
    transition: background-color .3s;
    &__item {
      width: 100%;
      height: 2px;
      background-color: ${({theme}) => theme.mainColor};
      transform-origin: center;
      transition: width .3s, transform .3s;
    }
    &.open {
      background-color: transparent;
      .burger-menu__item {
        &:nth-child(1) {
          transform: rotateZ(45deg) translate(6px, 6px);
        }
        &:nth-child(2) {
          width: 0;
        }
        &:nth-child(3) {
          transform: rotateZ(-45deg) translate(7px, -6px);
        }
      }
    }
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    .burger-menu {
      display: none;
    }
    .nav-wrap {
      height: auto;
      transform: translate(0, 0);
      &.open {
        .nav-list__item {
          animation: none;
        }
      }
    }
    .nav-list {
      padding: 27px 0;
      flex-direction: row;
      background-color: #fff;
      &__item {
        margin-right: 75px;
        animation: none;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .link {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;