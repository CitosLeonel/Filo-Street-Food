const navToggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('.nav-ul');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navUl.classList.toggle('active');
});
