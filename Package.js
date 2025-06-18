document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("tripCardsContainer");

  trips.forEach(trip => {
    const highlightsHtml = trip.highlights?.slice(0, 10).map(h => `
      <li><span class="dot"></span>${h}</li>
    `).join('') || '';

    const card = document.createElement("div");
    card.className = "trip-card";
    card.innerHTML = `
      <div class="trip-image">
        <img src="${trip.imageUrl}" alt="${trip.title}" />
        <div class="overlay"></div>
        <div class="title">${trip.title}</div>
        ${trip.price ? `<div class="price-badge">${trip.price}</div>` : ''}
      </div>
      <div class="trip-content">
        <div class="info-bar">
          <div>${trip.duration}</div>
          <div>${trip.locations.join(' - ')}</div>
          <div>${trip.packageProvider}</div>
        </div>
        ${trip.description ? `<p class="description">${trip.description}</p>` : ''}
        ${trip.highlights?.length ? `
          <div class="highlights">
            <h4>Highlights:</h4>
            <ul>${highlightsHtml}</ul>
          </div>` : ''}
        <div class="actions">
          <button class="outline view-itinerary-btn" data-id="${trip.id}">Itinerary</button>
          <a href="tel:7994911404"><button class="book-now">Enquire Now</button></a>
        </div>
      </div>
    `;

    // Bootstrap column wrapper
    const col = document.createElement("div");
    col.className = "mt-5 col-12 col-md-6 col-lg-6";
    col.appendChild(card);
    grid.appendChild(col);
  });
});

// Delegated click for itinerary button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-itinerary-btn")) {
    const id = e.target.getAttribute("data-id");
    const trip = trips.find(t => t.id === id);
    if (trip) showItinerary(trip);
  }
});

// Show itinerary modal
function showItinerary(trip) {
  document.getElementById('modal-title').textContent = trip.title;
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = "";

  trip.itinerary?.forEach(day => {
    const card = document.createElement("div");
    card.className = "itinerary-day";
    const img = day.imageUrl ? `<img src="${day.imageUrl}" class="day-image">` : "";
    card.innerHTML = `
      <div class="itinerary-header">
        <h3>Day ${day.day}</h3>
        <span>📍 ${day.location}</span>
      </div>
      <div class="day-content">
        ${img}
        <div class="day-details">
          <h4>${day.title}</h4>
          <p>${day.description}</p>
          <p><strong>Accommodation:</strong> ${day.accommodation}</p>
        </div>
      </div>
    `;
    modalBody.appendChild(card);
  });

  document.getElementById('itinerary-modal').classList.remove('hidden');
}

// Close itinerary modal
function closeModal() {
  document.getElementById('itinerary-modal').classList.add('hidden');
}
