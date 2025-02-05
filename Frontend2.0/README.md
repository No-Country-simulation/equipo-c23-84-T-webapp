# Nombre del Proyecto

Este proyecto es una aplicación web desarrollada con React que permite a los usuarios reportar y encontrar mascotas perdidas. La aplicación utiliza componentes reutilizables, estilos personalizados y gestión de estado.

## Estructura del Proyecto

```plaintext
my-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   ├── forms/
│   │   │   ├── FormularioReportarMascota.jsx
│   │   │   ├── FormularioMascotaEncontrada.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── Contacto.jsx
│   │   │   ├── MascotaPerdida.jsx
│   │   │   ├── PaginaInicio.jsx
│   ├── context/
│   │   ├── AuthContext.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   ├── services/
│   │   ├── apiService.js
│   │   ├── authService.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── styles.css
│   ├── App.js
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package.json
├── README.md

```

## Instalación
Para clonar y ejecutar esta aplicación en tu máquina local, sigue estos pasos:

## Clona el repositorio:
git clone https://github.com/tu-usuario/tu-repositorio.git

## Instala las dependencias:
cd tu-repositorio
npm install

## Inicia la aplicación:
npm start

## Uso
La aplicación permite a los usuarios:

Reportar mascotas perdidas.

Encontrar mascotas reportadas.

Contactar con los propietarios de las mascotas.

## Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm start
Ejecuta la aplicación en modo de desarrollo.\ Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará si haces ediciones.\ También verás cualquier error de lint en la consola.

npm test
Inicia el corredor de pruebas en modo interactivo de observación.\ Para más información, consulta la sección sobre pruebas en ejecución.

npm run build
Construye la aplicación para producción en la carpeta build.\ Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\ ¡Tu aplicación está lista para ser desplegada!

npm run eject
Nota: esta es una operación unidireccional. Una vez que ejecutes eject, no puedes volver atrás.

Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes eject en cualquier momento. Este comando eliminará la dependencia de un solo bloque de construcción de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas el control total sobre ellos. Todos los comandos, excepto eject, seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos.

## Estructura de Archivos
public/: Archivos públicos, incluido el archivo index.html.

src/: Código fuente de la aplicación.

assets/: Recursos como imágenes y fuentes.

components/: Componentes de React divididos en subcarpetas (common, forms, pages).

context/: Contextos de React para la gestión del estado global.

hooks/: Custom hooks para lógica reutilizable.

services/: Servicios y llamadas a APIs.

styles/: Archivos de estilos CSS.

App.js: Componente principal de la aplicación.

index.js: Punto de entrada principal.

reportWebVitals.js: Métricas de rendimiento.

setupTests.js: Configuración de pruebas.

## Actualizaciones Recientes
En esta actualización se han realizado varios cambios y mejoras significativas en el proyecto. A continuación, se detalla lo que se ha hecho:

## Estructura del Proyecto
Reorganización de la estructura de directorios:

Se ha estructurado el proyecto en carpetas claras y coherentes para componentes reutilizables, formularios, páginas, contextos, hooks, servicios y estilos.

## Archivos y Componentes
Renombrar Archivos a Pascal Case:

Todos los nombres de archivos de componentes han sido renombrados a Pascal Case para seguir buenas prácticas.

## Importaciones Organizadas:

Se organizaron y agruparon las importaciones en App.js para mejorar la legibilidad y el mantenimiento.

## Estilos CSS
Separación de Estilos Globales y Específicos:

Los estilos globales se han movido a index.css y los estilos específicos de componentes y páginas se han mantenido en styles.css.

## Uso de Variables de CSS:

Se han definido variables de CSS para colores y fuentes en :root para mejorar la consistencia y facilidad de mantenimiento.

## Optimización de Estilos:

Se han organizado y comentado los estilos CSS para mejorar la claridad y facilitar futuras modificaciones.

## Configuración y Archivos de Sistema
Configuración de reportWebVitals.js y setupTests.js:

Se ha explicado el propósito de estos archivos y su uso para métricas de rendimiento y configuración de pruebas respectivamente.

## Documentación y README.md
Actualización del README.md:

Se ha añadido una sección de estructura del proyecto, instrucciones de instalación y uso, y detalles sobre los scripts disponibles en el proyecto.

## Mejoras en la Documentación:

Documentación detallada de la estructura de archivos y el propósito de cada directorio y archivo importante.

## Scripts y Herramientas
Adición de Scripts en package.json:

Se han añadido scripts útiles para la compilación, pruebas, linting y formateo del código.
