import { Outlet } from 'react-router-dom'
import geFlag from '../assets/georgia.png'
import ukFlag from '../assets/united-kingdom.png'
import dark from '../assets/dark.svg'
import light from '../assets/light.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '../store/language/language.slice'
import { toggleTheme } from '../store/theme/theme.slice'
import { GlobalDarkStyles, StyledToggleBtn, StyledToggleBtnImg } from '../styled/myStyledComponents'
import { headerReselector } from '../store/selectors'


function Header() {
  const dispatch = useDispatch()
  const [lang, theme] = useSelector(headerReselector)

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