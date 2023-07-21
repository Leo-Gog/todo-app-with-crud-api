import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ModifyTask from './pages/ModifyTask';
import Header from './Layout/Header';
import LanguageContextProvider from './contexts/LanguageContext';

function App() {
  return (
    <>
    <LanguageContextProvider>
      <Routes>
        <Route path='/' element={<Header/>} >
          <Route index element={<Main />}/>
          <Route path='edit/:id' element={<ModifyTask />}/>
        </Route>
      </Routes>
    </LanguageContextProvider>
    </>
  )
}

export default App
