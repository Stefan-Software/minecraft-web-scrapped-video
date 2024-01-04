/**
 * imports
 */
import controls from './main';
/**
 * TAB Menu Controls
 */
let isMenuOpen = false;
const menu = document.querySelector('.menu');
menu.addEventListener('click', function (event) {
    event.stopPropagation();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        if (isMenuOpen) {
            menu.style.display = 'none';
            isMenuOpen = false;
            controls.lock();
        }
        else {
            menu.style.display = 'block';
            isMenuOpen = true;
            controls.unlock();
        }
    }
});
document.addEventListener('click', () => {
    if (isMenuOpen) {
        menu.style.display = 'none';
        isMenuOpen = false;
        controls.lock();
    }
});
