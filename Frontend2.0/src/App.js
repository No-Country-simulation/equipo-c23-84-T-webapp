import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importaciones de componentes comunes
import Header from "./components/common/Header";
import HeaderRegistro from "./components/common/HeaderRegistro";
import HeaderInicio from "./components/common/HeaderInicio";
import Hero from "./components/common/Hero";
import Footer from "./components/common/Footer";

// Importaciones de componentes de formularios
import FormularioReportarMascota from "./components/forms/FormularioReportarMascota";
import FormularioMascotaEncontrada from "./components/forms/FormularioMascotaEncontrada";

// Importaciones de páginas
import Registro from "./components/registro";
import Login from "./components/login";
import PaginaInicio from "./components/pages/PaginaInicio";
import Contacto from "./components/pages/Contacto";
import AboutUs from "./components/pages/SobreNosotros";
import MascotaPerdida from "./components/pages/MascotaPerdida";
import PetDetails from "./components/pages/petDetails";
import UserDashboard from "./components/pages/userDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
            </>
          }
        />
        <Route
          path="/registro"
          element={
            <>
              <HeaderRegistro />
              <Registro />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <HeaderRegistro />
              <Login />
            </>
          }
        />
        <Route
          path="/paginaInicio"
          element={
            <>
              <HeaderInicio />
              <PaginaInicio />
              <Footer />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <HeaderInicio />
              <Contacto />
              <Footer />
            </>
          }
        />
        <Route
          path="/sobreNosotros"
          element={
            <>
              <HeaderInicio />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/MascotaPerdida"
          element={
            <>
              <HeaderInicio />
              <MascotaPerdida />
              <Footer />
            </>
          }
        />
        <Route
          path="/FormularioReportarMascota"
          element={
            <>
              <HeaderInicio />
              <FormularioReportarMascota />
              <Footer />
            </>
          }
        />
        <Route
          path="/FormularioMascotaEncontrada"
          element={
            <>
              <HeaderInicio />
              <FormularioMascotaEncontrada />
              <Footer />
            </>
          }
        />
        <Route
          path="/pet/:id" // Ruta con parámetro dinámico :id
          element={
            <>
              <HeaderInicio />
              <PetDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/UserDashboard"
          element={
            <>
              <HeaderInicio />
              <UserDashboard />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;