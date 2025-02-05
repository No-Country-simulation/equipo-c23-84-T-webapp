import React from 'react';

const Registro = () => {
  return (
    <div>
        <section className="hero position-relative text-center">
            {/* Fondo */}
            <div className="overlay"></div>
            <div className="content position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center ">
                <h1 className="">Registrarse</h1>
                <form className="formulario-registro p-2 rounded text-start" style={{ maxWidth: "400px", opacity: 0.9 }}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                    Nombre de usuario
                    </label>
                    <input type="text" className="form-control" id="username" placeholder="Ingrese su nombre de usuario"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"> Correo electrónico </label>
                    <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"> Contraseña nueva </label>
                    <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña"/>
                </div>
                <button type="submit" className="btn btn-custom w-100"> Crear cuenta </button>
                <p className="text-center mt-3">O</p>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-custom">Google</button>
                    <button className="btn btn-custom">Facebook</button>
                </div>
                <p className="text-center mt-3"> ¿Ya tienes una cuenta? <a className="aIniciarSesion" href="/login">Iniciar sesión</a> </p>
                </form>
            </div>
        </section>
    </div>
  );
};

export default Registro;
