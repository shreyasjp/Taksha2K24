const filters = document.querySelectorAll('.filters');
const eventTiles = document.querySelectorAll('.event-tile');

function toggleActive(element) {
  element.classList.toggle('active-filter');
  const selectedFilters = Array.from(filters)
    .filter(f => f.classList.contains('active-filter'))
    .map(f => f.id.replace('-filter', ''));
  filterEvents(selectedFilters);
}

function filterEvents(selectedFilters) {
  eventTiles.forEach(tile => {
    const tileCategories = tile.id;
    let isVisible = false;

    // Check for each filter individually, allowing multiple filters to apply
    selectedFilters.forEach(filter => {
      if (filter === 'coding' && (tileCategories === 'bugbounty' || tileCategories === 'creatrix')) {
        isVisible = true;
      } else if (filter === 'gaming' && (tileCategories === 'onepeice' || tileCategories === 'lethallegion')) {
        isVisible = true;
      } else if (filter === 'intellectual' && (tileCategories === 'twistnturn' || tileCategories === 'thinkquake')) {
        isVisible = true;
      }
    });

    // Show all events if no specific filter is selected
    if (!selectedFilters.length) {
      isVisible = true;
    }

    tile.classList.toggle('hide', !isVisible);
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth'
      });
  }
}

// Event listener for scroll
let lastScrollTime = 0;
document.addEventListener('wheel', (event) => {
  const currentTime = new Date().getTime();
  if (currentTime - lastScrollTime < 800) {
      return;
  }

  lastScrollTime = currentTime;

  // You can adjust the deltaY threshold based on your design
  if (event.deltaY > 50) {
      // Scrolling down
      scrollToSection('about');
  } else if (event.deltaY < -50) {
      // Scrolling up
      scrollToSection('home');
  }
});

// Toggle active class for filters
function toggleActive(element) {
  element.classList.toggle('active');
  // Add your filter logic here
}