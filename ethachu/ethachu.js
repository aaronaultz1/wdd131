// Hero Image Functions
const heroImages = [
  "images/ethachu_actionshot1.png",
  "images/ethachu_actionshot2.png",
  "images/ethachu_actionshot3.png",
  "images/ethachu_actionshot4.png",
  "images/ethachu_actionshot5.png",
  "images/ethachu_actionshot6.png",
  "images/ethachu_actionshot7.png",
  "images/ethachu_actionshot8.png",
  "images/EthachuFire.JPEG",
  "images/EthachuHideout1.JPEG",
  "images/EthachuLeader.JPEG"
];

let currentImageIndex = 0;
const heroImg = document.getElementById('hero-image');
const thumbnailBar = document.getElementById('thumbnail-bar');

// Create thumbnails dynamically
if (thumbnailBar && heroImg) {
  heroImages.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.classList.add('thumbnail');
    if (index === 0) thumb.classList.add('active');

    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      updateHeroImage();
      resetAutoCycle();
    });

    thumbnailBar.appendChild(thumb);
  });

  function updateHeroImage() {
    heroImg.style.opacity = 0;

    setTimeout(() => {
      heroImg.src = heroImages[currentImageIndex];
      heroImg.style.opacity = 1;

      // Update thumbnail highlights
      document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentImageIndex);
      });
    }, 300);
  }
}
// Auto cycle
let autoCycle = setInterval(nextImage, 5000);

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  updateHeroImage();
}

function resetAutoCycle() {
  clearInterval(autoCycle);
  autoCycle = setInterval(nextImage, 10000);
}

// Youtube Player
if (document.getElementById('yt-player')) {
  const videoData = [
    {
      url: "https://www.youtube.com/embed/b-JsvNyzLLQ?list=PLi7kiIksxYaZoc3uFoP_FAXsLft2stWzK",
      summary: "A kid named Ethan becomes a superhero of electric proportions!",
      date: "Oct 28, 2013"
    },
    {
      url: "https://www.youtube.com/embed/HsoZXlOvv8U?list=PLi7kiIksxYaZoc3uFoP_FAXsLft2stWzK",
      summary: "Ethachu struggles to control his powers.",
      date: "May 6, 2014"
    },
    {
      url: "https://www.youtube.com/embed/YZDYQLui7L0?list=PLi7kiIksxYaZoc3uFoP_FAXsLft2stWzK",
      summary: "When Ethachu faces a huge new threat, will he have to sacrifice himself for the greater good?",
      date: "May 10, 2015"
    },
    {
      url: "https://www.youtube.com/embed/qlMKj3wl_EQ?list=PLi7kiIksxYaZoc3uFoP_FAXsLft2stWzK",
      summary: "One year after Ethachu's first encounter with the Invincible Man, the search continues for him while a new enemy arises in the second chapter of the epic conclusion to the Ethachu trilogy!",
      date: "Oct 29, 2016"
    },
    {
      url: "https://www.youtube.com/embed/-OD-82xYRy4?list=PLi7kiIksxYaZoc3uFoP_FAXsLft2stWzK",
      summary: "Torn from his allies, his powers, and his own life, Ethan must make a daring escape to defy death itself and defeat the Invincible Boy once and for all.",
      date: "June 19, 2020"
    }
  ];


  function loadYouTube(button, url) {
  const iframe = document.getElementById('yt-player');
  iframe.src = url;

  const summaryDiv = document.getElementById('video-summary');
  const video = videoData.find(v => v.url === url);
  
  if (video) {
    summaryDiv.innerHTML = `
      <div class="video-date"><strong>Release Date:</strong> ${video.date}</div>
      <div class="video-description">${video.summary}</div>
    `;
  } else {
    summaryDiv.textContent = "No summary available.";
  }

  document.querySelectorAll('.video-btn').forEach(btn =>
    btn.classList.remove('active')
  );
  button.classList.add('active');
}



  // Load initial summary on page load
  window.addEventListener('DOMContentLoaded', () => {
    const summaryDiv = document.getElementById('video-summary');
    const firstVideo = videoData[0];
    if (firstVideo) {
      summaryDiv.innerHTML = `
        <div class="video-date"><strong>Release Date:</strong> ${firstVideo.date}</div>
        <div class="video-description">${firstVideo.summary}</div>
      `;
    }
  });
};





