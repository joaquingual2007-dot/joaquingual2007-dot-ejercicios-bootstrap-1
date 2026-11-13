# Ejercicios de Bootstrap 5 · Diseño de Interfaces Web

Repositorio con las prácticas y ejercicios realizados para el módulo de **Diseño de Interfaces Web (DIW)** de 2.º de **Desarrollo de Aplicaciones Web (DAW)** en **MEDAC Sevilla Este**.

El proyecto principal de este repositorio es el **ej09-portfolio**, que corresponde a la primera entrega de la Unidad 6.

🔗 **Portfolio desplegado en GitHub Pages:**  
👉 [https://joaquingual2007-dot.github.io/joaquingual2007-dot-ejercicios-bootstrap-1/](https://joaquingual2007-dot.github.io/joaquingual2007-dot-ejercicios-bootstrap-1/)

---

## 📁 Estructura del repositorio

El repositorio está organizado en distintas carpetas según los ejercicios que hemos ido haciendo en clase:

```text
├── index.html                   # Redirección automática al portfolio en GitHub Pages
├── bootstrap-intro/
│   ├── ej01-plantilla/          # Ejercicio 1: Plantilla base HTML con Bootstrap 5 por CDN
│   ├── ej02-presentacion/       # Ejercicio 2: Tarjeta de presentación con utilidades y flexbox
│   ├── ej03-grid/               # Ejercicio 3: Prácticas con el sistema de rejilla (Grid) de Bootstrap
│   ├── ej04-08-codelab-academia/# Ejercicios 4 al 8: Landing page completa de una academia web
│   └── ej09-portfolio/          # Ejercicio 9: Proyecto final del portfolio personal
└── README.md
```

---

## 📝 Resumen de lo que hemos trabajado

### 1. `ej01-plantilla` — Plantilla inicial
Configuración inicial de un documento HTML5 enlazando la librería de Bootstrap 5.3 mediante CDN (hoja de estilos y bundle de JavaScript) y comprobación de su correcto funcionamiento.

### 2. `ej02-presentacion` — Tarjeta de presentación
Creación de una tarjeta personal utilizando componentes `card` de Bootstrap, botones, badges y utilidades de espaciado (`m-*`, `p-*`), texto y flexbox.

### 3. `ej03-grid` — Sistema de rejilla
Práctica a fondo del sistema de columnas de Bootstrap:
- Filas (`row`) y columnas (`col-*`).
- Breakpoints para diseño responsive (`col-sm`, `col-md`, `col-lg`, `col-xl`).
- Auto-layout, ordenación y alineaciones verticales y horizontales.

### 4. `ej04-08-codelab-academia` — Web CodeLab Academia
Desarrollo paso a paso de una web completa uniendo varios componentes:
- Barra de navegación (`navbar`) responsive y colapsable.
- Sección principal (Hero) con llamadas a la acción.
- Tarjetas de cursos con imágenes adaptables.
- Tabla comparativa de precios.
- Formulario de contacto maquetado con controles de Bootstrap.

### 5. `ej09-portfolio` — Proyecto de portfolio personal (Entrega 1 UD6)
Es el trabajo principal de la asignatura. Se trata de un portfolio profesional maquetado íntegramente con utilidades y componentes de Bootstrap 5.3 (sin CSS personalizado innecesario para cumplir la rúbrica):
- **Navbar fija (`sticky-top`)**: colapsable en pantallas pequeñas y con enlaces directos a las secciones.
- **Portada / Sobre mí**: foto de perfil, descripción personal como estudiante de DAW en MEDAC Sevilla Este, botón de ver proyectos y descarga de CV.
- **Habilidades**: divididas en categorías (Front-end, Back-end, Bases de datos, Herramientas, Idiomas y Competencias) usando cards e insignias (`badge`).
- **Proyectos**: 3 proyectos explicados en cards con botón para abrir ventanas modales (`modal`) con información detallada y enlaces a demo y código.
- **Formación y experiencia**: maquetado con un acordeón (`accordion`) interactivo con la información del ciclo formativo, prácticas y cursos complementarios.
- **Contacto**: formulario maquetado con Bootstrap (labels asociadas a cada input) y enlaces directos a redes y contacto.
- **Footer**: copyright, fecha de actualización e iconos de redes sociales.
- **Diseño responsive**: probado en resoluciones de móvil (375px), tablet (768px) y escritorio (1200px+), cumpliendo validación W3C.

---

## 🛠️ Tecnologías utilizadas

- **HTML5**: marcado semántico (`header`, `nav`, `main`, `section`, `footer`).
- **Bootstrap 5.3**: maquetación con grid system, componentes y utilidades.
- **Bootstrap Icons 1.13**: iconografía vectorial para botones, títulos y tarjetas.
- **JavaScript**: componentes interactivos de Bootstrap (navbar colapsable, modales y acordeón) y script básico de validación.

---

## 💻 Cómo ver el proyecto en local

1. Clonar el repositorio o descargar el ZIP:
   ```bash
   git clone https://github.com/joaquingual2007-dot/joaquingual2007-dot-ejercicios-bootstrap-1.git
   ```
2. Abrir la carpeta en **Visual Studio Code**.
3. Clic derecho en el archivo `index.html` (o dentro de `bootstrap-intro/ej09-portfolio/index.html`) y seleccionar **Open with Live Server**.

---

**Autor:** Joaquín Gutiérrez  
**Curso:** 2.º DAW — MEDAC Sevilla Este
