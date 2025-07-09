// Hero Image Functions
const heroImages = [
  "images/ethachu_actionshot1.png",
  "images/ethachu_actionshot2.png",
  "images/ethachu_actionshot3.png",
  "images/ethachu_actionshot4.png",
  "images/ethachu_actionshot5.png",
  "images/ethachu_actionshot6.png",
  "images/ethachu_actionshot7.png",
  "images/ethachu_actionshot8.png"
];

let currentImageIndex = 0;
const heroImg = document.getElementById('hero-image');
const thumbnailBar = document.getElementById('thumbnail-bar');

// Create thumbnails dynamically
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
function loadYouTube(button, url) {
    const iframe = document.getElementById('yt-player');
    iframe.src = url;

    // Remove active from all buttons
    document.querySelectorAll('.video-btn').forEach(btn =>
    btn.classList.remove('active')
    );

    // Add active class to clicked button
    button.classList.add('active');
}





const credits = [
    {
    name: "Alex O'Dell",
    roles: "Director, Producer, Film Lead, Writer, Actor: Alex",
    summary: "Visionary behind the Ethachu series' direction and production.",
    extended: "Ethachu is a curious and fearless young spirit, often found in the wilds seeking ancient truths.",
    videos: ["Part 1", "Part 2", "Part 5"],
    image: "images/alex.png"
    },
    {
    name: "Ethan Hall",
    roles: "Actor: Ethan / Ethachu",
    summary: "Crafted the compelling storylines and dialogues for the series.",
    extended: "Ethachu is a curious and fearless young spirit, often found in the wilds seeking ancient truths.",
    videos: ["Part 1", "Part 2", "Part 5"],
    image: "images/ethan.png"
    },
    {
    name: "Joseph Spivey",
    roles: "Actor: The Invincible Man",
    summary: "Lends her voice to Lina, Ethachu’s loyal friend and companion.",
    extended: "Ethachu is a curious and fearless young spirit, often found in the wilds seeking ancient truths.",
    videos: ["Part 1", "Part 2", "Part 5"],
    image: "images/joey.png"
    },
    {
    name: "Aaron Aultz",
    roles: "Actor: Leader, Film Assistant",
    summary: "Portrays the main character Ethachu, a young adventurer.",
    extended: "Ethachu is a curious and fearless young spirit, often found in the wilds seeking ancient truths.",
    videos: ["Part 1", "Part 2", "Part 5"],
    image: "images/aaron.png"
    },
    {
    name: "Ammon Aultz",
    roles: "Actor: Random Fan / The Invincible Boy / Charizman",
    summary: "Lends her voice to Lina, Ethachu’s loyal friend and companion.",
    extended: "Ethachu is a curious and fearless young spirit, often found in the wilds seeking ancient truths.",
    videos: ["Part 1", "Part 2", "Part 5"],
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

