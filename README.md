# CO2Trade

CO2Trade for BDT GLobal

La huella de carbono es un indicador crítico en la actualidad que refleja los niveles de contaminación que una empresa o individuo genera hacia el medio ambiente. Esta huella afecta el cambio climático y la salud del planeta en general. En respuesta a esta problemática, hemos desarrollado un proyecto significativo: la creación de una plataforma de trading monetizado de proyectos medioambientales. Esta plataforma tipo marketplace permitirá a empresas e individuos compensar su huella de carbono a través de inversiones en proyectos medioambientales

Front desarrollado en React donde probaremos los servicios proporcionados por el back para la generación de certificados, operaciones de carrito de compras, pagos con Mercado Pago y gestión de proyectos.

# Iniciar la aplicacion
en la terminal ejecutar el siguiente comando para instalar las dependencias

npm install

Para ejecutar la aplicacion 

npm run dev 

# Dependencias
"@mercadopago/sdk-react": "^0.0.15",
"@reduxjs/toolkit": "1.9.5",
"aos": "2.3.4",
"axios": "^1.6.1",
"bootstrap": "5.3.2",
"bootstrap-icons": "1.11.1",
"dotenv": "^16.3.1",
"file-saver": "^2.0.5",
"formik": "2.4.5",
"jwt-decode": "3.1.2",
"mercadopago": "^2.0.4",
"prop-types": "^15.7.2",
"react": "18.2.0",
"react-bootstrap": "2.9.0",
"react-confetti": "^6.1.0",
"react-credit-cards-2": "^1.0.1",
"react-dom": "18.2.0",
"react-redux": "8.1.2",
"react-router-dom": "6.16.0",
"redux": "4.2.1",
"sweetalert2": "^11.6.13",
"yup": "1.3.2"

# Estructura de Carpetas
assests: Se utiliza para almacenar archivos estáticos
hooks: funcionalidades especiales para la aplicación
components: componentes reutilizables para toda la aplicación.
Layout: componentes que definen toda la estructura general de las paginas como footer, header, etc.
Middleware: almacena funciones o lógica que interviene entre dos procesos (un intermediario).
Pages: representan paginas especificas de la aplicación para el usuario.
redux: se utiliza para organizar la gestión de estado global de la aplicación, entre ellos están las "actions" y "reducers"
router: se encarga de la gestión de navegación en la aplicación
services: se encarga de la interacción con API externas


# Rutas para la navegacion

"/": home de la aplicacion

"/login": login de la aplicacion

"/entity": donde el usuario podra elejir entre una organizacion o una persona individual

"/SignupPerson": formulario para registrar un persona individual

"/SignupBusiness": formulario para registrar una organizacion

"/projects": donde el usuario podra ver todos los proyectos que podra comprar (Authenticado)

"/project/:id": donde el usuario podra ver los detalles de un proyecto (Authenticado)

"/cart": carrito donde le mostrara informacion del proyecto que desea comprar y poder avanzar con el proceso (Authenticado)

"/pay": se le proporciona un formulario donde podra llenar la informacion del comprador y detalles de la tarjeta(Authenticado)

"/certificate": Podra descargar su dertificado o redirigir a home (Authenticado)


