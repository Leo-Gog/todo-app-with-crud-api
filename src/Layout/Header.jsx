import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLanguageContext } from '../contexts/LanguageContext'
import geFlag from '../assets/georgia.png'
import ukFlag from '../assets/united-kingdom.png'


function Header() {

  const {lang, toggleLang} = useLanguageContext()
  return (
    <>
      <header>
        <button onClick={toggleLang} style={{backgroundColor:'rgba(0, 0, 0, 0)', border:'none'}}><img style={{height:'20px'}} src={lang === 'ka'? ukFlag : geFlag} alt="toggle lang" /></button>
      </header>
      
      <Outlet/>
    </>
  )
}

export default Header