// JavaScript for toggling tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("button");
  const cardsContainers = document.querySelectorAll(".cards");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and containers
      tabs.forEach((btn) => btn.classList.remove("active"));
      cardsContainers.forEach((container) => container.classList.remove("active"));

      // Add active class to clicked tab and corresponding container
      tab.classList.add("active");
      cardsContainers[index].classList.add("active");
    });
  });
});
