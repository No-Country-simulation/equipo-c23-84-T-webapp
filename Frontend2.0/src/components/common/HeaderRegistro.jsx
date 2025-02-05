import React from "react";
import '../../css/styles.css'

const HeaderRegistro = () => {

    return (
        <header className="header">
            <div className="d-flex justify-content-between align-items-center headerNavbar">
                <img 
                    className="logo-petmap img-fluid" 
                    src="/assets/petmap-(2).webp" 
                    alt="Logotipo de Petmap Animal Care en negro sobre fondo gris. El logo combina la silueta de un perro con la palabra Petmap. Debajo, se lee Animal Care en letras más pequeñas."
                />
                {/* Enlace para volver atrás, usando la función handleBack */}
                <a href="/">Volver atrás</a>
            </div>
        </header>
    );
};

export default HeaderRegistro;
