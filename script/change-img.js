const portfolioBtn = document.querySelector('.portfolio-btn-winter');
const portfolioImages = document.querySelectorAll('.portfolio-image');



 portfolioBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/winter/${index + 1}.jpg`);
    portfolioBtn.classList.toggle('active');
 });

const portfolioBtnSpring = document.querySelector('.portfolio-btn-spring');

 portfolioBtnSpring.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/spring/${index + 1}.jpg`);
    portfolioBtnSpring.classList.toggle('active');
 });

 const portfolioBtnSummer = document.querySelector('.portfolio-btn-summer');

 portfolioBtnSummer.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/summer/${index + 1}.jpg`);
    portfolioBtnSummer.classList.toggle('active');
 });

 const portfolioBtnAutumn = document.querySelector('.portfolio-btn-autumn');

 portfolioBtnAutumn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./img/autumn/${index + 1}.jpg`);
    portfolioBtnAutumn.classList.toggle('active');
 });
