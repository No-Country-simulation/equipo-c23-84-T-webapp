import React from 'react';
import ContactForm from '../forms/FormularioContacto';
import '../../css/styles.css';

const Contacto = () => {
    return (
        <div>
            {/* Hero */}
            <section className="hero overlay text-center py-5 hero-contacto d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-6 text-md-start text-white">
                            <h1 className="h1-hero">Contacto</h1>
                            <p className='p-hero text-white'>Estamos aquí para ayudarte y responder a todas tus preguntas. Si necesitas información adicional, deseas compartir tus comentarios, o simplemente quieres conversar sobre cómo podemos hacer de nuestra comunidad un lugar mejor para las mascotas, no dudes en ponerte en contacto con nosotros.</p>
                        </div>
                        <div className="col-md-5 col-lg-6"></div>
                    </div>
                </div>
            </section>

            {/* Contact us */}
            <section className="sectionContacto py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <h2>Póngase en contacto</h2>
                            <p>Avenida Ficticia 456, Barrio Imaginario, Buenos Aires, Argentina</p>
                            <p>+54 11 1234 5678</p>
                            <p>support@petmap.com</p>

                            <h2>Síguenos en nuestras redes</h2>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="colContacto">
                                <div className="container">
                                    <h2 className='text-center'>Enviar un mensaje</h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;
