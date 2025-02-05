import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
      {/* Sección de redes sociales */}
      <div className="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Síguenos en redes sociales</h3>
        <ul className="social-icons">
          <li>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Línea divisoria */}
      <hr className="footer-break" />

      {/* Enlaces útiles */}
      <nav className="footer-links text-center" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Enlaces útiles</h3>
        <ul className="footer-links-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Mascotas Perdidas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      {/* Derechos de autor y políticas */}
      <div className="footer-legal">
        <p className="copyright">
          © {new Date().getFullYear()}{' '}
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Equipo c23-84-webapp NoCountry
          </a>{' '}
          | Todos los derechos reservados.
        </p>
        <ul className="legal-links">
          <li><a href="#">Condiciones generales</a></li>
          <li><a href="#">Política de privacidad</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
