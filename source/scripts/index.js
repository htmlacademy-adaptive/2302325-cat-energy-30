/* в этот файл добавляет скрипты*/
if (document.querySelector('.nojs')) {
  document.querySelector('.nojs').classList.remove('.nojs');
}

const menu = document.querySelector('.page-header__menu');
const menuBtn = document.querySelector('.page-header__toggle');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  menu.classList.toggle('is-open');
});
