let menuBtn = document.querySelector('.menu-btn');
        let menu = document.querySelector('.header__navigation');

        menuBtn.addEventListener('click', function(){
	    menuBtn.classList.toggle('active');
	    menu.classList.toggle('active');
        }) 
        let menuElem = document.querySelectorAll('.navigation__link');/*
        menuElem.onclick = function() {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');*/
        /*};*/
        for (var i = 0; i < menuElem.length; i++) {
            menuElem[i].onclick = function(){
                menu.classList.toggle('active');
                menuBtn.classList.toggle('active');
            };
        }