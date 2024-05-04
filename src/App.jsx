// npm modules
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage.jsx/StarshipPage'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:idx' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
