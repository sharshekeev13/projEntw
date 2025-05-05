import './App.css'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/login" />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
