const button = document.getElementById('menu');
const bars = document.getElementById('fa-bars');
const xmark = document.getElementById('fa-xmark');
const menuDisplay = document.getElementById('menu-display');
let active = false;

button.addEventListener('click', () => {
    if (!active) {
        bars.style.display = 'none';
        xmark.style.display = 'block';
        menuDisplay.style.display = 'flex';
        active = true;
    } else {
        xmark.style.display = 'none';
        bars.style.display = 'block';
        menuDisplay.style.display = 'none';
        active = false;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 867 && active) {
        xmark.style.display = 'none';
        bars.style.display = 'block';
        menuDisplay.style.display = 'none';
        active = false;
    }
    adjustSocialsVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-socials');
    const socialsList = document.getElementById('socials-list');
  
    toggleButton.addEventListener('click', () => {
      socialsList.classList.toggle('hidden');
      socialsList.classList.toggle('visible');
    });
  
    adjustSocialsVisibility();
  });
  
  function adjustSocialsVisibility() {
    const socialsList = document.getElementById('socials-list');
  
    if (window.innerHeight < 500) {
      socialsList.classList.add('horizontal');
      socialsList.classList.remove('vertical');
    } else {
      socialsList.classList.add('vertical');
      socialsList.classList.remove('horizontal');
    }
  }
  
  window.addEventListener('resize', adjustSocialsVisibility);