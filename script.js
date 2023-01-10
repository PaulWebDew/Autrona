// -----------------------slider--------------------------
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   speed: 800,
   spaceBetween: 1400,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

// -----------------------select language---------------------

const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguagae);
const allLang = ['en', 'ru', 'lt'];
const imgFlag = document.querySelector('.lng-img')

function changeURLLanguagae() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
}

function changeLanguage() {
   let hash = window.location.hash;
   hash = hash.substring(1);
   if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#lt';
      location.reload();
   }
   select.value = hash;
   imgFlag.setAttribute('src', `./images/${hash}.png`);
   for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key)
      if (elem) elem.innerHTML = langArr[key][hash];
   }
}
changeLanguage();
// -----------------adaptive menu-------------------
const menuBtn = document.querySelector('.menuButton');

const lineTop = document.querySelector('.lineTop')
const lineMiddle = document.querySelector('.lineMiddle')
const lineButtom = document.querySelector('.lineButtom')
const nav = document.querySelector('.navLinks ')

menuBtn.addEventListener("click", animationMenu);
function animationMenu() {
   lineTop.classList.toggle("topActive");
   lineMiddle.classList.toggle('middleActive');
   lineButtom.classList.toggle('buttomActive');
   nav.classList.toggle('navActive');
}


const ourPartners = document.querySelector('#partnersBtn');
const ourTrucs = document.querySelector('#tracsBtn');
const partners = document.querySelector('#partners');
const trucs = document.querySelector('#trucs');

ourPartners.addEventListener('click', () => {
   partners.classList.toggle('hidden')
})
ourTrucs.addEventListener('click', () => {
   trucs.classList.toggle('hidden')
})