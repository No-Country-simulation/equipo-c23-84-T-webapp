import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'; // Asegúrate de importar tu archivo CSS correctamente

function Hero() {
  return (
    <section className="hero position-relative text-center text-white">
      <div className="overlay"></div>
      <div className="content position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center gap-4">
        <h1 className="fw-bold">
          ¡Hola! En Petmap Nos Dedicamos A Reunir A Las Mascotas Extravíadas Con Sus Seres Queridos.
        </h1>
        <p className="parrafo-index">
          Somos la plataforma número uno en reunir mascotas perdidas con sus familias. Gracias a nuestra tecnología avanzada y comunidad solidaria, ayudamos a que encuentres a tu amigo peludo lo antes posible.
        </p>
        <div className="d-flex justify-content-center flex-column flex-md-row gap-3 mt-3">
          <Link to="/login">
            <button className="btn btn-custom">Iniciar sesión</button>
          </Link>
          <Link to="/registro">
            <button className="btn btn-custom">Crear cuenta</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
