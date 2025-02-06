import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "Juan Pérez",
    email: "juanperez@gmail.com",
  });

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los reportes del usuario
  useEffect(() => {
    const fetchUserReports = async () => {
      try {
        // Obtener el token JWT del localStorage
        const token = localStorage.getItem('jwtToken');

        if (!token) {
          throw new Error('No se encontró el token de autenticación');
        }

        // Decodificar el token para obtener el ID del usuario
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.userId; // Asume que el ID del usuario está en el payload del token

        if (!userId) {
          throw new Error('No se pudo obtener el ID del usuario');
        }

        // Hacer la solicitud a la API con el token en las cabeceras
        const response = await fetch(`https://apipetmap.onrender.com/reportes/usuario/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Verificar si la respuesta es válida
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error al obtener los datos: ${response.status} ${response.statusText}`);
        }

        // Parsear la respuesta como JSON
        const data = await response.json();
        setReports(data); // Guardar los datos en el estado
      } catch (error) {
        setError(error.message); // Guardar el mensaje de error
      } finally {
        setLoading(false); // Finalizar la carga
      }
    };

    fetchUserReports();
  }, []);

  // Función para eliminar un reporte
  const handleDeleteReport = async (reportId) => {
    try {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('No se encontró el token de autenticación');
      }

      const response = await fetch(`https://apipetmap.onrender.com/reportes/borrar/${reportId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al eliminar el reporte: ${response.status} ${response.statusText}`);
      }

      // Actualizar la lista de reportes después de eliminar
      setReports(reports.filter(report => report.idReporte !== reportId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p className="text-center">Cargando...</p>;
  }

  if (error) {
    return (
      <p className="text-center">
        Error: {error}. <a href="/login">Inicia sesión nuevamente</a>.
      </p>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold">Dashboard del Usuario</h2>
      <div className="card p-4 mb-4">
        <div className="d-flex align-items-center">
          <div>
            <h4>{user.name}</h4>
            <p className="text-muted">{user.email}</p>
          </div>
        </div>
      </div>

      <h3 className="fw-bold">Tus Reportes</h3>
      <div className="card p-3">
        {reports.length > 0 ? (
          <ul className="list-group">
            {reports.map((report) => (
              <li key={report.idReporte} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{report.nombreMascota}</strong> ({report.tipoReporte})
                  <p className="mb-0 text-muted">Fecha: {report.fechaReporte} | Ubicación: {report.ubicacionReporte}</p>
                </div>
                <div>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteReport(report.idReporte)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No tienes reportes aún.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;