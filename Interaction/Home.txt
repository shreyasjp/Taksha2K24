const filters = document.querySelectorAll(".filters");
const eventTiles = document.querySelectorAll(".event-tile");

function toggleActive(element) {
  element.classList.toggle("active-filter");
  const selectedFilters = Array.from(filters)
    .filter((f) => f.classList.contains("active-filter"))
    .map((f) => f.id.replace("-filter", ""));
  filterEvents(selectedFilters);
}

function filterEvents(selectedFilters) {
  eventTiles.forEach((tile) => {
    const tileCategories = tile.id;
    let isVisible = false;

    // Check if the event tile has any of the selected filters
    isVisible = selectedFilters.some((filter) => {
      switch (filter) {
        case "coding":
          return (
            tileCategories === "bugbounty" || tileCategories === "creatrix"
          );
        case "gaming":
          return (
            tileCategories === "onepeice" || tileCategories === "lethallegion"
          );
        case "intellectual":
          return (
            tileCategories === "twistnturn" || tileCategories === "thinkquake"
          );
        default:
          return false;
      }
    });

    // Show all events if no specific filter is selected
    if (!selectedFilters.length) {
      isVisible = true;
    }

    tile.classList.toggle("hide", !isVisible);
  });
}

const modal = document.getElementById("doc-modal");
const posterDisplay = document.getElementById("poster-display");

// Get references to event posters
const eventPosters = document.querySelectorAll(".event-poster");

// Add click event listener to each event poster
eventPosters.forEach((poster) => {
  poster.addEventListener("click", () => {
    // Get the source of the clicked poster
    const posterSource = poster.getAttribute("src");

    // Set the source of the modal's poster display
    posterDisplay.setAttribute("src", posterSource);

    // Display the modal and overlay
    modal.classList.remove("hide");
  });
});

// Close modal and overlay when clicking outside the modal
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

function handleLoad() {
  const loader = document.getElementById("page-loader");
  const content = document.getElementById("container");
  const navBar = document.querySelector("nav");
  const footer = document.querySelector(".footer");
  const footer_div = document.querySelector('.footer-div');

  if (loader && content) {
    loader.remove();
    content.classList.remove("hide");
    if (navBar) {
      navBar.classList.remove("hide");
    }
    if (footer) {
      footer.classList.remove("hide");
    }
    if (footer_div) {
      footer_div.classList.remove("hide");
    }
  }
}

window.addEventListener("load", handleLoad);