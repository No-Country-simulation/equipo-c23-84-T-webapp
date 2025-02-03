import React from 'react';
import Footer from './footer.jsx';
import "../css/styles.css";

const Contacto = () => {
    return (
        <div>
            {/* Hero */}
            <section className="hero overlay text-center py-5 hero-contacto d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-6 text-md-start">
                        <h1 className="h1-hero">Contacto</h1>
                        <p className='p-hero'>Estamos aquí para ayudarte y responder a todas tus preguntas. Si necesitas información adicional, deseas compartir tus comentarios, o simplemente quieres conversar sobre cómo podemos hacer de nuestra comunidad un lugar mejor para las mascotas, no dudes en ponerte en contacto con nosotros.</p>
                    </div>
                    <div className="col-md-5 col-lg-6"></div>
                </div>
            </div>
            </section>
            {/* Contact us */}
            <section className="sectionContacto py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center alig-intems-center">
                        <div className="col-lg-6 col-md-12">
                            <h2>Póngase en contacto</h2>
                            <p>Avenida Ficticia 456, Barrio Imaginario, Buenos Aires, Argentina</p>
                            <p>+54 11 1234 5678</p>
                            <p>support@petmap.com</p>

                            <h2>Siguenos en nuestras redes</h2>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className=" colContacto">
                                <div className="container">
                                    <h2 className='text-center'>Enviar un mensaje</h2>
                                    <form className='form'>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Mensaje</label>
                                            <textarea className="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-custom2">Enviar Mensaje</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* footer */}
            <Footer />
        </div>
        
    );
};

export default Contacto;