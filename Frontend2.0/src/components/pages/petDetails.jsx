import React from "react";

const PetDetails = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://cdn.pixabay.com/photo/2022/04/24/16/46/dog-7154045_640.jpg"
            alt="Mascota Perdida"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <p className="text-muted">Mascota &nbsp; | &nbsp; Perro &nbsp; | &nbsp; Perdido</p>
          <h2 className="fw-bold">Hachiko</h2>
          <p>Juan Reporto esta mascota</p>
          <p><strong>29/11/2024</strong></p>
          <ul>
            <li>Sexo: Masculino</li>
            <li>Años: 1</li>
            <li>Raza: Desconocida</li>
          </ul>
          <p>
            Un Shiba Inu de pelaje rojizo, hocico negro y orejas puntiagudas.
          </p>
          <button className="btn btn-success w-100 mb-3">Reportar Como Mascota Encontrada</button>
          <p className="fw-bold">Ayuda a compartir en tus redes</p>
          <div>
            <button className="btn btn-light me-2"><i class="fa-brands fa-facebook"></i> Facebook</button>
            <button className="btn btn-light me-2"><i class="fa-brands fa-instagram"></i> Twitter</button>
            <button className="btn btn-light"><i class="fa-brands fa-twitter"></i> Instagram</button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/17/00/46/shiba-inu-3087207_640.jpg"
            alt="Mascota 1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/30/22/04/dog-breed-3714812_640.jpg"
            alt="Mascota 2"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
