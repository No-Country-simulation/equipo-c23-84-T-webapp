import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserReports = async () => {
      try {
        const token = localStorage.getItem('jwtToken');

        if (!token) {
          throw new Error('No se encontró el token de autenticación');
        }

        const payload = JSON.parse(atob(token.split('.')[1]));
        const userId = payload.userId;

        // Extraer directamente el nombre de usuario
        const usernameMatch = payload.sub.match(/Username=([^,]+)/);
        const extractedUsername = usernameMatch ? usernameMatch[1] : 'Usuario';
        
        setUserName(extractedUsername);

        const response = await fetch(`https://apipetmap.onrender.com/reportes/usuario/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data = await response.json();
        setReports(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserReports();
  }, []);

  const handleDeleteReport = async (reportId) => {
    try {
      const token = localStorage.getItem('jwtToken');

      const response = await fetch(`https://apipetmap.onrender.com/reportes/borrar/${reportId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al eliminar el reporte: ${response.status}`);
      }

      setReports(reports.filter(report => report.idReporte !== reportId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center">Error: {error}</p>;

  return (
    <div className="container py-5">
      <h2 className="fw-bold">Dashboard del Usuario</h2>
      <div className="card p-4 mb-4">
        <h4>{userName}</h4>
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