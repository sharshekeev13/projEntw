import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserDaten from "./pages/AccountPage/Account";
import CreateVerteidigung from "./pages/VerteidigungPage/CreateVerteidigung";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/login" />
        <Route path="/account" element={<UserDaten />} />{" "}
        {/* ← вот это добавь */}
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/verteidigung-erstellen"
          element={<CreateVerteidigung />}
        />
        <Route path="/admin" element={<AdminPanelPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
