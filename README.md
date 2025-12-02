# 🎮 Aprende Jugando

Una aplicación web educativa interactiva diseñada para que niños de **3 a 7 años** aprendan de manera divertida a través de cuentos, juegos y contenido multimedia.

## 📖 Descripción General

**Aprende Jugando** es una plataforma de aprendizaje temprano que combina elementos visuales, narrativos y juegos interactivos. Ofrece múltiples módulos educativos en un entorno seguro y amigable para los niños pequeños.

### 🎯 Público Objetivo
- Niños de 3 a 7 años
- Padres y educadores que buscan reforzar el aprendizaje en casa
- Instituciones educativas

---

## 🧠 Módulos Educativos

1. **Abecedario** - Aprende las letras del alfabeto con canciones y juegos interactivos
2. **Cuentos** - 15 cuentos clásicos con narración profesional e ilustraciones
3. **Colores** - Identifica y aprende los colores principales
4. **Figuras** - Reconocimiento de formas geométricas básicas
5. **Matemáticas** - Conceptos básicos de números y operaciones sencillas
6. **Ilustraciones** - Biblioteca interactiva de imágenes animadas

---

## 💻 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos responsive con gradientes y animaciones
- **JavaScript (Vanilla)** - Interactividad sin dependencias externas
- **Google Fonts** - Tipografía Fredoka (diseño infantil)
- **Sin dependencias npm** - Proyecto ligero sin gestor de paquetes

---

## 📁 Estructura del Proyecto

```
multimedia/
├── index.html                 # Página de inicio (portada)
├── README.md                  # Este archivo
├── .gitignore                 # Configuración de Git
│
├── docs/                      # 📚 DOCUMENTACIÓN COMPLETA
│   ├── ARQUITECTURA.md        # Diagrama de flujo y estructura técnica
│   └── ACCESIBILIDAD.md       # Guía WCAG 2.1 y a11y
│
├── pages/                     # Páginas HTML de la aplicación
│   ├── menu.html              # Menú principal
│   ├── abecedario.html        # Módulo de abecedario
│   ├── antes_dormir.html      # Sección de cuentos para dormir
│   ├── biblioteca.html        # Biblioteca de cuentos
│   ├── colores.html           # Módulo de colores
│   ├── construccion.html      # Página de construcción
│   ├── cuentos.html           # Listado de cuentos
│   ├── figuras.html           # Módulo de figuras
│   ├── ilustraciones.html     # Galería de ilustraciones
│   ├── matematicas.html       # Módulo de matemáticas
│   ├── narracion.html         # Narración de cuentos
│   └── ver_cuento.html        # Visor de cuentos individual
│
├── js/                        # Scripts JavaScript
│   ├── cuentos.js             # Lógica de cuentos interactivos
│   ├── datos_cuentos.js       # Base de datos de cuentos (15 historias)
│   └── ilustraciones.js       # Lógica de galería de ilustraciones
│
├── css/                       # Estilos CSS
│   ├── style.css              # Estilos generales y componentes
│   ├── grid-cuatro.css        # Layout grid de 4 columnas
│   ├── grid-tres.css          # Layout grid de 3 columnas
│   ├── biblioteca.css         # Estilos de biblioteca
│   ├── ilustraciones.css      # Estilos de galería
│   └── narracion.css          # Estilos de narración
│
└── assets/                    # Recursos multimedia
    ├── images/                # Imágenes (PNG, JPG)
    │   └── imagen-central.png # Imagen principal de inicio
    ├── videos/                # Archivos de video
    └── historias/             # Textos de historias
        ├── bosque.txt         # Historia: El Bosque
        ├── colores.txt        # Historia: Los Colores
        └── viaje.txt          # Historia: El Viaje
```

---

## 📚 Documentación

### Para entender el proyecto:
- **[ARQUITECTURA.md](./docs/ARQUITECTURA.md)** - Diagrama de flujo, estructura técnica, convenciones de código y puntos de extensión
- **[ACCESIBILIDAD.md](./docs/ACCESIBILIDAD.md)** - Cumplimiento WCAG 2.1, pruebas de accesibilidad y checklist para menores

---

## 🚀 Cómo Usar

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (para Google Fonts desde CDN)
- Archivos multimedia locales (imágenes, videos)

### Instalación Local

1. **Clonar o descargar el proyecto**
   ```bash
   git clone https://github.com/LeydLayd/multimedia.git
   cd multimedia
   ```

2. **Abrir en navegador**
   - Opción 1: Hacer doble clic en `index.html`
   - Opción 2: Usar un servidor local
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js
     npx http-server
     
     # Con Live Server (VS Code extension)
     Right-click en index.html → Open with Live Server
     ```

3. **Acceder a la aplicación**
   - Local: `http://localhost:8000` (o el puerto configurado)

---


## ♿ Accesibilidad

**Aprende Jugando** cumple con estándares **WCAG 2.1 Nivel AA** para garantizar que todos los niños, incluidos aquellos con discapacidades, puedan usar la aplicación.

Revisa **[ACCESIBILIDAD.md](./docs/ACCESIBILIDAD.md)** para:
- ✅ Contraste de colores verificado
- ✅ Navegación por teclado
- ✅ Soporte screen readers
- ✅ Alt-text en imágenes
- ✅ Checklist de validación

---

## 💡 Notas Importantes

- El proyecto **no usa dependencias externas** (npm), facilitando el despliegue
- Los cuentos se almacenan como datos embebidos en `js/datos_cuentos.js`
- Para reproducción de audio/video, verificar que los archivos estén en `assets/`
- Revisar compatibilidad de navegadores para APIs de HTML5 avanzadas
- **Siempre mantener estándares de accesibilidad** (ver [ACCESIBILIDAD.md](./docs/ACCESIBILIDAD.md))

---


**¡Gracias por usar Aprende Jugando!** 🎉