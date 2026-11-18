// =============================================
// PRIYA MISHRA — PORTFOLIO INTERACTIONS
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile navigation
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });
  }

  // 2. Automatic footer year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Certificate image preview modal
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModalButton = document.getElementById("modal-close");

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".certificate-card img").forEach((image) => {
    image.addEventListener("click", () => {
      // Do not open the preview for a missing certificate file.
      if (!image.complete || image.naturalWidth === 0) {
        alert("This certificate image is not available yet. Add the image to the certificates folder.");
        return;
      }
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeModalButton.focus();
    });
  });

  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  // 4. Helpful console message for development
  console.log("Welcome to Priya Mishra's portfolio!");
  console.log("Learn. Build. Lead. Grow. 💜");
});
