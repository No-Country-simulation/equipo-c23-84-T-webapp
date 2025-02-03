import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/WPFooter">
      <div className="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Síguenos en redes sociales</h3>
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="Mastodon"><i className="fab fa-mastodon"></i></a>
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <hr className="footer-break" />
      <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Enlaces del footer</h3>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Mascotas Perdidas</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <p className="copyright">
        © 2025 <a style={{ color: 'inherit' }} href=""> Equipo c23-84-webapp NoCountry </a> | Todos los derechos reservados | Condiciones generales | Política de privacidad
      </p>
    </footer>
  );
};

export default Footer;
