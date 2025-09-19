const boxes = document.querySelectorAll('.box');
const infoBox = document.querySelector('.info-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const info = box.getAttribute('data-info');
        infoBox.textContent = info;
    });
});