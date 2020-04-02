import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .container {
    padding: 0 15px;
  }
  @media (min-width: ${({theme}) => theme.breakPoints.md.vw}) {
    .container {
      max-width: ${({theme}) => theme.breakPoints.md.container};
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
`;