import { Route, Routes } from 'react-router-dom'
import './App.css'
import Profiles from './Profiles'
import NotFound from './NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<Profiles/>}/>
      <Route path="profils" element={<Profiles/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App