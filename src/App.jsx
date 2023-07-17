import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ModifyTask from './pages/ModifyTask';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='edit/:id' element={<ModifyTask />}/>
      </Routes>
    </>
  )
}

export default App
