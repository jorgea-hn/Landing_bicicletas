/**
 * CICLOPEDALEO - Lógica Interactiva y Optimización de Conversión
 * Soporte para WhatsApp directo, agenda de mantenimiento, filtros de catálogo y SEO interactivo
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. CONFIGURACIÓN DEL NEGOCIO
  // ==========================================
  const STORE_CONFIG = {
    name: 'CICLOPEDALEO',
    slogan: 'Pedaleando Contigo',
    whatsappPhone: '573001234567', // Número para Colombia (+57)
    defaultWhatsAppMsg: 'Hola Ciclopedaleo, quiero agendar un mantenimiento / cotizar un repuesto',
    email: 'contacto@ciclopedaleo.com',
    address: 'Calle 72 # 48 - 15, Barranquilla, Colombia (Taller Principal)',
    hours: 'Lun - Sáb: 8:00 AM - 7:00 PM | Dom: 7:00 AM - 1:00 PM'
  };

  // Helper para generar URLs de WhatsApp
  function getWhatsAppUrl(customMessage) {
    const text = encodeURIComponent(customMessage || STORE_CONFIG.defaultWhatsAppMsg);
    return `https://wa.me/${STORE_CONFIG.whatsappPhone}?text=${text}`;
  }

  // ==========================================
  // 2. NAVEGACIÓN MÓVIL & HEADER STICKY
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mainNavbar = document.getElementById('main-navbar');
  const navLinks = document.querySelectorAll('.nav-link-item');

  function toggleMobileMenu(forceClose = false) {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('hidden');
    if (forceClose || !isHidden) {
      mobileMenu.classList.add('hidden');
      if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Header scroll detection para fondo translúcido más denso
  window.addEventListener('scroll', () => {
    if (!mainNavbar) return;
    if (window.scrollY > 40) {
      mainNavbar.classList.add('bg-[#111111]/95', 'shadow-2xl', 'border-b', 'border-white/10');
      mainNavbar.classList.remove('bg-[#111111]/80');
    } else {
      mainNavbar.classList.remove('bg-[#111111]/95', 'shadow-2xl', 'border-b', 'border-white/10');
      mainNavbar.classList.add('bg-[#111111]/80');
    }

    // Botón volver arriba
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      if (window.scrollY > 450) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    }
  });

  // ==========================================
  // 3. FILTROS DE CATÁLOGO DE REPUESTOS
  // ==========================================
  const catalogFilterBtns = document.querySelectorAll('.catalog-tab-btn');
  const catalogItems = document.querySelectorAll('.catalog-item');

  catalogFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase activa de todos
      catalogFilterBtns.forEach(b => {
        b.classList.remove('bg-brandRed', 'text-white', 'shadow-lg', 'shadow-brandRed/30');
        b.classList.add('bg-zinc-900', 'text-zinc-400', 'hover:text-white', 'border-zinc-800');
      });

      // Activar botón seleccionado
      btn.classList.add('bg-brandRed', 'text-white', 'shadow-lg', 'shadow-brandRed/30');
      btn.classList.remove('bg-zinc-900', 'text-zinc-400', 'hover:text-white', 'border-zinc-800');

      const category = btn.getAttribute('data-category');

      catalogItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'todos' || itemCat === category) {
          item.classList.remove('hidden');
          item.classList.add('animate-fadeIn');
        } else {
          item.classList.add('hidden');
          item.classList.remove('animate-fadeIn');
        }
      });
    });
  });

  // ==========================================
  // 4. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
  // ==========================================
  const accordionButtons = document.querySelectorAll('.faq-accordion-header');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('open');

      // Cerrar otros acordeones para mantener orden visual
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.classList.remove('open');
        c.style.maxHeight = null;
      });
      document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
        if (icon) icon.classList.add('open');
      }
    });
  });

  // ==========================================
  // 5. MODAL & CALCULADORA DE AGENDAMIENTO TALLER
  // ==========================================
  const bookingModal = document.getElementById('booking-modal');
  const openBookingBtns = document.querySelectorAll('.open-booking-modal-btn');
  const closeBookingBtns = document.querySelectorAll('.close-booking-modal-btn');
  const bookingForm = document.getElementById('maintenance-booking-form');

  function openBookingModal(planName = '') {
    if (!bookingModal) return;
    bookingModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    if (planName) {
      const serviceSelect = document.getElementById('booking-service');
      if (serviceSelect) {
        for (let option of serviceSelect.options) {
          if (option.text.toLowerCase().includes(planName.toLowerCase()) || option.value.toLowerCase().includes(planName.toLowerCase())) {
            option.selected = true;
            break;
          }
        }
      }
    }
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const plan = btn.getAttribute('data-plan') || '';
      openBookingModal(plan);
    });
  });

  closeBookingBtns.forEach(btn => {
    btn.addEventListener('click', closeBookingModal);
  });

  // Cerrar modal al presionar Escape o clic fuera
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal && !bookingModal.classList.contains('hidden')) {
      closeBookingModal();
    }
  });

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });
  }

  // Enviar formulario de agendamiento hacia WhatsApp formateado
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const bikeType = document.getElementById('booking-bike-type')?.value || 'Bicicleta no especificada';
      const service = document.getElementById('booking-service')?.value || 'Mantenimiento General';
      const bikeBrand = document.getElementById('booking-bike-brand')?.value || 'No indicada';
      const customerName = document.getElementById('booking-name')?.value || 'Ciclista';
      const customerPhone = document.getElementById('booking-phone')?.value || '';
      const preferredDate = document.getElementById('booking-date')?.value || 'Lo antes posible';
      const notes = document.getElementById('booking-notes')?.value || 'Sin observaciones adicionales';

      const customMessage = `🚴‍♂️ *NUEVA RESERVA DE TALLER - CICLOPEDALEO*\n\n` +
        `👤 *Cliente:* ${customerName}\n` +
        `📱 *Contacto:* ${customerPhone}\n` +
        `🚲 *Tipo de Bicicleta:* ${bikeType}\n` +
        `🏷️ *Marca / Modelo:* ${bikeBrand}\n` +
        `🔧 *Servicio Solicitado:* ${service}\n` +
        `📅 *Fecha Sugerida:* ${preferredDate}\n` +
        `📝 *Notas del estado:* ${notes}\n\n` +
        `Hola Ciclopedaleo, quiero confirmar mi cita para dejar mi bici a punto.`;

      showToast('¡Redirigiendo a WhatsApp para confirmar tu cita!', 'success');
      setTimeout(() => {
        window.open(getWhatsAppUrl(customMessage), '_blank');
        closeBookingModal();
        bookingForm.reset();
      }, 1200);
    });
  }

  // ==========================================
  // 6. FORMULARIO DE CONTACTO DIRECTO
  // ==========================================
  const contactForm = document.getElementById('direct-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Ciclista';
      const phone = document.getElementById('contact-phone')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const interest = document.getElementById('contact-interest')?.value || 'Consulta General';
      const message = document.getElementById('contact-message')?.value || '';

      const contactMsg = `🚴‍♂️ *CONSULTA WEB - CICLOPEDALEO*\n\n` +
        `👤 *Nombre:* ${name}\n` +
        `📱 *Teléfono:* ${phone}\n` +
        `✉️ *Correo:* ${email}\n` +
        `🔍 *Interés:* ${interest}\n` +
        `💬 *Mensaje:* ${message}\n\n` +
        `Hola Ciclopedaleo, me gustaría recibir más información.`;

      showToast('¡Gracias por escribirnos! Conectando con nuestro equipo técnico...', 'success');
      setTimeout(() => {
        window.open(getWhatsAppUrl(contactMsg), '_blank');
        contactForm.reset();
      }, 1000);
    });
  }

  // ==========================================
  // 7. SISTEMA DE TOAST NOTIFICATIONS
  // ==========================================
  function showToast(message, type = 'info') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none px-4 max-w-md w-full';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `p-4 rounded-xl shadow-2xl backdrop-blur-md text-white border flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto ${
      type === 'success' 
        ? 'bg-zinc-900/95 border-brandRed text-white shadow-brandRed/20' 
        : 'bg-zinc-900/95 border-zinc-700 text-zinc-200'
    }`;

    toast.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-brandRed/20 border border-brandRed/40 flex items-center justify-center text-brandRed shrink-0">
        <i class="fa-solid ${type === 'success' ? 'fa-check' : 'fa-bell'}"></i>
      </div>
      <p class="text-sm font-medium leading-snug">${message}</p>
    `;

    toastContainer.appendChild(toast);

    // Animación de entrada
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Desaparecer después de 3.5 segundos
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // ==========================================
  // 8. ASIGNAR CONSULTA DE PRODUCTO DIRECTA
  // ==========================================
  const productQuoteBtns = document.querySelectorAll('.product-quote-btn');
  productQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.getAttribute('data-product') || 'Repuesto de Ciclismo';
      const productBrand = btn.getAttribute('data-brand') || 'Marca';
      const customMsg = `Hola Ciclopedaleo, quiero consultar disponibilidad y precio del repuesto: *${productName}* (${productBrand}). ¿Tienen stock en taller?`;
      window.open(getWhatsAppUrl(customMsg), '_blank');
    });
  });

  // Botón volver arriba
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Log de confirmación de inicialización
  console.log('🚴‍♂️ CICLOPEDALEO Landing Page cargada correctamente. ¡Pedaleando Contigo!');
});
