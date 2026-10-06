document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const navLinks = document.querySelectorAll(".nav a");
  const sections = [...document.querySelectorAll("main section[id]")];

  const activateNav = () => {
    let currentId = "#home";
    const scrollPos = window.scrollY + 130;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = `#${section.id}`;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === currentId;
      link.classList.toggle("active", isActive);
    });
  };

  activateNav();
  window.addEventListener("scroll", activateNav, { passive: true });

  const form = document.querySelector("#contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('input[type="text"]')?.value || "There";
      const email = form.querySelector('input[type="email"]')?.value || "";
      const message = form.querySelector("textarea")?.value || "";

      console.log("Portfolio contact form submitted:", { name, email, message });
      alert("Thanks for reaching out! I will get back to you soon.");
      form.reset();
    });
  }
});
