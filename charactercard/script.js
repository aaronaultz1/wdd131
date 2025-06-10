const character = {
      name: "Mario",
      class: "Professional Plumber and Turtle Stomper",
      level: 2,
      health: 100,
      image: 'marioimage.jpeg',
      attacked() {
        if (this.health >= 20) {
          this.level -= 1;
          this.health -= 20;
          updateCharacterDisplay();
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
        updateCharacterDisplay();
      }
    };

function updateCharacterDisplay() {
  document.querySelector('.name').textContent = character.name;
  document.querySelector('.image').src = character.image;
  document.querySelector('.image').alt = character.name + " image"; // Good for accessibility
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
}

document.getElementById('attacked').addEventListener('click', () => {
  character.attacked();
});

document.getElementById('levelup').addEventListener('click', () => {
  character.levelUp();
});

updateCharacterDisplay();