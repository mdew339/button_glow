let page = document.querySelector('.page');
let themeButton = document.querySelector('.button-theme');
let changeText = document.querySelector('.hello1')

themeButton.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
}

changeText.onclick = function() {
    changeText.textContent = 'НАЖМИ ЕЩЕ!';
}