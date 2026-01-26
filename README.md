# Portfolio · Orlando Aguilera

Un portfolio personal moderno y responsivo construido con HTML, CSS y JavaScript vanilla. Este sitio web presenta mis proyectos, habilidades y experiencia en el desarrollo de software y análisis de datos.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móviles, tablets y escritorio)
- **Navegación Interactiva**: Menú de navegación sticky con resaltado de sección activa
- **Secciones Principales**:
  - 🏠 **Inicio**: Presentación personal con foto de perfil
  - 👤 **Sobre mí**: Descripción de experiencia y trayectoria profesional
  - 💻 **Conocimientos**: Visualización de habilidades técnicas con barras de progreso
  - 📂 **Proyectos**: Showcase de proyectos destacados con enlaces
  - 🌐 **Redes**: Enlaces a perfiles sociales (GitHub, LinkedIn)
  - 📧 **Contacto**: Formulario funcional con validación en tiempo real
- **Accesibilidad**: Implementado con ARIA labels y navegación por teclado
- **Rendimiento**: CSS optimizado, imágenes pre-cargadas, y JavaScript diferido

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Grid/Flexbox
- **JavaScript (Vanilla)**: Interactividad sin dependencias externas
- **SVG**: Iconos escalables para redes sociales

## 📋 Requisitos Previos

No se requieren dependencias ni herramientas de construcción. Solo necesitas un navegador web moderno.

## 🚀 Instalación y Uso

### Opción 1: Clonar el repositorio

```bash
# Clonar este repositorio
git clone https://github.com/rololevy/portfolio.git

# Navegar al directorio del proyecto
cd portfolio

# Abrir index.html en tu navegador
# Puedes usar cualquier servidor local, por ejemplo:
python -m http.server 8000
# o
npx serve
```

### Opción 2: Descargar directamente

1. Descarga el repositorio como archivo ZIP
2. Extrae los archivos
3. Abre `index.html` en tu navegador web

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── main.js            # JavaScript para interactividad
├── assets/            # Recursos estáticos
│   ├── favicon.png    # Icono del sitio
│   └── img/           # Imágenes
│       └── fotoPortfolio.jpg
└── README.md          # Este archivo
```

## ✨ Funcionalidades Destacadas

### Navegación Inteligente
- Menú sticky que permanece visible al hacer scroll
- Resaltado automático de la sección activa
- Smooth scrolling entre secciones

### Formulario de Contacto
- Validación en tiempo real de todos los campos
- Mensajes de error personalizados
- Diseño user-friendly con feedback visual

### Barras de Habilidades
- Visualización dinámica de niveles de competencia
- Diseño limpio y moderno
- Fácil actualización de habilidades

## 🎨 Personalización

Para personalizar este portfolio para tu propio uso:

1. **Información Personal**: Actualiza el contenido en `index.html`
   - Nombre y descripción en la sección hero
   - Texto "Sobre mí"
   - Lista de habilidades con porcentajes

2. **Estilos**: Modifica las variables CSS en `styles.css`
   ```css
   :root {
     --brand: #6e56cf;    /* Color principal */
     --bg: #f7f7fb;       /* Color de fondo */
     --ink: #242629;      /* Color del texto */
     /* ... más variables */
   }
   ```

3. **Imágenes**: Reemplaza las imágenes en la carpeta `assets/`
   - Foto de perfil: `assets/img/fotoPortfolio.jpg`
   - Favicon: `assets/favicon.png`

4. **Enlaces**: Actualiza los enlaces a tus redes sociales y proyectos

## 👨‍💻 Autor

**Orlando Aguilera**
- GitHub: [@rololevy](https://github.com/rololevy)
- LinkedIn: [Orlando Aguilera](https://www.linkedin.com/in/orlando-aguilera/)

## 📝 Descripción Técnica

Este proyecto es un ejemplo de desarrollo web front-end utilizando únicamente tecnologías nativas del navegador, sin frameworks ni librerías externas. Demuestra:

- Código limpio y bien estructurado
- Mejores prácticas de HTML semántico
- CSS moderno con custom properties
- JavaScript vanilla eficiente
- Diseño accesible y responsivo
- Optimización de rendimiento

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias de mejora, no dudes en:
1. Abrir un issue
2. Crear un pull request
3. Contactarme directamente

## 📄 Licencia

Este proyecto está disponible como código abierto para fines educativos y de referencia.

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!
