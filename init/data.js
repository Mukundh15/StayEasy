const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "beach",
    geometry: { type: "Point", coordinates: [-118.799985, 34.0259223] }
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "urban",
    geometry: { type: "Point", coordinates: [-74.0060152, 40.7127281] }
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-106.8223228, 39.1910983] }
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "historic",
    geometry: { type: "Point", coordinates: [11.2558136, 43.7698712] }
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "treehouse",
    geometry: { type: "Point", coordinates: [-122.6764815, 45.5202471] }
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "beach",
    geometry: { type: "Point", coordinates: [-86.8510466, 21.161908] }
  },
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "lake",
    geometry: { type: "Point", coordinates: [-120.0432686, 39.0968493] }
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "luxury",
    geometry: { type: "Point", coordinates: [-118.2439408, 34.0543942] }
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "skiing",
    geometry: { type: "Point", coordinates: [7.2275601, 46.096241] }
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "wildlife",
    geometry: { type: "Point", coordinates: [34.6856504, -2.333333] }
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "historic",
    geometry: { type: "Point", coordinates: [4.8936041, 52.3727598] }
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "luxury",
    geometry: { type: "Point", coordinates: [179.0122737, -17.713371] }
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "countryside",
    geometry: { type: "Point", coordinates: [-1.9482926, 51.833333] }
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "historic",
    geometry: { type: "Point", coordinates: [-71.0595678, 42.3602534] }
  },
  {
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "beach",
    geometry: { type: "Point", coordinates: [115.188916, -8.4095178] }
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-115.57078, 51.1801211] }
  },
  {
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "Listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "urban",
    geometry: { type: "Point", coordinates: [-80.1917902, 25.7616798] }
  },
  {
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "luxury",
    geometry: { type: "Point", coordinates: [98.3959296, 7.9519331] }
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles",
    geometry: { type: "Point", coordinates: [-4.2250062, 57.400231] }
  },
  {
    title: "Cozy Room Near Central Park",
    description: "Quiet and clean private room, just a few steps from Central Park. Ideal for city explorers.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 550,
    location: "New York City",
    country: "United States",
    category: "room",
    geometry: { type: "Point", coordinates: [-73.968285, 40.785091] }
  },
  {
    title: "Bright Room with Balcony",
    description: "Sunny room with a private balcony overlooking the city skyline. Includes breakfast.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1505692794403-85e28e0a7c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 650,
    location: "San Francisco",
    country: "United States",
    category: "room",
    geometry: { type: "Point", coordinates: [-122.419416, 37.774929] }
  },
  {
    title: "Iconic Sydney Opera House View Apartment",
    description: "Stay in this modern apartment with unbeatable views of the Sydney Opera House and Harbour Bridge.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Sydney",
    country: "Australia",
    category: "iconic",
    geometry: { type: "Point", coordinates: [151.215256, -33.856784] }
  },
  {
    title: "Iconic Golden Gate Bridge Loft",
    description: "Stay in a stylish loft apartment with spectacular views of the Golden Gate Bridge and San Francisco Bay.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    location: "San Francisco",
    country: "United States",
    category: "iconic",
    geometry: { type: "Point", coordinates: [-122.478255, 37.819929] }
  },
  {
    title: "Countryside Farm Stay",
    description: "Relax in this traditional farmhouse surrounded by lush farmland. Enjoy fresh farm produce and peaceful views.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1445595867404-43a3f3249b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Kent",
    country: "United Kingdom",
    category: "farm",
    geometry: { type: "Point", coordinates: [0.561485, 51.278194] }
  },
  {
    title: "Organic Farmhouse Retreat",
    description: "Stay on an organic farm with opportunities to help with daily farm tasks and enjoy fresh farm-to-table meals.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Tuscany",
    country: "Italy",
    category: "farm",
    geometry: { type: "Point", coordinates: [11.2558136, 43.7698712] }
  },
  {
    title: "Mountain Farmhouse Experience",
    description: "Experience rustic farm living in the mountains with stunning views, fresh air, and locally sourced food.",
    image: {
      filename: "Listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    price: 850,
    location: "Alps",
    country: "Switzerland",
    category: "farm",
    geometry: { type: "Point", coordinates: [8.227512, 46.818188] }
  }
];

module.exports = { data: sampleListings };
