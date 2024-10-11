const button = document.getElementById('menu');
const bars = document.getElementById('fa-bars');
const xmark = document.getElementById('fa-xmark');
const menuDisplay = document.getElementById('menu-display');
const registro = document.getElementById('registro');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const up = document.getElementById('up');
const down = document.getElementById('down');
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

registro.addEventListener('click', () => {
    r1.classList.toggle('hidden');
    r2.classList.toggle('hidden');
    r3.classList.toggle('hidden');
    up.classList.toggle('hidden');
    down.classList.toggle('hidden');
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

  const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});