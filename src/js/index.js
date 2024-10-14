const banner = document.getElementById('banner')
const windowHeigth = window.innerHeight;
const windowWidth = window.innerHeight;

banner.style.height = windowHeigth + 'px';
banner.style.Width = windowWidth + 'px';

const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginClose = document.getElementById('loginClose')
const loginForm = document.getElementById('loginForm')
const playNow = document.getElementById('play-now')

const canvas = document.getElementById('canvasFrame');
const sections = document.getElementsByClassName('section');
let currentSection = 0;
let startY = 0;
let onCanvas;



loginBtn.addEventListener('click', () => {
    loginModal.showModal();
})

loginClose.addEventListener('click', () => {
    loginModal.close()
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

   
    loginModal.close();
})

playNow.addEventListener('click', () => {
    window.location.href = 'http://localhost:3000/'
})

canvas.addEventListener('mouseover', () => {
    onCanvas = true;
})

canvas.addEventListener('mouseout', () => {
    onCanvas = false;
})

window.addEventListener('wheel', (e) => {
    if(onCanvas) return;
    if (e.deltaY > 0) {
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    } else {
        if (currentSection > 0) {
            currentSection--;
        }
    }
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

window.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (startY > endY + 50) {
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    } else if (startY < endY - 50) {
        if (currentSection > 0) {
            currentSection--;
        }
    }
    sections[currentSection].scrollIntoView({ behavior: 'smooth' });
});


