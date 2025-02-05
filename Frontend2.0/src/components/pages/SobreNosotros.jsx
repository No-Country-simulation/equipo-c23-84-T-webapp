import React from 'react';

function AboutUs() {
  return (
    <div>
        <section className="about-us">
            <div className="col-12 text-center mb-4 headerAbout">
                <h1>Sobre Nosotros</h1>
                <p>Conoce más sobre Petmap y nuestra misión</p>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Nuestra Historia</h3>
                        <p>
                        Nuestra historia comenzó en 2025, cuando encontramos a una mascota perdida en las calles.
                        Con determinación y amor, logramos reunirla con su familia. Este acto de bondad y compromiso
                        nos inspiró a crear Petmap, una plataforma dedicada a reunir a las mascotas perdidas con sus seres queridos.
                        Desde ese primer rescate, hemos trabajado incansablemente para perfeccionar nuestra tecnología y construir una
                        comunidad solidaria que comparte nuestro objetivo común: que cada mascota perdida vuelva a casa.
                        </p>
                        <p>
                        A lo largo de los años, hemos aprendido mucho sobre el valor de la colaboración y la solidaridad.
                        Hemos visto cómo la empatía y el trabajo en equipo pueden transformar vidas, no solo de las mascotas, sino
                        también de sus dueños. Estamos orgullosos del impacto positivo que hemos logrado y seguimos comprometidos
                        en expandir nuestra misión para ayudar a más familias.
                        </p>
                        <h3>Nuestra Misión</h3>
                        <p>
                        Nuestra misión es clara: reunir a las mascotas perdidas con sus familias. Cada día trabajamos arduamente para crear
                        una comunidad segura y solidaria donde todos los animales encuentren un hogar. Utilizamos tecnología avanzada y
                        fomentamos la colaboración entre nuestros usuarios para garantizar que cada reporte de mascota perdida reciba la
                        atención y los recursos necesarios para un final feliz.
                        </p>
                        <p>
                        Creemos firmemente en el poder de la comunidad y en el impacto positivo que puede tener un esfuerzo colectivo.
                        Nuestro objetivo es proporcionar una plataforma eficaz y de fácil uso que permita a los dueños de mascotas y a
                        voluntarios trabajar juntos en la búsqueda y el rescate de mascotas perdidas. Con tu ayuda, podemos hacer una
                        diferencia significativa y asegurar que ningún animal se quede sin un hogar.
                        </p>
                        <div className="text-center">
                        <p>Juntos, haremos que cada cola vuelva a menearse y cada ronroneo vuelva a casa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutUs;
