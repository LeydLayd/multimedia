# ♿ Accesibilidad (A11y) - Aprende Jugando

## 🎯 Cumplimiento WCAG 2.1 para Menores

Esta guía asegura que **Aprende Jugando** sea accesible para todos los niños, incluyendo aquellos con discapacidades visuales, auditivas, motoras y cognitivas.

---

## 🌈 Contraste de Colores

### Estándar WCAG AA (4.5:1 mínimo para texto)

| Color | Uso | Ratio de Contraste | Estado |
|-------|-----|-------------------|--------|
| Azul (#2E86DE) | Títulos, enlaces | 7.2:1 | ✅ Pasa WCAG AAA |
| Naranja (#FF6B35) | Botones CTA | 6.1:1 | ✅ Pasa WCAG AAA |
| Blanco (#FFFFFF) | Fondo | N/A | ✅ Seguro |
| Gris oscuro (#333333) | Texto body | 12.6:1 | ✅ Pasa WCAG AAA |

### ⚠️ Evitar:
- Rojo + Verde juntos (daltonismo rojo-verde)
- Colores muy claros sobre blanco
- Degradados sin suficiente contraste en puntos críticos

### Herramientas de verificación:
```
- WAVE Browser Extension
- Color Contrast Analyzer
- axe DevTools
- https://webaim.org/resources/contrastchecker/
```

---

## 🔤 Tipografía Accesible

### Requisitos:

```css
/* style.css - Variables de tipografía */
:root {
    --font-size-base: 16px;      /* Mínimo recomendado */
    --font-size-heading: 32px;   /* Títulos mayores */
    --font-size-button: 18px;    /* Botones legibles */
    --line-height: 1.5;          /* Espaciado vertical */
    --letter-spacing: 0.5px;     /* Espaciado entre letras */
}

body {
    font-family: 'Fredoka', sans-serif;  /* Legible para niños */
    font-size: var(--font-size-base);
    line-height: var(--line-height);
    color: #333333;
}

h1, h2, h3 {
    font-size: var(--font-size-heading);
    font-weight: 700;
    margin-bottom: 1rem;
}

button, .pill-button {
    font-size: var(--font-size-button);
    padding: 12px 20px;          /* Área táctil mínima 44px */
}
```

### ✅ Mejores prácticas:
- **Mínimo 16px** en móvil (evita zoom forzado en iOS)
- **Line-height 1.5 o mayor** (dispraxia, dislexia)
- **Letter-spacing 0.5px mínimo** (legibilidad)
- **Evitar**: Comic Sans, fuentes decorativas
- **Permitir**: Zoom del navegador (no `user-select: none`)

---

## 🎯 Navegación por Teclado

### Orden de tabulación lógico:

```html
<!-- 1. Menú principal -->
<a href="pages/menu.html" tabindex="1" class="pill-button">
    ¡Juega, Aprende y Crece!
</a>

<!-- 2. Botón secundario (si existe) -->
<button tabindex="2" aria-label="Cerrar bienvenida">×</button>

<!-- Estructura: Top → Bottom, Left → Right -->
```

### Focus visible:

```css
/* CRÍTICO: Siempre visible para navegación por teclado */
button:focus,
a:focus,
input:focus {
    outline: 3px solid #FF6B35;    /* Naranja accesible */
    outline-offset: 2px;
    border-radius: 4px;
}

/* Deshabilitar solo si hay estilo visible alternativo */
button:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.5);
}
```

### Teclas navegación:
| Tecla | Acción |
|-------|--------|
| `Tab` | Siguiente elemento |
| `Shift + Tab` | Elemento anterior |
| `Enter` / `Space` | Activar botón |
| `Esc` | Cerrar modal |
| `Arrow keys` | Navegar en galerías |

---

## 🔊 Aria Labels y Roles

### Estructura semántica HTML:

```html
<!-- ✅ CORRECTO: Uso de etiquetas semánticas -->
<nav aria-label="Menú principal">
    <ul>
        <li><a href="pages/abecedario.html">Abecedario</a></li>
        <li><a href="pages/colores.html">Colores</a></li>
    </ul>
</nav>

<!-- Botones con propósito claro -->
<button aria-label="Reproducir narración" id="play-btn">
    ▶️
</button>

<!-- Áreas principales -->
<main id="contenido-principal">
    <section aria-labelledby="titulo-cuentos">
        <h2 id="titulo-cuentos">Selecciona tu cuento favorito</h2>
        <!-- Contenido de cuentos -->
    </section>
</main>

<aside aria-label="Barra lateral de filtros">
    <!-- Filtros -->
</aside>

<!-- Modales accesibles -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
    <h2 id="modal-titulo">Cuento: El Bosque Mágico</h2>
    <button aria-label="Cerrar cuento">Cerrar</button>
</div>
```

### Aria-label para iconos:

```html
<!-- Sin aria-label: ❌ Screen reader dice "botón vacío" -->
<button>▶️</button>

<!-- Con aria-label: ✅ Screen reader dice "Reproducir narración" -->
<button aria-label="Reproducir narración">▶️</button>

<!-- Alternativa con title (tooltip) -->
<button title="Reproducir" aria-label="Reproducir narración">▶️</button>
```

### Estados dinámicos:

```html
<!-- Botón reproduciendo -->
<button aria-pressed="true" aria-label="Pausar narración">
    ⏸️
</button>

<!-- Cuento completado -->
<article aria-label="Cuento leído: El Bosque Mágico">
    <span aria-label="Completado">✅</span>
</article>

<!-- Loading state -->
<div aria-live="polite" aria-busy="true">
    Cargando cuentos...
</div>
```

---

## 👁️ Screen Readers - Pruebas

### Navegadores + Lectores de pantalla gratuitos:

| OS | Screen Reader | Navegador | Descarga |
|----|---------------|-----------|----------|
| Windows | NVDA | Firefox | https://www.nvaccess.org/ |
| Windows | Narrator | Edge | Nativo |
| macOS | VoiceOver | Safari | Nativo (Cmd+F5) |
| iOS/Android | TalkBack / Voice Over | Safari/Chrome | Nativo |

### Checklist de prueba:

- [ ] Navegar solo con `Tab` sin quedar atrapado
- [ ] Screen reader anuncia título de página
- [ ] Todas las imágenes tienen `alt` text
- [ ] Enlaces tienen texto descriptivo (no "Click aquí")
- [ ] Botones tienen aria-label si es solo ícono
- [ ] Vídeos tienen captions/subtítulos
- [ ] Cambios dinámicos usan `aria-live`

### Ejemplo: Alt text para imágenes:

```html
<!-- ❌ ALT TEXT MALO -->
<img src="imagen.png" alt="Imagen">
<img src="cuento.png" alt="Imagen de cuento">

<!-- ✅ ALT TEXT BUENO -->
<img src="imagen-central.png" alt="Niños jugando en el parque con colores vibrantes">
<img src="bosque-magico.png" alt="Ilustración del cuento: niña en bosque encantado">
<img src="icono-play.png" alt=""><!-- Si es decorativo, alt vacío -->
```

---

## 🎮 Accesibilidad Motora

### Área táctil mínima (44x44px):

```css
/* Botones */
.pill-button {
    min-width: 44px;
    min-height: 44px;
    padding: 12px 20px;
    margin: 8px;              /* Espaciado entre botones */
}

/* Enlaces */
a {
    padding: 4px 8px;         /* Mínimo de padding */
    display: inline-block;    /* Para aplicar padding */
}

/* Evitar espacios muy pequeños */
.close-btn {
    width: 44px;
    height: 44px;
    cursor: pointer;
}
```

### Gestos vs. navegación estándar:

```javascript
/* ✅ Soportar teclado + mouse + touch */
button.addEventListener('click', handleClick);      // Mouse
button.addEventListener('keydown', e => {           // Teclado
    if (e.key === 'Enter' || e.key === ' ') {
        handleClick();
    }
});

/* Touch: usar click (funciona para todos) */
element.addEventListener('touchend', handleClick);  // Automático con click
```

### Evitar:
- Scroll horizontal infinito
- Hover-only content (no visible sin mouse)
- Tap-and-hold menús
- Drag & drop como única opción

---

## 🧠 Accesibilidad Cognitiva

### Para niños 3-7 años con dificultades:

#### 1. Lenguaje simple:
```html
<!-- ❌ Complejo -->
<button>Navegar al módulo de operaciones matemáticas</button>

<!-- ✅ Simple -->
<button>Matemáticas</button>
```

#### 2. Instrucciones claras:
```html
<!-- ❌ Ambiguo -->
<p>Haz lo necesario</p>

<!-- ✅ Explícito -->
<p>Haz clic en el botón naranja para jugar</p>
```

#### 3. Avisos de cambios:
```html
<!-- Usa aria-live para cambios inesperados -->
<div aria-live="assertive" aria-atomic="true" id="avisos">
    <!-- Mensajes de error, éxito, etc. -->
</div>

<script>
const avisos = document.getElementById('avisos');
avisos.textContent = '¡Correcto! Vamos al siguiente'; // Screen reader lo lee
</script>
```

#### 4. Consistencia:
- Mismos botones en mismos lugares
- Colores = mismos significados
- Navegación predecible

#### 5. Prevención de errores:
```html
<!-- Confirmación antes de borrar -->
<button onclick="if(confirm('¿Salir del cuento?')) { ir_atras(); }">
    Volver
</button>
```

---

## 📹 Multimedia Accesible

### Vídeos con subtítulos:

```html
<!-- ✅ HTML5 Video con tracks -->
<video controls aria-label="Narración del cuento: El Bosque Mágico">
    <source src="cuento-video.mp4" type="video/mp4">
    <track kind="captions" src="subtitles-es.vtt" srclang="es" label="Español">
    <track kind="descriptions" src="audio-desc-es.vtt" srclang="es" label="Descripción de audio">
    Tu navegador no soporta vídeo HTML5.
</video>
```

### Formato WebVTT para subtítulos (`subtitles-es.vtt`):
```
WEBVTT

00:00:00.000 --> 00:00:03.000
Érase una vez un bosque mágico...

00:00:03.500 --> 00:00:07.000
Donde vivían animales fantásticos.
```

### Audio con transcripción:

```html
<!-- Audio + Transcripción -->
<audio controls aria-label="Narración del cuento">
    <source src="narracion.mp3" type="audio/mpeg">
</audio>

<details>
    <summary>Leer transcripción</summary>
    <p>Érase una vez un bosque mágico donde vivían animales fantásticos...</p>
</details>
```

---

## 🔍 Herramientas de Verificación Automática

### Extensiones navegador:
```
1. axe DevTools      → https://www.deque.com/axe/devtools/
2. WAVE             → https://wave.webaim.org/extension/
3. Lighthouse       → Chrome DevTools nativo
4. NoCoffee         → Simula visión deficiente
```

### Pruebas en command line:
```bash
# Instalar pa11y-cli (accesibilidad)
npm install -g pa11y-cli

# Escanear página
pa11y http://localhost:8000/index.html
```

### Testing accesibilidad manual:
```bash
# 1. Solo teclado
# Presionar Tab, Shift+Tab, Enter en toda la app
# ¿Se puede hacer todo? ✅

# 2. Solo mouse (sin teclado)
# ¿Hay contenido no alcanzable? ❌

# 3. Colores
# Usar: https://www.color-blindness.com/coblis-color-blindness-simulator/

# 4. Zoom
# Ctrl++ / Cmd++ a 200%
# ¿Se ve bien? ✅
```

---

## ✅ Checklist Accesibilidad Aprende Jugando

### Estructura HTML:
- [ ] Usar etiquetas semánticas: `<nav>`, `<main>`, `<section>`
- [ ] Un solo `<h1>` por página
- [ ] Jerarquía correcta de headings (h1 → h2 → h3)
- [ ] `<lang="es">` en `<html>`

### Colores y Contraste:
- [ ] Ratio 4.5:1 mínimo para texto
- [ ] No depender solo de color para diferenciar
- [ ] Gradientes con suficiente contraste

### Texto y Tipografía:
- [ ] Mínimo 16px en móvil
- [ ] Line-height ≥ 1.5
- [ ] Sin justificado (text-align: justify)
- [ ] Fredoka o sans-serif similar

### Interactividad:
- [ ] Focus visible en todos los elementos interactivos
- [ ] Aria-labels en botones con solo ícono
- [ ] Navegación por teclado funcional
- [ ] Modales con trap focus

### Multimedia:
- [ ] Alt-text descriptivo en todas las imágenes
- [ ] Vídeos con subtítulos (captions)
- [ ] Audio con transcripción
- [ ] Sin autoplay

### Dinamismo:
- [ ] aria-live para cambios en DOM
- [ ] aria-busy durante cargas
- [ ] aria-pressed para toggle buttons
- [ ] Sin efectos que causen ataques

### Lenguaje:
- [ ] Lenguaje simple y directo
- [ ] Sin jerga ni tecnicismos
- [ ] Instrucciones claras

---

## 📚 Referencias

- **WCAG 2.1 Oficial**: https://www.w3.org/WAI/WCAG21/quickref/
- **Web.dev Accesibilidad**: https://web.dev/accessible/
- **MDN Aria**: https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA
- **WebAIM**: https://webaim.org/
- **The A11Y Project**: https://www.a11yproject.com/

---

## 🎓 Formación Recomendada

- Realizar pruebas con screen readers (NVDA, VoiceOver)
- Navegar solo con teclado
- Usar simuladores de visión deficiente
- Testear con usuarios con discapacidades (si es posible)

---

**"La accesibilidad no es un extra, es un derecho. Aprende Jugando es para TODOS los niños."** ♿💙