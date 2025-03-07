import React from "react";
import '../../css/styles.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="/paginaInicio">PetMap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/paginaInicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sobreNosotros">Sobre Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mascotaPerdida">Mascotas Perdidas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacto">Contacto</a>
                            </li>
                        </ul>
                        <a href="/UserDashboard"><button className="btn btn-outline-dark fw-bold btn-usuario" type="submit">Usuario</button></a>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Header;
