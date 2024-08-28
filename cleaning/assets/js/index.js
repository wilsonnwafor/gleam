
// side bar drop down menu
let dropBtn = document.querySelector('#side-dropBtn');
let dropMenu = document.querySelector('#side-dropMenu');

dropBtn.addEventListener('click', () => {
  dropBtn.classList.toggle('clicked');
  dropMenu.classList.toggle('clicked');
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

// home-services carousel functionality

const carousel = document.querySelector(".carousel-cont");
const carouselItem = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
let index = 0;

function cloneItems(){
  carouselItem.forEach(item => {
    let clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });
}

function moveCarousel(){
  carousel.style.transform = `translateX(-${index * 33.3}%)`;
  index++;
  cloneItems();
}
setInterval(moveCarousel, 2000);


// function updateCarousel() {
//   const translate = -index * 30;
//   carousel.style.transform = `translateX(${translate}%)`;
//   const clone = carouselItem[0].cloneNode(true);
//   carousel.appendChild(clone);
// }
// function nextItem(){
//   index++;
//   if (index >= totalItems){
//     index = 0;
//   }
//   updateCarousel()
  
// }

// setInterval(nextItem, 2000)