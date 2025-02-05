import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/styles.css'

const PaginaInicio = () => {
    return (
        <div>
            {/* Hero */}
            <section className="hero overlay text-center text-white py-5 hero-inicio">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-6 text-md-start">
                        <h1 className="h1-paginaInicio">Bienvenido A Petmap, Donde Ayudamos A Reunir Mascotas Perdidas Con Su Familia.</h1>
                        <p className='p-paginaInicio'>Somos la plataforma líder para reunir a las mascotas perdidas con sus familias. Utiliza nuestra tecnología avanzada y nuestra comunidad solidaria para encontrar a tu amigo peludo lo más rápido posible. Juntos, haremos que cada cola vuelva a menearse y cada ronroneo vuelva a casa.</p>

                        <Link to="/formularioreportarmascota">
                            <button className='btn btn-danger me-2 mb-3'>Reportar Mascota Perdida</button>
                        </Link>
                        <Link to="/formulariomascotaencontrada">
                            <button className='btn btn-success me-2 mb-3'>Reportar Mascota Encontrada</button>
                        </Link>
                    </div>
                    <div className="col-md-5 col-lg-6"></div>
                </div>
            </div>
            </section>
            {/* Contador */}
            <section className="contador-bg py-3 text-center">
                <div className="container">
                    <h2>Cifras que demuestran nuestro éxito</h2>
                    <div className="row mt-5">
                        <div className="col">
                        <h4>85+ <br /> Mascotas Reportadas</h4>
                        </div>
                        <div className="col">
                        <h4>55+ <br /> Mascotas Encontradas</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="sectionAbout">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Quiénes Somos</h2>
                            <p className='pSectionAbout'>
                            Nuestra historia comenzó en 2025, cuando encontramos a una mascota perdida en las calles. 
                            Con determinación y amor, logramos reunirla con su familia. Desde entonces, hemos crecido 
                            hasta convertirnos en un equipo apasionado comprometido con cada rescate. Nuestra misión 
                            es reunir a las mascotas perdidas con sus familias. Cada día trabajamos arduamente para 
                            crear una comunidad segura y solidaria donde todos los animales encuentren un hogar.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Se mantiene vacio */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Vision */}
            <section className="sectionVision">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="nuestraVision">
                                <h2>Nuestra Visión</h2>
                                <ol>En Petmap, creemos en un mundo donde ninguna mascota quede perdida y sin hogar. Nuestra visión es crear una comunidad global unida por la compasión y el compromiso hacia nuestros amigos de cuatro patas. Aspiramos a ser el puente que conecta a las mascotas perdidas con sus familias, brindando esperanza y felicidad a través de cada reencuentro.</ol>
                            </div>
                            <div className="nuestroSueno">
                                <h2>Soñamos con un futuro donde:</h2>
                                <ul>
                                    <li>Cada mascota encuentre un hogar amoroso y seguro.</li>
                                    <li>Las comunidades colaboren en la búsqueda y rescate de animales perdidos.</li>
                                    <li>La adopción sea siempre la primera opción para quienes buscan una nueva mascota.</li>
                                    <li>La educación sobre el cuidado y la responsabilidad hacia las mascotas esté al alcance de todos.</li>
                                    <li>Trabajamos día a día para hacer realidad esta visión, creyendo firmemente que cada pequeño esfuerzo cuenta y que juntos podemos hacer una gran diferencia.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* Se mantiene vacio */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Pet Search 
             <PetSearch /> */}
            {/* Call to action */}
            <section className="sectionCallToAction">
                <div className="container py-5">
                    <div className="row rowCallToAction">
                        <div className="col colVacioallToAction"></div>
                        <div className="col colCallToAction">
                            <div className="container">
                                <h2>Cómo involucrarse</h2>
                                <p>¡Haz la diferencia! Ayuda a reunir a más mascotas con sus dueños participando en nuestra comunidad.</p>
                                <div className='mt-3'>
                                    <a href="#" className='social-a' aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-facebook fa-2x"></i>&nbsp; &nbsp;Facebook</a>
                                </div>
                                <div className='mt-3'>
                                    <a href="#" className='social-a' aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-instagram fa-2x"></i>&nbsp; &nbsp;Instagram</a>
                                </div>
                                <div className='mt-3'>
                                    <a href="#" className='social-a' aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-twitter fa-2x"></i>&nbsp; &nbsp;Twitter</a>
                                </div>
                                <h2>Contactanos directamente</h2>
                                <div>(123) 4567-8910</div>
                                <div>help@petmap.com</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default PaginaInicio;
