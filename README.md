# Sentisis

# Stack Utilizado y arquitectura

- React

- Vite: He utilizado Vite por ser bastante rapido a la hora de crear un proyecto pequeño. Pensé en utilizar NextJS por todas las facilidades que ofrece el framework a nivel de caché e infraestructura pero al no tener requisitos de SEO y de requerir que las llamadas se hagan desde el lado del cliente y no del servidor, he descartado usarlo.

- TypeScript: He decidido utilizar Typescript ya que lo utilizo siempre en todos mis proyectos. Hace que mi código llegue con menos errores a prodcción y me facilita la escritoru del mismo gracias a la ayuda del tipado.

- Router: Hubiera utilizado React Router Pero no ha sido necesario ya que no tenia que cargar diferentes paginas.

- Estados globales: No he necesitado utilizar el contexto de React o librerias de gestion de estado global como redux porque con los requrimientos que se pedian era suficiente con mantener el estado de carro de la compra en el localstorage del navegador .

- Persistencia de los datos: Ya que el requerimiento era unicamente que los datos del carrito persistieran al refrescar la pagina he optado por utilizar local storage. Lo he elegido frente a session storage porque entiendo que la finalidad es que el usuario mantenga el carro de la compra para futuras visitas aunque haya cerrado la pestaña.

- Vitest y React Testing Library: Para la realizacion de los test he optado por Vitest ya que es muy parecido a una de las libreris mas populares (Jest) y se integra muy bien con Vite al ser parte del mismo stack.

He realizado un test unnitario por cada componente y un test e2e en el componente principal App.

He mockeado las llamadas a las apis.

- Estilos: He utilizado Tailwind ya que me permite estilar muy rapido utilizando metodología mobile first.

Por comentar:
// arquitectura de carpetas, modelo, servicio, api, mappers
// refactorizacion y separacion de responsabilidades hooks
// shadcn

# Instrucciones de Uso

Modo de Desarrollo

- Instala las dependencias: npm install
- Ejecuta la aplicación en modo de desarrollo: npm run dev
- Abre tu navegador y navega a http://localhost:5173/ para ver la aplicación en modo de desarrollo.

Modo de Producción

- Instala las dependencias: npm install
- Construye la aplicación para producción: npm run build
- ejecuta npm start y navega a http://localhost:5173/".
