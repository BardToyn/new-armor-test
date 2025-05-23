document.onmouseover = () => audio.play();

document.addEventListener('click', () => {
    const startText = document.querySelector('.start-screen__start');
    const menu = document.querySelector('.start-screen__menu');

    startText.style.display = 'none';

    menu.classList.remove('hidden');
}, { once: true });