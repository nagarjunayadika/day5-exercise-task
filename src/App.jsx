import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Albums from './Albums'
import Playlist from './Playlist'
import Album from './Album'
import Song from './Song'
import NotFound from './NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="home/:songId" element={<Home/>}/>
      <Route path="albums" element={<Albums/>}>
        <Route path="album/:albumId" element={<Album/>}/>
        <Route path="song/:songId" element={<Song/>}/>
      </Route>
      <Route path="playlist" element={<Playlist/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App