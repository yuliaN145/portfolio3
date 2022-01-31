let page = document.querySelector('.bg-theme'); 
let bntTheme = document.querySelector('.icon-thema');

bntTheme.onclick = function () {
    page.classList.toggle('bg-light');
};
