import styled from 'styled-components';

export const StyledProfileSection = styled('div')`
  position: relative;
  margin-top: 0;
  margin-bottom: 40px;
  height: 180px;
  box-sizing: border-box;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: flex;    
    width: 100%;
    height: 100%;
    background-image: url('/image-bg.jpg');
    background-size: cover;
    background-position: center top;
  }
  .header {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    font-weight: 100;
    font-size: 67px;
    line-height: 50px;
    text-align: center;
    z-index: 1;
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    margin: 80px 0 86px 0;
  }
`;