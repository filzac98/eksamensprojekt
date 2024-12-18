document.addEventListener("DOMContentLoaded", () => {
  const nostalgiaItems = document.querySelectorAll(".nostalgia-item");

  const handleScroll = () => {
    nostalgiaItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Check if the item is within 40% of the viewport height
      if (itemTop <= viewportHeight * 0.4) {
        item.classList.add("slide-in");
      }
    });
  };

  // Add scroll listener
  window.addEventListener("scroll", handleScroll);

  // Trigger it on page load for any items already in view
  handleScroll();
});
