let searchForm = document.querySelector('.search-form');
let searchResult = document.querySelector('.search-container');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    searchResult.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchResult.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    searchResult.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    searchResult.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchResult.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

function validatePassword(password) {
  
  const defaultPassword = "welcome123";

  return password === defaultPassword;
}
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  

  const password = passwordInput.value;

  
  if (validatePassword(password)) {
      
      passwordError.textContent = 'Login Successful';
      
  } else {
      
      passwordError.textContent = 'Invalid password. Please enter the correct password.';
  }
});



const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 1;

function showContent(index) {
    if (index === 1) {
        content1.style.display = 'block';
        content2.style.display = 'none';
    } else {
        content1.style.display = 'none';
        content2.style.display = 'block';
    }
}

function moveToNextContent() {
    currentIndex = 3 - currentIndex; 
    showContent(currentIndex);
}

function moveToPrevContent() {
    currentIndex = 3 - currentIndex; 
    showContent(currentIndex);
}

nextBtn.addEventListener('click', moveToNextContent);
prevBtn.addEventListener('click', moveToPrevContent);


showContent(currentIndex);