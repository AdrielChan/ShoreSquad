// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Fetch and display 4-day weather forecast from NEA API
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.textContent = 'Loading weather...';

  fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
    .then(response => response.json())
    .then(data => {
      const forecasts = data.items[0].forecasts;
      let html = '<div class="forecast-grid">';
      forecasts.forEach(day => {
        html += `
          <div class="forecast-day">
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-desc">${day.forecast}</div>
            <div class="forecast-temp">${day.temperature.low}&deg;C - ${day.temperature.high}&deg;C</div>
            <div class="forecast-rh">Humidity: ${day.relative_humidity.low}% - ${day.relative_humidity.high}%</div>
            <div class="forecast-wind">Wind: ${day.wind.speed.low}-${day.wind.speed.high} km/h ${day.wind.direction}</div>
          </div>
        `;
      });
      html += '</div>';
      weatherInfo.innerHTML = html;
    })
    .catch(() => {
      weatherInfo.textContent = 'Weather forecast unavailable.';
    });

  // Example: Load events (placeholder)
  const eventList = document.getElementById('event-list');
  eventList.innerHTML = '<li>Cleanup at Sandy Beach - June 10, 10:00 AM</li>';

  // Example: Load crew (placeholder)
  const crewList = document.getElementById('crew-list');
  crewList.textContent = 'You + 4 friends';

  // Example: Map placeholder
  const mapContainer = document.getElementById('map-container');
  mapContainer.textContent = 'Map will be here soon!';
});

// JavaScript Features to Use:
// - Fetch API for real-time weather and event data
// - Geolocation API for user location
// - LocalStorage for saving user preferences
// - Debounced input for search
// - Lazy loading for map and images
// - Service Worker for offline support
// - ARIA attributes for accessibility
