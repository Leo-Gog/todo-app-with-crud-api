import { Outlet } from 'react-router-dom'
import geFlag from '../assets/georgia.png'
import ukFlag from '../assets/united-kingdom.png'
import dark from '../assets/dark.svg'
import light from '../assets/light.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '../store/language/language.slice'
import { toggleTheme } from '../store/theme/theme.slice'
import { createGlobalStyle } from 'styled-components'


function Header() {
  const dispatch = useDispatch()
  const {_lang: lang} = useSelector(state => state.language.texts)
  const {theme} = useSelector(state => state.theme)

  const GlobalDarkStyles = createGlobalStyle`
    body {
      background-color: black;
    }
    #root {
      background-color: rgb(0 0 0 40%);
    }
  `
  
  const changeLang = () => dispatch(toggleLanguage())
  const changeTheme = () =>  dispatch(toggleTheme())

  const btnStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)', 
    border: 'none'
  }
  const imgStyle = {
    height: '20px'
  }

  return (
    <>
      {theme === 'dark' ? <GlobalDarkStyles /> : undefined}
      <header>
        <button onClick={changeLang} style={btnStyle}>
          <img style={imgStyle} src={lang === 'ka'? ukFlag : geFlag} alt="toggle lang" />
        </button>
        <button onClick={changeTheme} style={btnStyle}>
          <img src={theme === 'light' ? dark : light} alt="toggle theme" style={imgStyle}/>
        </button>
      </header>
      
      <Outlet/>
    </>
  )
}

export default Header