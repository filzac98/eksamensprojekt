document.addEventListener("DOMContentLoaded", () => {
  const cartOverlay = document.getElementById("cart-overlay");
  const addToCartBtn = document.getElementById("add-to-cart");
  const closeCartBtn = document.getElementById("close-cart");

  const cartIcon = document.getElementById("cart-icon");
  const cartHeader = document.getElementById("cart-header");
  const closeCartIcon = document.getElementById("close-cart-icon");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      cartOverlay?.classList.add("active");
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", () => {
      cartOverlay?.classList.remove("active");
    });
  }

  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      cartHeader?.classList.add("active");
    });
  }

  if (closeCartIcon) {
    closeCartIcon.addEventListener("click", () => {
      cartHeader?.classList.remove("active");
    });
  }

  // Close cart when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      cartOverlay?.classList.remove("active");
    }
    if (e.target === cartHeader) {
      cartHeader?.classList.remove("active");
    }
  });
});
