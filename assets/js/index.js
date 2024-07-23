
// side bar drop down menu
let dropBtn = document.querySelector('#side-dropBtn');
let dropMenu = document.querySelector('#side-dropMenu');

dropBtn.addEventListener('click', () => {
  dropBtn.classList.toggle('clicked');
  dropMenu.classList.toggle('clicked');
  console.log("hello");
}); 

// hamburger menu and side bar functionality

let hamMenu = document.querySelector(".ham-menu");
let sideBar = document.querySelector(".sidebar");
let sideBarContainer = document.querySelector(".side-bar-container");
let closeBtn = document.querySelector("#side-close")

hamMenu.addEventListener("click", () => {
  sideBar.classList.toggle("clicked");
  sideBarContainer.classList.toggle("clicked");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("clicked");
  sideBarContainer.classList.remove("clicked");
});