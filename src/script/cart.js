document.addEventListener("DOMContentLoaded", () => {
  const cartOverlay = document.getElementById("cart-overlay");
  const addToCartBtn = document.getElementById("add-to-cart");
  const closeCartBtn = document.getElementById("close-cart");

  // Show cart when "Add to Cart" is clicked
  addToCartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("active");
  });

  // Hide cart when close button is clicked
  closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
  });

  // Optional: Close the cart when clicking outside it
  window.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.remove("active");
    }
  });
});
