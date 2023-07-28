import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ModifyTask from './pages/ModifyTask';
import Header from './Layout/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>} >
          <Route index element={<Main/>}/>
          <Route path='edit/:id' element={<ModifyTask/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
