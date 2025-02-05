import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HeaderRegistro from "./components/headerRegistro";
import Hero from "./components/hero"
import Registro from "./components/registro";
import Login from "./components/login";
import PaginaInicio from "./components/paginaInicio";
import HeaderInicio from "./components/headerInicio";
import Contacto from "./components/contacto";
import AboutUs from "./components/sobreNosotros";
import MascotaPerdida from "./components/mascotaPerdida";
import FormularioReportarMascota from "./components/FormularioReportarMascota";
import FormularioMascotaEncontrada from "./components/FormularioMascotaEncontrada";
import PetDetails from "./components/pages/petDetails";
import UserDashboard from "./components/pages/userDashboard";
import Footer from "./components/footer";

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
              <Footer/>
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <HeaderInicio />
              <Contacto />
              <Footer/>
            </>
          }
        />
        <Route
          path="/sobreNosotros"
          element={
            <>
              <HeaderInicio />
              <AboutUs />
              <Footer/>
            </>
          }
        />
        <Route
          path="/MascotaPerdida"
          element={
            <>
              <HeaderInicio />
              <MascotaPerdida />
              <Footer/>
            </>
          }
        />
        <Route
          path="/FormularioReportarMascota"
          element={
            <>
              <HeaderInicio />
              <FormularioReportarMascota />
              <Footer/>
            </>
          }
        />
        <Route
          path="/FormularioMascotaEncontrada"
          element={
            <>
              <HeaderInicio />
              <FormularioMascotaEncontrada />
              <Footer/>
            </>
          }
        />
        <Route
          path="/PetDetails"
          element={
            <>
              <HeaderInicio />
              <PetDetails />
              <Footer/>
            </>
          }
        />
        <Route
          path="/UserDashboard"
          element={
            <>
              <HeaderInicio />
              <UserDashboard />
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
