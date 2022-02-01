function configuration() {

	document.body.dataset.language = localStorage.getItem('language') ?? 'en';
	document.documentElement.lang = localStorage.getItem('language') ?? 'en';
	document.body.dataset.colortheme = localStorage.getItem('theme') ?? 'white'; 

	// Language 
	switch (document.body.dataset.language) {
		case 'en':
			document.querySelector('#inputText').placeholder = 'Search';
			document.querySelector('.choose-language-block span:first-child').textContent = 'Site Language:';
			document.querySelector('#site-lg').textContent = 'English';
			document.querySelector('#arrow-symbol').style.left = '250px';
			document.querySelector('#lg-en').textContent = 'English';
			document.querySelector('#lg-pt').textContent = 'Portuguese';
			break;
		case 'pt':
			document.querySelector('#inputText').placeholder = 'Pesquisar';
			document.querySelector('.choose-language-block span:first-child').textContent = 'Idioma do site:';
			document.querySelector('#site-lg').textContent = 'Portugês';
			document.querySelector('#arrow-symbol').style.left = '245px';
			document.querySelector('#lg-en').textContent = 'Inglês';
			document.querySelector('#lg-pt').textContent = 'Portugês';
			break;
	}

	// Color
	switch (document.body.dataset.colortheme) {

		case 'white':
			document.querySelector('#icon-theme img').src = './img/moon.svg';
			document.querySelector('body').style.backgroundColor = 'var(--primary-white)';
			document.querySelector('body').style.color = 'var(--secondary-black)';
			document.querySelector('#inputText').style.backgroundColor = 'var(--primary-white)';
			document.querySelector('#inputText').style.color = 'var(--secondary-black)';
			document.querySelector('.choose-language-block').style.color = 'var(--secondary-black)';
			document.querySelector('#site-lg').style.color = '#0094D8';
			document.querySelector('.container-language').style.border = '2.5px solid var(--secondary-black)';
			document.querySelector('.container-language').style.backgroundColor = 'var(--primary-white)';
			document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_down_black_24dp.svg';
			document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-down-black';
			localStorage.setItem('searchResultThemeClass', 'container-search-result-theme-light');
         document.querySelector('.sign-up').style.backgroundColor = 'var(--primary-black)';
			break;

		case 'black':
			document.querySelector('#icon-theme img').src = './img/sun.svg';
			document.querySelector('body').style.backgroundColor = 'var(--secondary-black)';
			document.querySelector('body').style.color = 'var(--primary-white)';
			document.querySelector('#inputText').style.backgroundColor = 'var(--secondary-black)';
			document.querySelector('#inputText').style.color = 'var(--primary-white)';
			document.querySelector('.choose-language-block').style.color = 'var(--secondary-white)';
			document.querySelector('#site-lg').style.color = '#ffe600';
			document.querySelector('.container-language').style.border = '2.5px solid var(--secondary-white)';
			document.querySelector('.container-language').style.backgroundColor = 'var(--primary-black)';
			document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_down_white_24dp.svg';
			document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-down-white';
			localStorage.setItem('searchResultThemeClass', 'container-search-result-theme-black');
         document.querySelector('.sign-up').style.backgroundColor = 'var(--primary-white)';
			break;
	}

}

export default configuration;