import React, { useState } from "react";

const FormularioReportarMascota = () => {
    const [formData, setFormData] = useState({
        name: "",
        animal: "Perro",
        breed: "Desconocida",
        age: "",
        color: "",
        lostDate: "",
        phone: "",
        email: "",
        description: "",
        location: "",
        photo: null,
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Aquí se enviaría a la API
    };
    
    return (
        <div className="container py-5">
          <h2 className="text-center fw-bold">Te Ayudaremos A Encontrar A Tu Mascota</h2>
          <p className="text-center text-muted">
            Con nuestro servicio de geolocalización, encontrarás a tu mascota de manera rápida y eficiente.
          </p>
          <div className="row mt-4">
            <div className="col-md-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre de la mascota</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
    
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Animal</label>
                    <select className="form-select" name="animal" value={formData.animal} onChange={handleChange}>
                      <option>Perro</option>
                      <option>Gato</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Edad</label>
                    <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
                  </div>
                </div>
    
                <div className="mb-3">
                  <label className="form-label">Color y marcas distintivas</label>
                  <input type="text" className="form-control" name="color" value={formData.color} onChange={handleChange} />
                </div>
    
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fecha de la pérdida</label>
                    <input type="date" className="form-control" name="lostDate" value={formData.lostDate} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Última ubicación conocida</label>
                    <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
                  </div>
                </div>
    
                <div className="mb-3">
                  <label className="form-label">Descripción adicional</label>
                  <textarea className="form-control" rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
                </div>
    
                <div className="mb-3">
                  <label className="form-label">Foto de la mascota</label>
                  <input type="file" className="form-control" onChange={handleFileChange} accept=".png, .jpg, .jpeg" />
                </div>
    
                <button type="submit" className="btn btn-danger w-100">Reportar Mascota Perdida</button>
              </form>
            </div>
    
            <div className="col-md-5">
              <div className="card p-3">
                <div className="card-body">
                  <h5 className="card-title">¿Quieres ponerte en contacto directamente?</h5>
                  <p className="text-muted">Para más información, contáctanos a través de los siguientes medios.</p>
                  <p><strong>Correo:</strong> contacto@petmap.com</p>
                  <p><strong>Teléfono:</strong> (414) 687 - 5892</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default FormularioReportarMascota;