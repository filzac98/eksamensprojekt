document.addEventListener("DOMContentLoaded", () => {
  const cartOverlay = document.getElementById("cart-overlay");
  const cartOverlayBackground = document.getElementById(
    "cart-overlay-background"
  );
  const addToCartBtn = document.getElementById("add-to-cart");
  const closeCartBtn = document.getElementById("close-cart");

  const cartIcon = document.getElementById("cart-icon");
  const cartHeader = document.getElementById("cart-header");
  const closeCartIcon = document.getElementById("close-cart-icon");

  function showCart() {
    cartOverlay?.classList.add("active");
    cartOverlayBackground?.classList.add("active");
  }

  function hideCart() {
    cartOverlay?.classList.remove("active");
    cartOverlayBackground?.classList.remove("active");
  }

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
  // Close cart when clicking outside the cart overlay
  cartOverlayBackground.addEventListener("click", hideCart);

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
