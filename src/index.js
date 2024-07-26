import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', function () {
  const readMoreButtons = document.querySelectorAll('.read_more');
  readMoreButtons.forEach(function (readMoreButton) {
    const hiddenText = document.getElementById(
      readMoreButton.getAttribute('for')
    );

    readMoreButton.addEventListener('click', function () {
      if (hiddenText.classList.contains('visible-text')) {
        hiddenText.classList.remove('visible-text');
        hiddenText.classList.add('hidden-text');
        readMoreButton.querySelector('span').textContent = 'Read more';
      } else {
        hiddenText.classList.remove('hidden-text');
        hiddenText.classList.add('visible-text');
        readMoreButton.querySelector('span').textContent = 'Less';
      }
    });
  });

  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');

  const form = document.querySelector('.contact-form');

  openMenuBtn.addEventListener('click', ToggleMenu);
  closeMenuBtn.addEventListener('click', ToggleMenu);

  function ToggleMenu() {
    menu.classList.toggle('is-open');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.querySelector('input[name="contact-email"]').value;
    const question = form.querySelector('input[name="contact-question"]').value;

    if (!email || !question) {
      Notiflix.Notify.failure('Please fill in all fields.');
      return;
    }
    Notiflix.Notify.success(
      'We will consider your question as soon as possible.'
    );
    form.reset();
  });
});
