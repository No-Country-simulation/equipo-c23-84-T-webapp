import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "Juan Pérez",
    email: "juanperez@gmail.com",
  });

  const [reports, setReports] = useState([
    {
      id: 1,
      petName: "Hachiko",
      status: "Perdido",
      date: "29/11/2024",
      location: "Suginami, Tokio",
    },
    {
      id: 2,
      petName: "Luna",
      status: "Encontrado",
      date: "15/10/2024",
      location: "San José, Costa Rica",
    },
  ]);

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
              <li key={report.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{report.petName}</strong> ({report.status})
                  <p className="mb-0 text-muted">Fecha: {report.date} | Ubicación: {report.location}</p>
                </div>
                <div>
                  <button className="btn btn-warning btn-sm me-2">Editar</button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
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
