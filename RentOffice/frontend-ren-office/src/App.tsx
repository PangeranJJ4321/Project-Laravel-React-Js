import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Browse from './pages/Browse'
import CityDetails from './pages/CityDetails'
import OfficeDetails from './pages/OfficeDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Browse />} />
          <Route path='/city/:slug' element={<CityDetails />} />
          <Route path='/office/:slug' element={<OfficeDetails />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
