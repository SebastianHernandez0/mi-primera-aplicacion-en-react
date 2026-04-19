# Mi Primera Aplicación en React

Una aplicación web simple desarrollada con React que permite cambiar entre modo claro y modo oscuro. Fue creada como tarea para el curso de Programación Front End del Instituto Profesional IPG.

## Descripción

Esta aplicación demuestra los conceptos básicos de React:

- **Componentes**: Creación y uso de componentes reutilizables
- **Estado (useState)**: Gestión del estado del tema (claro/oscuro)
- **Interacción**: Cambio de tema mediante un botón
- **Estilos CSS**: Estilos condicionales según el tema seleccionado

## Estructura del Proyecto

```
src/
├── components/
│   ├── Card.jsx          # Componente de tarjeta con imagen y texto
│   ├── Card.css          # Estilos de la tarjeta
│   ├── ThemeToggle.jsx  # Componente del botón de cambio de tema
│   └── ThemeToggle.css # Estilos del botón
├── App.jsx               # Componente principal
├── App.css              # Estilos de la aplicación
├── index.css            # Estilos globales y variables CSS
└── main.jsx            # Punto de entrada
```

## Componentes Principales

### App.jsx

Componente principal que maneja el estado global del tema. Usa `useState` para controlar si el modo oscuro está activo y `useEffect` para aplicar el tema al documento HTML.

### Card.jsx

Componente de presentación que muestra una tarjeta con imagen, título y descripción. Recibe los datos mediante props.

### ThemeToggle.jsx

Componente interactivo que permite al usuario cambiar entre modo claro y oscuro. Usa `useState` interno para manejar el estado del botón y ejecuta un callback hacia el componente padre.

## Decisiones de Diseño

1. **Variables CSS**: Se usaron variables CSS para definir los colores de cada tema, lo que permite un cambio rápido entre ellos.

2. **Estilos condicionales**: La aplicación usa clases CSS condicionales (`light-mode` y `dark-mode`) combinadas con el atributo `data-theme` para aplicar los estilos correspondientes.

3. **Componentes separados**: Cada componente tiene su propio archivo CSS, siguiendo las mejores prácticas de organización.

## Cómo Ejecutar el Proyecto

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm

### Instalación

```bash
# Una vez descargado el proyecto, instalar dependencias
npm install
```

### Ejecución en Desarrollo

```bash
# Iniciar el servidor de desarrollo
npm run dev
```

El servidor arrancará en `http://localhost:5173/`

### Construcción para Producción

```bash
# Crear la versión optimizada para producción
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

## Flujo de la Aplicación

1. El usuario accede a la página y ve la tarjeta en modo claro
2. El usuario hace clic en el botón "Modo Claro"
3. El componente `ThemeToggle` ejecuta el callback `onThemeChange`
4. `App.jsx` actualiza el estado `isDarkMode`
5. `useEffect` aplica el atributo `data-theme="dark"` al documento HTML
6. Los estilos CSS cambian automáticamente según el tema activo

## Tecnologías Usadas

- **React 19**: Biblioteca principal
- **Vite**: Herramienta de construcción y desarrollo
- **CSS3**: Estilos con variables CSS y transiciones

## Autor

**Sebastián Hernández** - Creado como trabajo práctico para el curso de Programación Front End - Semana 4

## Licencia

Este proyecto es con fines educativos.