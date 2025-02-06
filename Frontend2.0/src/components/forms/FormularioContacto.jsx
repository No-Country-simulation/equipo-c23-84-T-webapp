import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construir el mailto
    const mailtoLink = `mailto:equipoc2384@gmail.com?subject=Consulta de ${encodeURIComponent(name)}&body=Nombre: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMensaje:%0A${encodeURIComponent(message)}`;

    // Redirigir al enlace
    window.location.href = mailtoLink;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico</label>
        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
        <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Mensaje</label>
        <textarea className="form-control" id="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary btn-custom2">Enviar Mensaje</button>
      </div>
    </form>
  );
};

export default ContactForm;
