
"use strict";
// меню
var toggleMenuBtn = document.querySelector(".sprite-logo-meny");
var navMenu = document.querySelector(".none-meny");

toggleMenuBtn.addEventListener('click', function(){
	navMenu.classList.toggle("visible");
});