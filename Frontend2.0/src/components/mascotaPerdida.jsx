import React, { useState } from 'react';
import Footer from './footer.jsx';

// Datos de ejemplo (simulando una base de datos)
const petData = [
    { id: 1, name: 'Pongo', fecha: '14/1/2025', type: 'Perro', breed: 'Desconocida', genre: 'Masculino', edad: '5', imageUrl: 'https://cdn.pixabay.com/photo/2016/10/15/12/01/dog-1742295_1280.jpg' },
    { id: 2, name: 'Perdita', fecha: '14/1/2025', type: 'Perro', breed: 'Desconocida', genre: 'Masculino', edad: '5', imageUrl: 'https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087_640.jpg' },
    { id: 3, name: 'Niebla', fecha: '14/1/2025', type: 'Perro', breed: 'Desconocida', genre: 'Masculino', edad: '5', imageUrl: 'https://cdn.pixabay.com/photo/2020/08/26/11/57/dog-5519360_640.jpg' },
    { id: 4, name: 'Rex', fecha: '14/1/2025', type: 'Perro', breed: 'Desconocida', genre: 'Masculino', edad: '5', imageUrl: 'https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_640.jpg' },
    { id: 5, name: 'Beethoven', fecha: '14/1/2025', type: 'Perro', breed: 'Desconocida', genre: 'Masculino', edad: '5', imageUrl: 'https://cdn.pixabay.com/photo/2020/08/12/09/42/dog-5482171_640.jpg' },
    { id: 6, name: 'Hachiko', fecha: '14/1/2025', type: 'Perro', breed: 'Desconocida', genre: 'Masculino', edad: '5', imageUrl: 'https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_640.jpg' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar mascotas según el término de búsqueda
  const filteredPets = petData.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <div className="container mt-5">
            <h1 className="text-center mb-4">Base de Datos de Búsqueda de Mascotas Perdidas</h1>
            <p className="text-center">Consulta nuestra base de datos de mascotas perdidas para encontrar a tu compañero peludo. Con información actualizada y fotos de mascotas extraviadas, estamos aquí para ayudarte a reunir a las familias con sus queridos animales lo más pronto posible.</p>

            {/* Campo de búsqueda */}
            <div className="mb-4">
                <input
                type="text"
                className="form-control form-control-petData"
                placeholder="Buscar mascota por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Lista de mascotas */}
            <div>
                <a href="/petDetails">
                    {filteredPets.length > 0 ? (
                    <div className="row">
                        {filteredPets.map((pet) => (
                        <div key={pet.id} className="col-md-4 mb-4">
                            <div className="card">
                            <img src={pet.imageUrl} className="card-img-top" alt={pet.name} />
                            <div className="card-body">
                                <h5 className="card-title">{pet.name}</h5>
                                <h6>{pet.fecha}</h6>
                                <p className="card-text">
                                Tipo: {pet.type} <br />
                                Raza: {pet.breed} <br />
                                Genre: {pet.genre} <br />
                                edad: {pet.edad}
                                </p>
                                <div>
                                    <h6>Compartir</h6>
                                    <a href="#" className='social-a' aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-facebook fa-2x"></i></a>
                                    <a href="#" className='social-a' aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-instagram fa-2x"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    ) : (
                    <p className="text-center">No se encontraron mascotas.</p>
                    )}
                </a>
            </div>
        </div>
    </div>
  );
}

export default App;