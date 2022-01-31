let page = document.querySelector('.bg-theme'); 
let bntTheme = document.querySelector('.icon-thema');
/*
bntTheme.onclick = function () {
    page.classList.toggle('bg-light');
};*/

if (localStorage.getItem('bg-theme') === 'light') {
    page.classList.add('bg-light');
}


function changeTheme () {
    // page.classList.toggle('bg-light');
    state = page.classList.contains('bg-light');
    if (state) {
        page.classList.remove('bg-light');
        localStorage.removeItem("bg-theme");
        
    } else {
        page.classList.add('bg-light');
        localStorage.setItem('bg-theme', "light");
    }
}

bntTheme.onclick = changeTheme;