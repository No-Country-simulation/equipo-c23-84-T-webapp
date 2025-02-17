import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(""); // Estado para manejar el mensaje de error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://apipetmap.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Credenciales incorrectas"); // Mostrar mensaje de error
      } else {
        console.log("Login exitoso: ", result);
        setError(""); // Limpiar el mensaje de error
        localStorage.setItem("jwtToken", result.jwt);
        window.location.href = "/paginaInicio"; // Redirigir al usuario
      }
    } catch (error) {
      setError("Error de conexión con el servidor"); // Manejar errores de conexión
    }
  };

  return (
    <div>
      <section className="hero position-relative text-center">
        {/* Fondo */}
        <div className="overlay"></div>
        <div className="content position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
          <h1>Iniciar sesión</h1>
          <form onSubmit={handleSubmit} className="formulario-registro p-2 rounded text-start" style={{ maxWidth: "400px", opacity: 0.9 }}>
            {/* Mostrar mensaje de error si existe */}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Nombre de usuario</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                id="email"
                placeholder="Ingrese su nombre de usuario"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                id="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button type="submit" className="btn btn-custom w-100">Iniciar sesión</button>
            <p className="text-center mt-3">O</p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-custom">Google</button>
              <button className="btn btn-custom">Facebook</button>
            </div>
            <p className="text-center mt-3">
              ¿Eres nuevo? <a className="aIniciarSesion" href="/registro">Registrarse</a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;