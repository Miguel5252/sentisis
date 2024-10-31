# Sentisis

## Stack Utilizado y Arquitectura

### Herramientas principales:

- **React**

- **Vite:** He utilizado Vite por ser bastante rápido a la hora de crear un proyecto pequeño. Pensé en utilizar Next.js por todas las facilidades que ofrece a nivel de infraestructura y caché, pero al no tener requisitos de SEO ni necesidad de realizar peticiones desde el servidor, he decidido descartarlo, ya que todas las llamadas se realizan desde el cliente.

- **TypeScript:** He decidido utilizar TypeScript como en todos mis proyectos, ya que ayuda a reducir errores en producción y facilita la escritura del código gracias al tipado.

- **Router:** No he utilizado `React Router`, ya que no era necesario cargar diferentes páginas.

### Gestión de Estado:

- **Estado global:** No he necesitado usar el Context de React ni bibliotecas de estado global como Redux. Los requerimientos solo especificaban un estado de carrito de compra, el cual he mantenido en el `localStorage` del navegador.

### Persistencia de datos:

- **Local Storage:** Dado que el requerimiento era que el carrito persistiera al refrescar la página, he optado por `localStorage` en lugar de `sessionStorage`, ya que el objetivo es que el usuario conserve el contenido del carrito para futuras visitas, incluso si cierra la pestaña, incluso si cierra la pestaña.

### Testing:

- **Vitest y React Testing Library:** Para los tests he utilizado Vitest, ya que es muy parecido a Jest y se integra muy bien en el stack de Vite. He realizado un test unitario por cada componente y un test E2E en el componente principal `App`, mockeando las llamadas a las APIs.

### Estilos:

- **Tailwind CSS:** He utilizado Tailwind para aplicar estilos rápidamente y siguiendoseguir una metodología mobile first.
- **Shadcn:** He usado Shadcn para componentes como el modal y algunos toasts de confirmación de selección de productos. Es una biblioteca que utilizo a menudo para proyectos pequeños que quiero terminar rápido.
- **Lucide Icons:** He empleado Lucide Icons para algunos íconos del proyecto, ya que tiene iconos muy variados y me gusta la estetica de los mismos.

### Arquitectura:

- En la vista principal, he intentado mantener una separación clara de responsabilidades tanto en componentes como en hooks:

  - La lógica de productos está en el hook `useProducts` y la lógica del carrito en el hook `useCart`.
  - Las peticiones a la API están estructuradas en un archivo `api` (para realizar la solicitud), un archivo `mapper` (para transformar los datos a mi modelo de datos) y un archivo `service` (que coordina la API y el mapper).

- La estructura de carpetas parte de `src` y se organiza en:

  - **api, mapper, service:** para la comunicación y transformación de datos.
  - **lib:** para fuentes de datos.
  - **components:** dividido en carpetas para componentes específicos y genéricos de UI. Hubiera creado carpetas por cada vista y hubiera metido dentro los componentes especificos a dichas vistas pero al haber solo una vista lo he dejado directamente en components.
  - **hooks:** para custom hooks.
  - **utils:** para pequeñas utilidades.

- Los tests se encuentran junto al componente correspondiente, y el test E2E está en `src/App.test.tsx`.

## Instrucciones de Uso

### Modo de Desarrollo

1. Instala las dependencias: `npm install`.
2. Ejecuta la aplicación en modo desarrollo: `npm run dev`.
3. Abre el navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación.

### Modo de Producción

1. Instala las dependencias: `npm install`.
2. Construye la aplicación para producción: `npm run build`.
3. Ejecuta `npm start` y navega a [http://localhost:5173](http://localhost:5173).

### Modo Produccion publicada

1. Teneis el proyecto subido [aquí](https://sentisis.vercel.app)
