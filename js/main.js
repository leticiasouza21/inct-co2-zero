
/* ====================================
   INCT CO2 ZERO - JAVASCRIPT GERAL
==================================== */

document.addEventListener('DOMContentLoaded', () => {

  // MENU RESPONSIVO

  const menuButton = document.getElementById('menuButton');
  const menu = document.getElementById('menu');

  if (menuButton && menu) {

    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');

      menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
      );

      menuButton.setAttribute(
        'aria-label',
        isOpen ? 'Fechar menu' : 'Abrir menu'
      );

      menuButton.textContent = isOpen ? '✕' : '☰';
    });

    // FECHAR MENU AO CLICAR EM UM LINK

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');

        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
      });
    });

    // FECHAR MENU COM ESC

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        menu.classList.remove('active');

        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
      }
    });
  }

  // ATUALIZAR ANO DO RODAPÉ

  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ANIMAÇÕES DE ENTRADA

  const elements = document.querySelectorAll('.reveal');

  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if ('IntersectionObserver' in window && !reducedMotion) {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

  } else {
    elements.forEach(element => {
      element.classList.add('visible');
    });
  }

});

// ========================================
// MENU SUSPENSO DE PROJETOS
// ========================================

document.querySelectorAll(".nav-dropdown").forEach((menu) => {
  const botao = menu.querySelector(".nav-dropdown-toggle");

  if (!botao) return;

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    botao.setAttribute(
      "aria-expanded",
      String(aberto)
    );
  });

  document.addEventListener("click", (evento) => {
    if (!menu.contains(evento.target)) {
      menu.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
    }
  });

  menu.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      menu.classList.remove("aberto");
      botao.setAttribute("aria-expanded", "false");
      botao.focus();
    }
  });
});

