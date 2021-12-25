function toggleElementColorTheme(e) {
   switch (document.body.dataset.colortheme) {
      case 'white':
         e.target.src = './img/sun.svg';
         document.querySelector('body').style.backgroundColor = 'var(--secondary-black)';
         document.querySelector('body').style.color = 'var(--primary-white)';
         document.querySelector('#inputText').style.backgroundColor = 'var(--secondary-black)';
         document.querySelector('#inputText').style.color = 'var(--primary-white)';
         document.querySelector('.choose-language-block').style.color = 'var(--secondary-white)';
         document.querySelector('#site-lg').style.color = '#ffe600';
         document.querySelector('.container-language').style.border = '2.5px solid var(--secondary-white)';
         document.querySelector('.container-language').style.backgroundColor = 'var(--primary-black)';

         //check the arrow icons to set their colors
         if (document.querySelector('#arrow-symbol').dataset.arrow === 'arrow-down-black') {
            document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_down_white_24dp.svg';
            document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-down-white';
         }
         else if (document.querySelector('#arrow-symbol').dataset.arrow === 'arrow-up-black') {
            document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_up_white_24dp.svg';
            document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-up-white';
         }

         if (document.querySelectorAll('.container-search-result-theme-light')) {
            Array.from(document.querySelectorAll('.container-search-result-theme-light')).forEach((element) => {
               element.className = 'container-search-result-theme-black';
            });
            Array.from(document.querySelectorAll('.title-search')).forEach((resultLink) => {
               resultLink.parentElement.style.textDecoration = 'none';
               resultLink.parentElement.style.color = 'var(--primary-white)';
               resultLink.parentElement.style.verticalAlign = 'baseline';
            });
         }

         localStorage.setItem('searchResultThemeClass', 'container-search-result-theme-black');
         localStorage.setItem('theme', 'black');
         document.body.dataset.colortheme = 'black';
         break;

      case 'black':
         e.target.src = './img/moon.svg';
         document.querySelector('body').style.backgroundColor = 'var(--primary-white)';
         document.querySelector('body').style.color = 'var(--secondary-black)';
         document.querySelector('#inputText').style.backgroundColor = 'var(--primary-white)';
         document.querySelector('#inputText').style.color = 'var(--secondary-black)';
         document.querySelector('.choose-language-block').style.color = 'var(--secondary-black)';
         document.querySelector('#site-lg').style.color = '#0094D8';
         document.querySelector('.container-language').style.border = '2.5px solid var(--secondary-black)';
         document.querySelector('.container-language').style.backgroundColor = 'var(--primary-white)';

         //check the arrow icons to set their colors
         if (document.querySelector('#arrow-symbol').dataset.arrow === 'arrow-down-white') {
            document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_down_black_24dp.svg';
            document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-down-black';
         }
         else if (document.querySelector('#arrow-symbol').dataset.arrow === 'arrow-up-white') {
            document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_up_black_24dp.svg';
            document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-up-black';
         }

         if (document.querySelectorAll('.container-search-result-theme-black')) {
            Array.from(document.querySelectorAll('.container-search-result-theme-black')).forEach((element) => {
               element.className = 'container-search-result-theme-light';
            });
            Array.from(document.querySelectorAll('.title-search')).forEach((resultLink) => {
               resultLink.parentElement.style.textDecoration = 'none';
               resultLink.parentElement.style.color = 'var(--primary-black)';
               resultLink.parentElement.style.verticalAlign = 'baseline';
            });
         }
         localStorage.setItem('searchResultThemeClass', 'container-search-result-theme-light');
         localStorage.setItem('theme', 'white');
         document.body.dataset.colortheme = 'white';
         break;
   }
}

export default toggleElementColorTheme;