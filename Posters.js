document.addEventListener("DOMContentLoaded", () => {
  const posters = [
    { image: "images/Poster1.png", alt: "Poster 1", date: "2025-06-18" },
    // Add more posters here
  ];

  const gallery = document.getElementById("posterGallery");

  posters.forEach(poster => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    const card = document.createElement("div");
    card.className = "poster-card";

    const img = document.createElement("img");
    img.src = poster.image;
    img.alt = poster.alt;
    img.classList.add("poster-img");

    img.addEventListener("click", () => {
      openModal(poster.image, poster.alt);
    });

    const date = document.createElement("div");
    date.className = "upload-date";
    date.textContent = `Uploaded on: ${poster.date}`;

    card.appendChild(img);
    card.appendChild(date);
    col.appendChild(card);
    gallery.appendChild(col);
  });
});

// Modal functions
function openModal(src, alt) {
  const modal = document.getElementById("posterModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = src;
  modalCaption.textContent = alt;
}

function closeModal() {
  document.getElementById("posterModal").style.display = "none";
}
