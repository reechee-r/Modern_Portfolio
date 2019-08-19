//Select DOM Items
const menuBtn = document.querySelector('.menu-btn'); //select the class menu-btn
const menu = document.querySelector('.menu'); //select the class menu
const menuNav = document.querySelector('.menu-nav'); //select the class menu-nav
const menuBranding = document.querySelector('.menu-branding'); //select the class of menu-branding
const navItems = document.querySelectorAll('.nav-item'); //select all the class of nav-item

//set initial state
let showMenu = false; //reassignable variable to false

menuBtn.addEventListener('click', toggleMenu); //to listen for a click event on the menu-btn class and run the function toggleMenu

function toggleMenu() {
  if (!showMenu) { //check if showMenu value is true, if it is runs the ffing command if not skips to else commands
    menuBtn.classList.add('close'); //adds a new class close to menu-btn class to modify humburger
    menu.classList.add('show'); //adds class show to display menu overlay
    menuNav.classList.add('show'); //adds class show
    menuBranding.classList.add('show'); //adds class show to display branding i.e portrait overlay
    navItems.forEach(item => item.classList.add('show')); //adds class show to display navigation item list i.e home, about, work etc
    //set menu state
    showMenu = true;
  } else { //runs if showMenu is false i.e removes addition classes to each elements and makes showMenu false
    menuBtn.classList.remove('close'); //removes the class close added if showMenu is true
    menu.classList.remove('show'); //removes the class show from menu class
    menuNav.classList.remove('show'); //removes the class show from menu-nav class
    menuBranding.classList.remove('show'); //removes the class show from menu-branding class
    navItems.forEach(item => item.classList.remove('show')); //removes the class show from each of the nav-item 
    //set menu state
    showMenu = false;
  }
}