const credits = [
    {
    name: "Alex O'Dell",
    roles: "Director, Producer, Film Lead, Writer, Actor: Alex, Camera Operator",
    summary: "Visionary behind the Ethachu series' direction and production.",
    extended: "The original idea of Ethachu originated from Alex O'Dell, a 6th grader at the time, who wanted to create an unlikely hero from a curious boy. The name 'Ethachu' was inspiried by the mix between his friend's name, 'Ethan' and the famous Pokémon 'Pikachu'. ",
    videos: ["ALL FILMS"],
    image: "images/alex.png"
    },
    {
    name: "Ethan Hall",
    roles: "Actor: Ethan / Ethachu, Camera Operator",
    summary: "Portrays the main character of Ethachu.",
    extended: "Ethan Hall, the actor who portrayed Ethachu, brought a fearless and innocent personality to the film, making the character truly memorable and heroic.",
    videos: ["ALL FILMS"],
    image: "images/ethan.png"
    },
    {
    name: "Joseph Spivey",
    roles: "Actor: The Invincible Man",
    summary: "Portrays one of the main antagonists, The Invincible Man.",
    extended: "Joseph Spivey brings a menacing presence to the role of The Invincible Man, challenging Ethachu at every turn.",
    videos: ["The End of Ethachu - Part 1"],
    image: "images/joey.png"
    },
    {
    name: "Aaron Aultz",
    roles: "Actor: Leader, Camera Operator",
    summary: "Portrays the character of Leader, a key ally in the Ethachu series.",
    extended: "Aaron Aultz brings a strong and supportive presence to the role of Leader, guiding Ethachu on his journey.",
    videos: ["The End of Ethachu - Part 1", "The End of Ethachu - Part 2", "The End of Ethachu - Part 3"],
    image: "images/aaron.png"
    },
    {
    name: "Ammon Aultz",
    roles: "Actor: Random Fan / The Invincible Boy / Charizman",
    summary: "Ammon Aultz plays as the Invincible Boy, the son of The Invincible Man, who is determined to defeat Ethachu.",
    extended: "Ammon Aultz portrays the Invincible Boy, the main villain of The End of Ethachu. He sneaks into the videogame world through Ethachu's car as Ethachu returns to regain his powers.",
    videos: ["The End of Ethachu - Part 1", "The End of Ethachu - Part 2", "The End of Ethachu - Part 3"],
    image: "images/ammon.png"
    }
];

const cardsContainer = document.getElementById('cards-container');

function createCard(credit) {
    const card = document.createElement('div');
    card.className = 'credit-card';
    card.dataset.name = credit.name.toLowerCase();
    card.dataset.roles = credit.roles.toLowerCase();

    card.innerHTML = `
    <img src="${credit.image}" alt="${credit.name}" />
    <div class="credit-name">${credit.name}</div>
    <div class="credit-role">${credit.roles}</div>
    <div class="credit-summary">${credit.summary}</div>
    `;

    card.addEventListener('click', () => openModal(credit)); // Allows modal to open upon click

    return card;
}

// Load cards to screen
function renderCards(cards) {
    cardsContainer.innerHTML = ''; // Resets card html
    cards.forEach(card => cardsContainer.appendChild(card)); // Inserts ALL cards given to the function
}

function filterCredits() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filtered = credits.filter(credit =>
    credit.name.toLowerCase().includes(searchTerm) || //searches by lowercase all name properties
    credit.roles.toLowerCase().includes(searchTerm) //searches by lowercase all role properties
    );
    const filteredCards = filtered.map(createCard); // sets filtered cards
    renderCards(filteredCards); // renders filtered cards
}

// Initial render (all cards)
renderCards(credits.map(createCard));


// Modal functions

function openModal(credit) {
  document.getElementById('modal-img').src = credit.image;
  document.getElementById('modal-name').textContent = credit.name;
  document.getElementById('modal-roles').textContent = credit.roles;
  document.getElementById('modal-videos').textContent = "Appears in: " + credit.videos.join(", ");
  document.getElementById('modal-extended').textContent = credit.extended;

  document.getElementById('credit-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('credit-modal').classList.add('hidden');
}

// Close modal if clicking outside the content area
document.getElementById('credit-modal').addEventListener('click', function (e) {
  if (e.target.id === 'credit-modal') {
    closeModal();
  }
});


// Close modal when pressing Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

