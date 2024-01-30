/* в этот файл добавляет скрипты*/
if (document.querySelector('.nojs')) {
  document.querySelector('.nojs').classList.remove('nojs');
}

const header = document.querySelector('.page-header__menu');
const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.page-header__toggle');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  header.classList.toggle('page-header__menu--opened');
  menu.classList.toggle('nav--closed');
});
