import './App.css'
import  CatalogPage from './pages/CatalogPage/CatalogPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
          <Header />
          <CatalogPage />
          <Footer />
    </div>
  )
}

export default App
