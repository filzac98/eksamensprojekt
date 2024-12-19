<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const nostalgiaItems = document.querySelectorAll(".nostalgia-item");
=======
document.addEventListener('DOMContentLoaded', () => {
  const nostalgiaItems = document.querySelectorAll('.nostalgia-item');
>>>>>>> Oliver-Forside-Extension

  const handleScroll = () => {
    nostalgiaItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Check if the item is within 40% of the viewport height
      if (itemTop <= viewportHeight * 0.4) {
<<<<<<< HEAD
        item.classList.add("slide-in");
=======
        item.classList.add('slide-in');
>>>>>>> Oliver-Forside-Extension
      }
    });
  };

  // Add scroll listener
<<<<<<< HEAD
  window.addEventListener("scroll", handleScroll);
=======
  window.addEventListener('scroll', handleScroll);
>>>>>>> Oliver-Forside-Extension

  // Trigger it on page load for any items already in view
  handleScroll();
});
