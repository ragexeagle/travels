const trips = [
  {
    id: "pkg1",
    title: "Kerala with Kanyakumari",
    duration: "5 Nights / 6 Days",
    locations: ["Trivandrum", "Alleppey", "Munnar", "Kanyakumari", "Cochin"],
    packageProvider: "South India Escapes",
    imageUrl: "images/kanyakumari.jpeg",
    price: "",
    description: "Explore the perfect blend of Kerala’s natural beauty and Kanyakumari’s cultural heritage. From serene beaches and lush hill stations to vibrant temples and peaceful backwaters.",
    highlights: [
      "Take in stunning Sunset views at Kanyakumari",
      "Reach the top of Eravikulam National Park",
      "Enjoy the backwater at Alleppey",
      "Experience the charming of Fort Kochi",
      "Feel divine at Ananta Padmanabhaswamy Temple at Trivandrum"
    ],
    itinerary: [
      {
        day: 1,
        location: "Trivandrum",
        title: "Arrival & Sightseeing",
        description: "11:30 AM Pick up from Trivandrum Airport, check-in, visit Chitra Art Gallery, Kuthiramalika Palace Museum, Napier Museum & Zoo, Aazhimala Siva Statue, Kovalam Lighthouse and Beaches.",
        accommodation: "Stay at Trivandrum",
        imageUrl: "images/Museum.jpeg"
      },
      {
        day: 2,
        location: "Kanyakumari",
        title: "Kanyakumari Day Tour",
        description: "8:00 AM Breakfast. Depart to Kanyakumari. Enroute visit Tirparappu Waterfalls and Padmanabhapuram Palace. Sightseeing: Vivekananda Rock, Thiruvalluvar Statue, Gandhi Memorial, Triveni Sangam, Kanyakumari Amman Temple, Sunset Point. Return to Trivandrum.",
        accommodation: "Stay at Trivandrum",
        imageUrl: "images/Kanyakumari.jpeg"
      },
      {
        day: 3,
        location: "Trivandrum to Alleppey",
        title: "Transfer & Backwaters",
        description: "8:00 AM Breakfast, darshan at Ananta Padmanabhaswamy Temple, check out from hotel, transfer to Alleppey. 2:00 PM check-in, Shikara boat ride, visit Alleppey Lighthouse and Beach.",
        accommodation: "Stay at Alleppey",
        imageUrl: "images/allepy.jpeg"
      },
      {
        day: 4,
        location: "Alleppey to Munnar",
        title: "Transfer & Sightseeing",
        description: "9:00 AM Breakfast and check out. Transfer to Munnar. Enroute visit Cheeyapara and Valara Waterfalls. Check in at hotel, evening resort leisure.",
        accommodation: "Stay at Munnar",
        imageUrl: "images/Waterfalls.png"
      },
      {
        day: 5,
        location: "Munnar",
        title: "Full Day Sightseeing",
        description: "8:30 AM Breakfast. Visit Eravikulam National Park, Tea Museum, Mattupetty Dam, Echo Point, Kundala Dam, Tea Factory, Photo Point, KFDC Garden, Blossom Park, Botanical Garden.",
        accommodation: "Stay at Munnar",
        imageUrl: "images/Munnar.png"
      },
      {
        day: 6,
        location: "Munnar to Cochin",
        title: "Transfer & Departure",
        description: "8:00 AM Breakfast and check out. Transfer to Cochin. Visit Mattancherry Palace, Jewish Synagogue, Jew Town, Fort Kochi Beach, Chinese Fishing Nets, Marine Drive. Drop at Cochin Airport.",
        accommodation: "Trip ends in Cochin",
        imageUrl: "images/Cochin.png"
      }
    ]
  },

  {
    id: "pkg2",
    title: "Trivandrum City Tours",
    duration: "1 Day",
    locations: ["Trivandrum", "Kovalam"],
    packageProvider: "City Explorer Kerala",
    imageUrl: "images/Kovalam.png",
    price: "",
    description: "Enjoy a full-day tour of Trivandrum’s cultural and spiritual landmarks, followed by a relaxing sunset at the scenic Kovalam beaches.",
    highlights: [
      "Anantha Padmanabhaswamy Temple",
      "Napier Museum & Zoo",
      "Kuthiramalika Palace Museum",
      "Attukal Bhagavathi Temple",
      "Kovalam Lighthouse and Hawa Beach"
    ],
    itinerary: [
      {
        day: 1,
        location: "Trivandrum & Kovalam",
        title: "City Sightseeing & Beach Sunset",
        description: "Visit Anantha Padmanabhaswamy Temple, Pazhavangadi Ganapathy Temple, Varahamoorthy Temple, Kuthiramalika Palace Museum, Chitra Art Gallery, Attukal Bhagavathi Amman Temple, Napier Museum, Zoo and Aquarium. After lunch, explore Priyadarshini Planetarium and head to Kovalam for Lighthouse and Hawa Beach.",
        accommodation: "Drop after sunset at Kovalam",
        imageUrl: "images/Kovalam1.png"
      }
    ]
  },

  {
    id: "pkg3",
    title: "Ooty & Kodaikanal Hill Station Tour",
    duration: "5 Days / 4 Nights",
    locations: ["Ooty", "Kodaikanal", "Coimbatore"],
    packageProvider: "Hills of South India",
    imageUrl: "images/Kodaikanal.png",
    price: "",
    description: "Experience the serene beauty of the Nilgiris and the Western Ghats with this hill station tour. From Ooty's lush gardens and peaks to Kodaikanal's lakes and viewpoints, this journey is perfect for nature lovers and couples alike.",
    highlights: [
      "Botanical Garden in Ooty",
      "Boating at Ooty Lake",
      "View from Doddabetta Peak",
      "Bryant Park and Pillar Rocks",
      "Kodaikanal Lake and Coaker's Walk"
    ],
    itinerary: [
      {
        day: 1,
        location: "Trivandrum to Ooty",
        title: "Arrival in Ooty",
        description: "Travel from Trivandrum to Coimbatore, then transfer to Ooty. Check into your hotel and relax or explore Ooty Lake.",
        accommodation: "Stay at Ooty",
        imageUrl: "images/OotyLake.png"
      },
      {
        day: 2,
        location: "Ooty",
        title: "Ooty Sightseeing",
        description: "Visit Government Botanical Gardens, Doddabetta Peak, and take a boat ride on Ooty Lake.",
        accommodation: "Stay at Ooty",
        imageUrl: "images/Doddabetta.png"
      },
      {
        day: 3,
        location: "Ooty to Kodaikanal",
        title: "Transfer to Kodaikanal",
        description: "Drive to Kodaikanal. Check-in and enjoy a walk around the lake or visit nearby viewpoints.",
        accommodation: "Stay at Kodaikanal",
        imageUrl: "images/KodaikanalLake.png"
      },
      {
        day: 4,
        location: "Kodaikanal",
        title: "Kodaikanal Sightseeing",
        description: "Visit Bryant Park, Pillar Rocks, Coaker's Walk and enjoy boating at Kodaikanal Lake.",
        accommodation: "Stay at Kodaikanal",
        imageUrl: "images/PillarRocks.png"
      },
      {
        day: 5,
        location: "Kodaikanal to Trivandrum",
        title: "Return Journey",
        description: "Travel back to Coimbatore from Kodaikanal and proceed to Trivandrum.",
        accommodation: "Trip Ends",
        imageUrl: "images/Return1.png"
      }
    ]
  }
];
