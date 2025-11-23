# Blueprint: Portafolio de José Ricardo García Quispe

## 1. Descripción General

Este documento describe la estructura y funcionalidad del portafolio web de José Ricardo García Quispe. El objetivo es crear una experiencia de usuario de una sola página (Single Page Application) moderna e interactiva que destaque su perfil como Ingeniero de Sistemas y sus habilidades en tecnología.

La aplicación consta de una pantalla de carga inicial seguida del portafolio principal, organizado en secciones navegables mediante scroll.

---

## 2. Características y Diseño Implementados

Esta sección documenta el estado actual del proyecto tal como está implementado en `index.html`.

### 2.1. Estructura General
- **Single Page Application:** Todo el contenido reside en un único archivo `index.html`.
- **Scroll Snapping:** La página utiliza `scroll-snap-type: y mandatory` para una navegación fluida entre secciones a pantalla completa o auto-ajustables.
- **Navegación Fija:** Un menú flotante con efecto *glassmorphism* (`backdrop-blur`) en la parte superior que indica la sección activa.
- **Diseño Responsivo:** El layout se adapta a dispositivos móviles y de escritorio usando clases de Tailwind CSS.
- **Modo Oscuro/Claro:** Soporte nativo para temas claro y oscuro utilizando variables CSS y modificadores `dark:` de Tailwind.

### 2.2. Componentes y Secciones
- **Pantalla de Carga (Loader):**
    - Cubre toda la pantalla al inicio.
    - Secuencia de animación: "Hola." -> "Soy José Ricardo García Quispe" -> Barra de progreso.
    - Desvanecimiento suave (`fade-out`) al completar la carga para revelar el contenido.
- **Navegación Principal:**
    - Enlaces: `Inicio`, `Acerca de Mí`, `Trayectoria`, `Certificados`, `Habilidades`.
    - Iconos de *Material Symbols* para cada enlace.
    - Estado "activo" automático basado en la posición del scroll (`IntersectionObserver`).
- **Sección `Inicio` (Hero):**
    - Presentación principal con nombre y título ("Ingeniero de Sistemas").
    - Botón de llamada a la acción (CTA) para ir a "Acerca de Mí".
- **Sección `Acerca de Mí`:**
    - Descripción personal enfocada en innovación y optimización.
    - Tres tarjetas destacadas: *Analítico*, *Solucionador de Problemas*, *Adaptabilidad*.
    - Información de contacto (Email y Teléfono).
- **Sección `Trayectoria`:**
    - Línea de tiempo vertical (Timeline) alternada.
    - Detalla educación (Universidad de Lima) y experiencia laboral (Gestión Educativa, Negocio Independiente, Import Export JG SAC).
- **Sección `Certificados`:**
    - Grid de tarjetas con imagen, título y descripción.
    - Certificaciones actuales: Ingeniería de Sistemas, Seguridad Electrónica, PCAP Python.
- **Sección `Habilidades`:**
    - Grid de tarjetas para 8 habilidades técnicas clave (Machine Learning, Análisis, Cloud, etc.).
    - Cada tarjeta incluye un icono representativo.
- **Footer:**
    - Resumen del perfil.
    - Enlaces rápidos de navegación.
    - Enlaces a redes sociales (LinkedIn, GitHub) usando *Feather Icons*.
    - Copyright dinámico.

### 2.3. Tecnologías y Estilos
- **Framework CSS:** Tailwind CSS (vía CDN).
- **Tipografía:** `Inter` (Google Fonts).
- **Iconografía:**
    - `Material Symbols Outlined` (Google) para la UI general.
    - `Feather Icons` para redes sociales y detalles específicos.
- **JavaScript:**
    - Lógica de carga (`setTimeout`).
    - Observadores de intersección (`IntersectionObserver`) para:
        - Activar enlaces del menú al hacer scroll.
        - Disparar animaciones de entrada (`fade-in-up`, `fade-in-left`) cuando los elementos entran en pantalla.
    - Inyección dinámica de contenido HTML.

### 2.4. Página de CV Detallado (`cv.html`)
- **Propósito:** Vista detallada y profesional del currículum vitae.
- **Diseño:** Estilo distinto con paleta de colores personalizada (Cream, Dark Green, Gold) y tipografía `Spline Sans`.
- **Características:**
    - Encabezado fijo con marca "LUMERT".
    - Sección Hero con foto de perfil y resumen profesional.
    - Grid de habilidades blandas y técnicas con iconos.
    - Línea de tiempo detallada de educación y experiencia laboral.
    - Botón "BACK" para regresar a `index.html` con animación de salida.


---

## 3. Estado del Proyecto

El proyecto base está **completado**. La estructura HTML, los estilos y la lógica JS están integrados en `index.html`.

### Pasos Futuros Sugeridos
1.  **Optimización de Assets:** Reemplazar imágenes de placeholder (Unsplash) con imágenes reales de certificados y proyectos propios.
2.  **Formulario de Contacto:** Implementar un formulario funcional en lugar de solo enlaces `mailto`.
3.  **SEO:** Mejorar metaetiquetas y descripciones para motores de búsqueda.

## 4. Plan de Implementación Actual: Mejora de Navegación (Sprint Actual)

**Objetivo:** Implementar un menú de navegación interactivo "State-driven" (activado por clic) con animación "Fade In Up" consistente en todas las páginas, alternando entre diseños Circular y Vertical.

**Tareas:**
- [ ] **Definir Estilos Base:** Crear clases CSS para la animación `fade-in-up` y el estado `.active`.
- [ ] **Implementar Lógica JS:** Script para manejar el evento `click` (toggle) y cerrar el menú al hacer clic fuera (`click outside`).
- [ ] **Actualizar `index.html`:**
    - Diseño: **Circular**.
    - Color: Azul (`bg-blue-500`).
- [ ] **Actualizar `cv_berry.html`:**
    - Diseño: **Vertical**.
    - Color: Fucsia (`bg-primary` / `bg-fuchsia-600`).
- [ ] **Actualizar `cv_ocean.html`:**
    - Diseño: **Circular**.
    - Color: Cian (`bg-cyan-500`).
- [ ] **Actualizar `cv_sunset.html`:**
    - Diseño: **Vertical**.
    - Color: Naranja (`bg-orange-500`).
- [ ] **Actualizar `cv.html`:**
    - Diseño: **Circular**.
    - Color: Esmeralda (`bg-emerald-500`).

