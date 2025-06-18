const vehicles = [
  {
    name: "Swift",
    image: "images/vehicle-swift.jpeg",
    capacity: "4-Seater",
    type: ""
  },
  {
    name: "Innova-Crysta",
    image: "images/Innova.jpeg",
    capacity: "6-Seater",
    type: ""
  },
    {
    name: "Innova",
    image: "images/vehicle-innova.jpeg",
    capacity: "7-Seater",
    type: ""
  },
  {
    name: "Ertiga",
    image: "images/vehicle-ertica.jpeg",
    capacity: "7-Seater",
    type: ""
  },
  {
    name: "Traveller",
    image: "images/Vehicle-Traveller.jpeg",
    capacity: "17-Seater",
    type: ""
  },
  {
    name: "Traveller",
    image: "images/Vehicle-Traveller1.jpeg",
    capacity: "17-Seater",
    type: ""
  },
  {
    name: "Tempo Traveller",
    image: "images/Vehicle-Traveller3.jpeg",
    capacity: "17-Seater",
    type: ""
  },
 
];

const grid = document.getElementById("vehicleGrid");

vehicles.forEach(vehicle => {
  const col = document.createElement("div");
  col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}" />
      <div class="card-body">
        <h5 class="card-title">${vehicle.name}</h5>
        <p class="card-text">${vehicle.type}</p>
        <p><strong>Capacity:</strong> ${vehicle.capacity}</p>
        <a href="tel:7994911404" class="btn btn-primary w-100">Enquire Now</a>
      </div>
    </div>
  `;
  grid.appendChild(col);
});
