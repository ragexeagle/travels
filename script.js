const destinations = [
  {
    id: 1,
    image: 'https://static.toiimg.com/photo/msid-107700466,width-96,height-65.cms',
    name: 'Singapore',
    places: 806,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?q=80',
    name: 'New York',
    places: 220,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80',
    name: 'Maldives',
    places: 648,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80',
    name: 'Paris',
    places: 372,
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HVe76jaQd_dQwtjJoh9q87Tm52Ev1vWEuw&s',
    name: 'London',
    places: 412,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80',
    name: 'Dubai',
    places: 530,
  },
];

const carousel = document.getElementById('carousel');
let currentIndex = 0;
let itemsToShow = getVisibleCount();

function getVisibleCount() {
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
}

function renderCarousel() {
  // Render all cards in a row (only once)
  carousel.innerHTML = '';
  destinations.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" />
      <div class="details">
        <h3>${dest.name}</h3>
        <p>${dest.places} Places</p>
      </div>
    `;
    carousel.appendChild(card);
  });
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const card = carousel.querySelector('.destination-card');
  if (!card) return;
  const cardStyle = getComputedStyle(card);
  const cardWidth = card.offsetWidth + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);
  const maxIndex = Math.max(0, destinations.length - itemsToShow);
  if (currentIndex > maxIndex) currentIndex = 0; // Loop to start if over
  const offset = currentIndex * cardWidth;
  carousel.style.transform = `translateX(-${offset}px)`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  updateCarouselPosition();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const maxIndex = Math.max(0, destinations.length - itemsToShow);
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop to start
  }
  updateCarouselPosition();
});

window.addEventListener('resize', () => {
  itemsToShow = getVisibleCount();
  updateCarouselPosition();
});

// Initial render
renderCarousel();



function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menu.classList.contains('active')) {
    // Close menu
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
    document.body.style.overflow = ""; // Enable scroll
    
    // First start the transition
    menu.style.opacity = "0";
    menu.style.transform = "translateY(-20px)";
    
    // Then remove the active class after transition completes
    setTimeout(() => {
      menu.classList.remove('active');
    }, 300); // Match this to your transition duration
  } else {
    // Open menu
    menu.classList.add('active');
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
    document.body.style.overflow = "hidden"; // Prevent background scroll
    
    // Trigger transition
    setTimeout(() => {
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
    }, 10);
  }
}










const heroSlides = [
  {
    heading: "THE WORLD",
    subheading: "Travel",
    text: "Embark on journeys to numerous and often distant places, experiencing different cultures, and immersing oneself in new environments.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    btn: "Read More",
    btnLink: "#About"
  },
  {
    heading: "Adventure Awaits",
    subheading: "Explore",
    text: "Discover new places and make memories with Sri Siva Travels. Book your next journey with us and experience comfort and safety.",
    img: "https://images.unsplash.com/photo-1465156799763-2c087c332922",
    btn: "Book Now",
    btnLink: "#Services"
  },
  {
    heading: "Comfort & Safety",
    subheading: "Relax",
    text: "Our modern fleet and professional crew ensure you travel with peace of mind. Join thousands of happy customers today!",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    btn: "View Features",
    btnLink: "#Info"
  }
];

let heroCurrent = 0;
let heroInterval = null;

function renderHeroCarousel() {
  const heroCarousel = document.getElementById('hero-carousel');
  const heroDots = document.getElementById('hero-dots');
  heroCarousel.innerHTML = '';
  heroDots.innerHTML = '';
  heroSlides.forEach((slide, idx) => {
    // Slide as background
    const slideDiv = document.createElement('div');
    slideDiv.className = 'hero-slide' + (idx === heroCurrent ? ' active' : '');
    slideDiv.style.backgroundImage = window.innerWidth > 991 ? `url('${slide.img}')` : 'none';
    slideDiv.innerHTML = `
      <div class="hero-slide-content">
        <h3>${slide.subheading}</h3>
        <h1>${slide.heading}</h1>
        <p>${slide.text}</p>
        <a class="btn" href="${slide.btnLink}">${slide.btn}</a>
      </div>
    `;
    heroCarousel.appendChild(slideDiv);

    // Dot
    const dot = document.createElement('div');
    dot.className = 'hero-carousel-dot' + (idx === heroCurrent ? ' active' : '');
    dot.addEventListener('click', () => {
      heroCurrent = idx;
      renderHeroCarousel();
      resetHeroInterval();
    });
    heroDots.appendChild(dot);
  });
}

// Add this to handle resize and remove image on mobile
window.addEventListener('resize', () => {
  renderHeroCarousel();
});

function heroNextSlide() {
  heroCurrent = (heroCurrent + 1) % heroSlides.length;
  renderHeroCarousel();
}
function heroPrevSlide() {
  heroCurrent = (heroCurrent - 1 + heroSlides.length) % heroSlides.length;
  renderHeroCarousel();
}
function resetHeroInterval() {
  clearInterval(heroInterval);
  heroInterval = setInterval(heroNextSlide, 6000);
}

document.addEventListener('DOMContentLoaded', function() {
  renderHeroCarousel();
  document.getElementById('hero-next').onclick = () => { heroNextSlide(); resetHeroInterval(); };
  document.getElementById('hero-prev').onclick = () => { heroPrevSlide(); resetHeroInterval(); };
  heroInterval = setInterval(heroNextSlide, 6000);
});




/* FAQ */

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
    document.body.style.overflow = "";
  } else {
    menu.classList.add('active');
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
    document.body.style.overflow = "hidden";
  }
}

// Close mobile menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");
      const closeIcon = document.getElementById("close-icon");
      menu.classList.remove('active');
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
      document.body.style.overflow = "";
    });
  });

  // Hide mobile menu when resizing to desktop
  window.addEventListener('resize', function() {
    const menu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    if (window.innerWidth > 991) {
      menu.classList.remove('active');
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});
