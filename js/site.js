/**
 * site.js - AWS Community Day
 * Refatorado para Vanilla JS (ES6+) visando maior performance e facilidade de manutenção.
 * O jQuery foi removido para reduzir a dívida técnica e o tamanho do pacote.
 */

const initializeNavigation = () => {
  const toggleBtn = document.getElementById("toggle");
  const navBar = document.getElementById("nav-bar");
  const navLinks = document.querySelectorAll("#nav-bar ul li");

  if (toggleBtn && navBar) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("on");
      navBar.classList.toggle("active");
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navBar && toggleBtn) {
        navBar.classList.remove("active");
        toggleBtn.classList.remove("on");
      }
    });
  });
};

const handleSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      const hash = this.getAttribute("href");
      if (hash !== "#" && hash !== "") {
        event.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth"
          });
        }
      }
    });
  });

  const scrollBtn = document.querySelector(".scroll");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight - 70,
        behavior: "smooth"
      });
    });
  }
};

const handleScrollEvents = () => {
  const hdrContent = document.querySelector(".section.hdr > .content");
  const hdrSection = document.querySelector(".section.hdr");
  const navBar = document.getElementById("nav-bar");
  const table = document.querySelector(".table");

  if (hdrContent) {
    hdrSection.style.paddingTop = `${hdrContent.offsetHeight}px`;
  }

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (hdrContent && hdrSection) {
      const hdrHeight = hdrContent.offsetHeight;
      hdrContent.style.top = `${-scrollTop / 1.5}px`;
      hdrContent.style.opacity = `${1 - scrollTop / hdrHeight}`;

      if (scrollTop < hdrHeight) {
        hdrSection.style.background = `rgba(0,0,0,${(scrollTop / hdrHeight) / 0.25})`;
      }
    }

    if (navBar && hdrContent) {
      if (scrollTop >= hdrContent.offsetHeight) {
        navBar.classList.add("fixi-it");
        document.body.style.paddingTop = `${navBar.offsetHeight}px`;
      } else {
        navBar.classList.remove("fixi-it");
        document.body.style.paddingTop = "0px";
      }
    }

    if (table && navBar) {
      const tableTop = table.offsetTop;
      const tableHeight = table.offsetHeight;
      const navHeight = navBar.offsetHeight;

      if (scrollTop > tableTop - navHeight && scrollTop < tableTop + tableHeight) {
        table.classList.add("fixit");
        table.classList.remove("absit");
      } else if (scrollTop > tableTop - navHeight && scrollTop > tableTop + tableHeight) {
        table.classList.add("absit");
        table.classList.remove("fixit");
      } else {
        table.classList.remove("absit", "fixit");
      }
    }
  });
};

const setupModals = () => {
  const modalCloseBtns = document.querySelectorAll("#myModal button, .close");
  const iframe = document.querySelector("#myModal iframe");
  
  modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (iframe) iframe.removeAttribute("src");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  handleSmoothScrolling();
  handleScrollEvents();
  setupModals();
});