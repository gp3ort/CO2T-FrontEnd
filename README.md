# CO2Trade

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
![imagen de dependencias](https://ik.imagekit.io/900hpd9ky/CO2/Captura%20de%20pantalla%202023-11-29%20121056.png?updatedAt=1701270796527)


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



