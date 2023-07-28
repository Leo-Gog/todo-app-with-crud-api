import { createGlobalStyle, styled } from 'styled-components'

// global
export const GlobalDarkStyles = createGlobalStyle`
body {
  background-color: black;
}
#root {
  background-color: rgb(0 0 0 40%);
}
`
// header
export const StyledToggleBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`
export const StyledToggleBtnImg = styled.img`
  height: 20px;
`