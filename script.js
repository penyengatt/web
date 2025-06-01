// Tourist spots data
const touristSpots = [
  {
    id: 1,
    name: 'Masjid Raya Sultan Riau',
    image: 'masjidraya.jpeg',
    description: 'Masjid megah abad ke-19 dengan arsitektur unik yang dibangun menggunakan putih telur sebagai perekat.'
  },
  {
    id: 2,
    name: 'Balai Adat',
    image: 'balaiadat.jpeg',
    description: 'Tempat pertemuan adat dan musyawarah kerajaan. Balai ini digunakan untuk upacara adat, pernikahan bangsawan, dan penyampaian titah raja.'
  },
  {
    id: 3,
    name: 'Gedung Tabib',
    image: 'gedungtabib.jpeg',
    description: 'Bangunan bersejarah yang dulu digunakan sebagai tempat pengobatan oleh tabib kerajaan. Menjadi simbol penting perawatan kesehatan zaman dahulu.'
  },
  {
    id: 4,
    name: 'Benteng Bukit Kursi',
    image: 'bentengbukitkursi.jpeg',
    description: 'Benteng pertahanan dengan meriam kuno yang memiliki pemandangan laut yang indah.'
  },
  {
    id: 5,
    name: 'Komplek Makam',
    image: 'komplekmakam.jpeg',
    description: 'Kawasan pemakaman para raja dan bangsawan Riau-Lingga. Di sini terdapat banyak nisan tua dengan tulisan Arab-Melayu dan ukiran khas.'
  },
  {
    id: 6,
    name: 'Makam Pahlwan Nasional',
    image: 'makampahlawannasional.jpeg',
    description: 'Makam tokoh besar pencetus Gurindam Dua Belas dan peletak dasar bahasa Indonesia. Ia diakui sebagai Pahlawan Nasional Indonesia.'
  },
  {
    id: 7,
    name: 'Makam Raja Jakfar',
    image: 'makamrajajakfar.jpeg',
    description: 'Tempat peristirahatan terakhir Raja Jakfar, salah satu raja penting Kerajaan Riau-Lingga. Makam ini memiliki ornamen khas kerajaan Melayu.'
  },
  {
    id: 8,
    name: 'Perigi Putri',
    image: 'perigiputri.jpeg',
    description: 'Sumur tua yang konon digali oleh para putri kerajaan. Airnya dipercaya tetap jernih dan tak pernah kering, bahkan saat kemarau panjang.'
  },
  {
    id: 9,
    name: 'Rumah Raja Daud',
    image: 'rumahrajadaud.jpeg',
    description: 'Rumah tradisional peninggalan Raja Daud, tokoh penting dalam struktur kerajaan. Kini menjadi salah satu saksi sejarah kehidupan bangsawan Melayu masa lalu.'
  },
  {
    id: 10,
    name: 'Taman Makam Engku Putri',
    image: 'makamengkuputri.jpeg',
    description: 'Kompleks pemakaman Engku Putri Raja Hamidah, pendiri Pulau Penyengat.'
  },
  {
    id: 11,
    name: 'Rumah Raja Haji Abudllah',
    image: 'rumahrajahajiabdullah.jpeg',
    description: 'Makam ulama berpengaruh di masa Kerajaan Riau-Lingga, terletak dekat kompleks makam kerajaan dan menjadi tujuan ziarah sejarah.'
  },
  {
    id: 12,
    name: 'Situs Istana Kantor',
    image: 'situsistanakantor.jpeg',
    description: 'Bangunan peninggalan Kerajaan Riau-Lingga yang dulunya berfungsi sebagai pusat administrasi pemerintahan. Arsitekturnya mencerminkan gaya kolonial dan Melayu.'
  }
];

// Local food data
const foods = [
  {
    id: 1,
    name: 'Lakse',
    image: 'lakse.jpeg',
    description: ' Makanan mirip spageti yang terbuat dari tepung beras, disajikan dengan kuah santan kari ikan.'
  },
  {
    id: 2,
    name: 'Mie Tarempa',
    image: 'mietarempa.jpeg',
    description: 'Mie kuning khas Kepulauan Riau yang disajikan dengan kuah kaldu ikan atau seafood berbumbu pedas dan rempah Melayu, rasanya gurih dan segar.'
  },
  {
    id: 3,
    name: 'Otak-Otak',
    image: 'otakotak.jpeg',
    description: 'Ikan yang dibumbui dan dibungkus daun pisang kemudian dipanggang.'
  },
  {
    id: 4,
    name: 'Kue Deram - Deram',
    image: 'kuederamderam.jpeg',
    description: ' Kue goreng berbentuk cincin yang terbuat dari tepung beras dan gula merah.'
  }, {
    id: 5,
    name: 'Air Dohot',
    image: 'airdohot.jpeg',
    description: 'Minuman tradisional khas Melayu yang terbuat dari campuran air kelapa muda dengan gula merah dan rempah-rempah, rasanya manis, segar, dan sedikit harum.'
  },

   {
    id: 6,
    name: 'Gong-Gong',
    image: 'gonggong.jpeg',
    description: 'Siput laut khas Kepulauan Riau yang direbus dan disajikan dengan sambal asam pedas. Dagingnya kenyal dan gurih, biasa dimakan langsung dari cangkangnya.'
  },

   {
    id: 7,
    name: 'Lepat Liat',
    image: 'lepatliat.jpeg',
    description: ' Kue kenyal dari tepung ketan, kelapa parut, dan gula merah, dibungkus daun pisang dan dikukus.'
  },

   {
    id: 8,
    name: 'Teh Tarik',
    image: 'tehtarik.jpeg',
    description: 'Teh manis kental dicampur susu, ditarik berulang agar berbuih dan terasa lebih lembut.'
  },
];

// DOM elements
const navbar = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobileMenu');
const menuToggle = document.querySelector('.menu-toggle');
const spotsCarousel = document.getElementById('spotsCarousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const foodGrid = document.getElementById('foodGrid');
const currentYearSpan = document.getElementById('currentYear');
const contactForm = document.getElementById('contactForm');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Populate tourist spots
touristSpots.forEach(spot => {
  const spotCard = document.createElement('div');
  spotCard.classList.add('spot-card');
  
  spotCard.innerHTML = `
    <div class="spot-image">
      <img src="${spot.image}" alt="${spot.name}">
    </div>
    <div class="spot-content">
      <h3 class="spot-title">${spot.name}</h3>
      <p class="spot-description">${spot.description}</p>
    </div>
  `;
  
  spotsCarousel.appendChild(spotCard);
});

// Carousel navigation
prevButton.addEventListener('click', () => {
  spotsCarousel.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  spotsCarousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

// Populate local food
foods.forEach(food => {
  const foodCard = document.createElement('div');
  foodCard.classList.add('food-card');
  
  foodCard.innerHTML = `
    <div class="food-image">
      <img src="${food.image}" alt="${food.name}">
    </div>
    <div class="food-content">
      <h3 class="food-title">${food.name}</h3>
      <p class="food-description">${food.description}</p>
    </div>
  `;
  
  foodGrid.appendChild(foodCard);
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah terkirim.');
  contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});