# 🚴‍♂️ CICLOPEDALEO - Landing Page Oficial (Taller y Repuestos de Ciclismo)

Landing Page oficial de alta conversión para **CICLOPEDALEO** ("Pedaleando Contigo"), desarrollada con enfoque **Mobile-First**, **SEO Local avanzado**, **Tailwind CSS**, **Font Awesome v6** y **JavaScript vanilla** sin dependencias pesadas.

---

## 🎨 Paleta de Colores de la Marca
- **Color Primario (Acento y CTAs):** Rojo vibrante `#E53935` (hover `#D32F2F`, sombras con glow `rgba(229, 57, 53, 0.4)`).
- **Color Secundario y Fondos:** Negro absoluto `#111111` y `#0A0A0A` con tarjetas elevadas `#18181B`.
- **Estructura y Textos:** Blanco puro `#FFFFFF` y escalas de gris limpias para legibilidad máxima.

---

## 🚀 Características Implementadas

### 1. 🔍 SEO Local & Metadatos
- **Metaetiquetas optimizadas:**
  - `mantenimiento de bicicletas`
  - `repuestos para ciclas`
  - `taller de bicicletas`
  - `venta de accesorios de ciclismo`
- **Jerarquía estricta de encabezados:** Un único `<h1>` potente en la sección Hero (`Tu pasión en dos ruedas: Mantenimiento experto y los mejores repuestos para tu bicicleta`).
- **Schema.org JSON-LD:** Estructura completa de `BikeStore`, `AutoRepair` y `LocalBusiness` con horarios, geolocalización, catálogo de servicios y calificaciones de clientes.
- **Open Graph y Twitter Cards:** Optimizado para previsualización enriquecida en WhatsApp, Facebook y Twitter con imágenes generadas en alta resolución.

### 2. ⚡ Iconografía Profesional Font Awesome 6
- 100% libre de emojis planos en la interfaz. Uso de clases oficiales CDN:
  - `<i class="fa-solid fa-bicycle"></i>`
  - `<i class="fa-solid fa-wrench"></i>`
  - `<i class="fa-brands fa-whatsapp"></i>`
  - `<i class="fa-solid fa-store"></i>`
  - `<i class="fa-solid fa-screwdriver-wrench"></i>`
  - `<i class="fa-solid fa-boxes-stacked"></i>`
  - `<i class="fa-solid fa-calendar-check"></i>`

### 3. 📱 Estructura y Secciones
1. **Header Sticky:** Logotipo con escudo rojo, eslogan *"Pedaleando Contigo"*, menú de navegación, contacto rápido y menú hamburguesa animado para móviles.
2. **Hero de Alto Impacto:** H1 canónico, mención destacada de marcas líderes (**Shimano, OnTrail, SunRace, Kenda, Sensah, Optimus, KMC, CST Tires**), botones CTA para agendamiento y catálogo, más fotografía del taller con insignias flotantes de confianza.
3. **Marcas Aliadas:** Grid visual con insignias de distribuidor autorizado para las 8 marcas líderes de la identidad.
4. **Servicios Especializados:**
   - Mantenimiento Preventivo y Ajustes
   - Mantenimiento Correctivo & Overhaul Total
   - Venta de Repuestos y Componentes Originales
   - Frenos Hidráulicos & Purgas
   - Mantenimiento de Suspensiones
   - Accesorios y Equipamiento para el Ciclista
5. **Tarifas y Planes de Taller:** Planes Preventivo ($45k), General Pro ($85k) y Overhaul Élite ($150k) con desglose de ítems incluidos y botón directo de agendamiento.
6. **Catálogo de Repuestos Interactivo:** Pestañas de filtrado (Transmisiones, Llantas & Ruedas, Frenos, Cadenas, Accesorios) con botón de cotización por WhatsApp con producto y marca preseleccionada.
7. **Calculadora / Modal de Agendamiento:** Modal interactivo para seleccionar tipo de bicicleta (MTB, Ruta, Urbana, Gravel, etc.), servicio, fecha y síntomas para generar el mensaje directo hacia WhatsApp.
8. **Prueba Social & Testimonios:** Reseñas reales de ciclistas con puntuación 4.9/5 y distintivos locales.
9. **FAQ Interactivo:** Acordeón con preguntas clave sobre tiempos de entrega, compatibilidad de repuestos, garantías y envíos nacionales.
10. **Canales de Contacto Directo:** Formulario validado con envío a WhatsApp, horarios, dirección física con mapa interactivo y correo institucional.
11. **Botón Flotante de WhatsApp:** Posicionado en la esquina inferior derecha con icono de Font Awesome, animación de pulso y mensaje exacto:
    > *"Hola Ciclopedaleo, quiero agendar un mantenimiento / cotizar un repuesto"*

---

## 🛠️ Cómo Ejecutar Localmente

### Opción 1: Abrir directamente en el navegador
Puedes hacer doble clic en `index.html` o abrirlo con la extensión *Live Server* en tu editor.

### Opción 2: Servidor Node.js ligero (Puerto 3003)
```bash
node server.js
```
Abre en tu navegador: [http://localhost:3003](http://localhost:3003)

---

## 📁 Estructura del Proyecto
```
ciclopedaleo-taller-bicicletas/
├── index.html                   # Landing page completa y autónoma
├── server.js                    # Servidor local Node.js (puerto 3003)
├── README.md                    # Documentación técnica y SEO
└── assets/
    ├── css/
    │   └── styles.css           # Estilos personalizados, glows y scrollbar
    ├── js/
    │   └── main.js              # Lógica de WhatsApp, filtros, modales y toast
    └── images/
        ├── hero-workshop.jpg    # Fotografía de taller ciclístico con acentos rojos
        └── service-mechanic.jpg # Fotografía de mecánico calibrando transmisión
```
