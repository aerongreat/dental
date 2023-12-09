window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)'; 
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none'; 
  }
  });
document.addEventListener('DOMContentLoaded', function () {
  console.log('Function.js is running!');
  const checkbox = document.getElementById('check');
  const menu = document.querySelector('.menu');

  checkbox.addEventListener('change', function () {
    menu.classList.toggle('active', this.checked);
  });
});
