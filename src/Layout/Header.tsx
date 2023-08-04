import React from 'react'
import { Outlet } from 'react-router-dom'
import geFlag from '../assets/language/ka.png'
import ukFlag from '../assets/language/uk.png'
import dark from '../assets//theme/dark.svg'
import light from '../assets/theme/light.svg'
import { toggleLanguage } from '../store/language/language.slice'
import { toggleTheme } from '../store/theme/theme.slice'
import { GlobalDarkStyles, StyledToggleBtn, StyledToggleBtnImg } from '../styled/myStyledComponents'
import { getCurrentLang, getSelectedTheme } from '../store/selectors'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'


const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const lang = useAppSelector(getCurrentLang)
  const theme = useAppSelector(getSelectedTheme)

  const changeLang = () => dispatch(toggleLanguage())
  const changeTheme = () =>  dispatch(toggleTheme())

  return (
    <>
      {theme === 'dark' ? <GlobalDarkStyles /> : undefined}
      <header>
        <StyledToggleBtn onClick={changeLang} >
          <StyledToggleBtnImg src={lang === 'ka'? ukFlag : geFlag} alt="toggle lang" />
        </StyledToggleBtn>
        <StyledToggleBtn onClick={changeTheme} >
          <StyledToggleBtnImg src={theme === 'light' ? dark : light} alt="toggle theme" />
        </StyledToggleBtn>    
      </header>
      <Outlet/>
    </>
  )
}

export default Header