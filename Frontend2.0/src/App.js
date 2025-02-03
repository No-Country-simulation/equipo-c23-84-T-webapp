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
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <HeaderInicio />
              <Contacto />
            </>
          }
        />
        <Route
          path="/sobreNosotros"
          element={
            <>
              <HeaderInicio />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
