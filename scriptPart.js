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