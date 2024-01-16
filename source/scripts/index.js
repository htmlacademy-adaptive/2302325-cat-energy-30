/* в этот файл добавляет скрипты*/
const menu = document.querySelector('.page-header__menu');
const menuBtn = document.querySelector('.button-toggle');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('is-open');
});
