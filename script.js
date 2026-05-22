const filterButtons = document.querySelectorAll(".filter-btn");
const scheduleCards = document.querySelectorAll(".schedule-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCity = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    scheduleCards.forEach((card) => {
      const cardCity = card.dataset.city;

      if (selectedCity === "all" || selectedCity === cardCity) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});