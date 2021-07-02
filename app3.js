const text = baffle('.data2');
const mouseWrap = baffle('.data2');
const mouseHover = false;
const hamburger3 = document.getElementById('hamburger3');
const navLinks3 = document.getElementById('nav-links3');







text.set({
    characters : '>▒▓ /▓█░█ █▒█>░ ▒/▓ █▓>▒▒ ▓▓▒░ >█▒ ▓█▓< ▒/░▒',
    speed: 100
});
text.start();
text.reveal(4000);


hamburger3.addEventListener('click', () => {
    navLinks3.classList.toggle('show');
});
