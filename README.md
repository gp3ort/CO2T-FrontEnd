# CO2Trade

![image](https://github.com/gp3ort/CO2T-FrontEnd/assets/142358714/01c3a8ea-e561-4af7-8839-69dac1836982)                         ![image](https://github.com/gp3ort/CO2T-FrontEnd/assets/142358714/2241d3a6-6cf1-4186-95db-fc1e33728222)

CO2Trade for BDT GLobal

La huella de carbono es un indicador crítico en la actualidad que refleja los niveles de contaminación que una empresa o individuo genera hacia el medio ambiente. Esta huella afecta el cambio climático y la salud del planeta en general. En respuesta a esta problemática, hemos desarrollado un proyecto significativo: la creación de una plataforma de trading monetizado de proyectos medioambientales. Esta plataforma tipo marketplace permitirá a empresas e individuos compensar su huella de carbono a través de inversiones en proyectos medioambientales

Front desarrollado en React donde probaremos los servicios proporcionados por el back para la generación de certificados, operaciones de carrito de compras, pagos con Mercado Pago y gestión de proyectos.


## Requerimientos

Para el desarrollo, solo necesitarás tener Node.js instalado en tu entorno.

### Node

[Node](http://nodejs.org/) es realmente fácil de instalar y ahora incluye [NPM](https://npmjs.org/).
Deberías poder ejecutar el siguiente comando después del procedimiento de instalación que se muestra a continuación.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Instalación de Node en OS X

Necesitarás usar un Terminal. En OS X, puedes encontrar el terminal predeterminado en
`/Applications/Utilities/Terminal.app`.

Por favor, instala [Homebrew](http://brew.sh/) si aún no lo has hecho con el siguiente comando.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Si todo fue bien, deberías ejecutar

    brew install node

#### Instalación de Node en Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Instalación de Node en Windows

Simplemente ve al [sitio web oficial de Node.js](http://nodejs.org/) y descarga el instalador.
Además, asegúrate de tener `git` disponible en tu PATH, `npm` podría necesitarlo.

## Instalación

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

### Configurar la aplicación

Copia `config.sample.json` a `config.json` y luego edítalo con la URL donde hayas configurado:

- API de backend
- Endpoint similar a OAuth para autenticación
- desarrollo

## Iniciar y observar

    $ npm run dev

## Construcción simple para producción

    $ npm run build

## Actualizar fuentes

Algunos usos de paquetes podrían cambiar, así que deberías ejecutar `npm prune` y `npm install` con frecuencia.
Una forma común de actualizar es haciendo

    $ git pull
    $ npm prune
    $ npm install

Para ejecutar esos 3 comandos puedes simplemente hacer

    $ npm run pull

---


# Dependencias

Aquí se detallan las bibliotecas y paquetes utilizados en este proyecto, junto con una breve explicación de su propósito:

- **@mercadopago/sdk-react (^0.0.15):** SDK de Mercado Pago para integración con React, proporciona herramientas para pagos y transacciones dentro de la aplicación.

- **@reduxjs/toolkit (1.9.5):** Redux Toolkit es una librería oficial de Redux que simplifica la lógica de Redux, proporcionando métodos simplificados para la gestión del estado.

- **aos (2.3.4):** AOS es una librería que permite animaciones al hacer scroll, proporcionando una forma sencilla de agregar efectos visuales a la interfaz.

- **axios (^1.6.1):** Cliente HTTP basado en promesas para el navegador y Node.js, utilizado para realizar solicitudes HTTP a servidores.

- **bootstrap (5.3.2):** Framework de diseño frontend que facilita la creación de interfaces web responsivas y atractivas.

- **bootstrap-icons (1.11.1):** Conjunto de iconos de Bootstrap que se pueden utilizar en el proyecto.

- **dotenv (^16.3.1):** Módulo para cargar variables de entorno desde un archivo `.env` para facilitar la configuración de la aplicación en diferentes entornos.

- **file-saver (^2.0.5):** Librería utilizada para guardar archivos desde el navegador, útil para descargar archivos generados en la aplicación.

- **formik (2.4.5):** Librería para gestionar formularios en React, simplifica la captura y validación de datos de entrada.

- **jwt-decode (3.1.2):** Utilizado para decodificar tokens JWT, lo que puede ser útil para extraer información del token en la aplicación.

- **mercadopago (^2.0.4):** Biblioteca para interactuar con la API de Mercado Pago, permitiendo realizar operaciones financieras en la aplicación.

- **prop-types (^15.7.2):** Biblioteca para especificar los tipos de las propiedades que se esperan en los componentes React, útil para la validación de props.

- **react (18.2.0):** Librería principal de React para construir interfaces de usuario.

- **react-bootstrap (2.9.0):** Implementación de Bootstrap en React, ofrece componentes React que siguen las convenciones de diseño de Bootstrap.

- **react-confetti (^6.1.0):** Componente de confeti para React, utilizado para efectos visuales festivos o celebratorios.

- **react-credit-cards-2 (^1.0.1):** Componente React para mostrar tarjetas de crédito, útil en formularios de pago o transacciones.

- **react-dom (18.2.0):** Paquete DOM específico para React, necesario para renderizar componentes React en el navegador.

- **react-redux (8.1.2):** Integración de React con Redux para gestionar el estado global de la aplicación en componentes React.

- **react-router-dom (6.16.0):** Enrutador para React que permite la navegación entre componentes React en función de la URL.

- **redux (4.2.1):** Biblioteca para manejar el estado de la aplicación de manera predecible en aplicaciones JavaScript, muy comúnmente utilizado con React.

- **sweetalert2 (^11.6.13):** Biblioteca para crear modales y ventanas emergentes personalizadas con estilos atractivos.

- **yup (1.3.2):** Utilizado para realizar validaciones de esquemas en formularios, facilita la validación de datos en la aplicación.



# Estructura de Carpetas

- **assets:** Se utiliza para almacenar archivos estáticos.
  
- **hooks:** Funcionalidades especiales para la aplicación.
  
- **components:** Componentes reutilizables para toda la aplicación.

- **Layout:** Componentes que definen toda la estructura general de las páginas, como footer, header, etc.

- **Middleware:** Almacena funciones o lógica que interviene entre dos procesos (un intermediario).

- **Pages:** Representan páginas específicas de la aplicación para el usuario.

- **redux:** Se utiliza para organizar la gestión de estado global de la aplicación, incluyendo las "actions" y "reducers".

- **router:** Se encarga de la gestión de navegación en la aplicación.

- **services:** Se encarga de la interacción con API externas.


# Rutas para la Navegación

- **"/":** Home de la aplicación.

- **"/login":** Login de la aplicación.

- **"/entity":** Donde el usuario podrá elegir entre una organización o una persona individual.

- **"/SignupPerson":** Formulario para registrar una persona individual.

- **"/SignupBusiness":** Formulario para registrar una organización.

- **"/projects":** Donde el usuario podrá ver todos los proyectos que podrá comprar (Autenticado).

- **"/project/:id":** Donde el usuario podrá ver los detalles de un proyecto (Autenticado).

- **"/cart":** Carrito donde se mostrará información del proyecto que desea comprar y podrá avanzar con el proceso (Autenticado).

- **"/pay":** Se le proporciona un formulario donde podrá llenar la información del comprador y detalles de la tarjeta (Autenticado).

- **"/certificate":** Podrá descargar su certificado o ser redirigido a la página principal (Autenticado).



