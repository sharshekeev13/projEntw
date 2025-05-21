import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserDaten from "./pages/AccountPage/Account";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";
import { Toaster } from "react-hot-toast";
import VerteidigungForm from "./pages/VerteidigungPage/VerteidigungForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/account"
          element={
            <UserDaten
              onClose={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="/verteidigung" element={<VerteidigungForm />} />
        <Route path="/verteidigung/:id" element={<VerteidigungForm />} />
        <Route path="/admin" element={<AdminPanelPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
