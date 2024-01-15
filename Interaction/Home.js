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

    // Check if the event tile has any of the selected filters
    isVisible = selectedFilters.some(filter => {
      switch (filter) {
        case 'coding':
          return tileCategories === 'bugbounty' || tileCategories === 'creatrix';
        case 'gaming':
          return tileCategories === 'onepeice' || tileCategories === 'lethallegion';
        case 'intellectual':
          return tileCategories === 'twistnturn' || tileCategories === 'thinkquake';
        default:
          return false;
      }
    });

    // Show all events if no specific filter is selected
    if (!selectedFilters.length) {
      isVisible = true;
    }

    tile.classList.toggle('hide', !isVisible);
  });
}