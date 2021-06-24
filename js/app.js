window.addEventListener('DOMContentLoaded', function () {

	document.body.dataset.language = 'en'; //default language
	document.documentElement.lang = 'en';
	document.body.dataset.colortheme = 'white'; //default color theme

	// Language 
	if (localStorage.getItem('language')) {
		document.body.dataset.language = localStorage.getItem('language');
		document.documentElement.lang = localStorage.getItem('language');
	}

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
	if (localStorage.getItem('theme')) {
		document.body.dataset.colortheme = localStorage.getItem('theme');
	}

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
			break;
	}

});

function toggleElementLanguage() {
	document.querySelector('.container-language').classList.toggle('container-language-active');
	if (document.querySelector('#arrow-symbol')) {

		switch (document.querySelector('#arrow-symbol').dataset.arrow) {

			case 'arrow-down-black':
				document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_up_black_24dp.svg';
				document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-up-black';
				break;

			case 'arrow-up-black':
				document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_down_black_24dp.svg';
				document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-down-black';
				break;

			case 'arrow-down-white':
				document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_up_white_24dp.svg';
				document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-up-white';
				break;

			case 'arrow-up-white':
				document.querySelector('#arrow-symbol').src = './img/keyboard_arrow_down_white_24dp.svg';
				document.querySelector('#arrow-symbol').dataset.arrow = 'arrow-down-white';
				break;

			default:
				console.warn('src is invalid');
		}
	}
}

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

					Array.from(document.querySelectorAll('.title-search')).forEach((resultLink) => {
						resultLink.parentElement.style.textDecoration = 'none';
						resultLink.parentElement.style.color = 'var(--primary-white)';
						resultLink.parentElement.style.verticalAlign = 'baseline';
					})
				})
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

					Array.from(document.querySelectorAll('.title-search')).forEach((resultLink) => {
						resultLink.parentElement.style.textDecoration = 'none';
						resultLink.parentElement.style.color = 'var(--primary-black)';
						resultLink.parentElement.style.verticalAlign = 'baseline';
					})
				})
			}
			localStorage.setItem('searchResultThemeClass', 'container-search-result-theme-light');
			localStorage.setItem('theme', 'white');
			document.body.dataset.colortheme = 'white';
			break;
	}
}

function chooseLanguage(e) {
	if (e.target.className === 'flag-lg' || e.target.parentElement.className === 'flag-lg') {

		if (e.target.dataset.language === 'english') {
			localStorage.setItem('language', 'en');
		}

		else if (e.target.dataset.language === 'portuguese') {
			localStorage.setItem('language', 'pt');
		}
		location.reload();
	}
}

document.body.addEventListener('click', function (e) {
	if (document.querySelector('container-language container-language-active') || e.target.closest('.language-settings') === null) {
		document.querySelector('.container-language').classList.remove('container-language-active');
	}
})

const inputText = document.querySelector('#inputText');
const searchTerm = document.querySelector('.container-result');

// Returns a function, that, as long as it continues to be  by the input event, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait = 350) => {
	let timeout;

	return (...args) => {

		if (timeout) { clearTimeout(timeout); }

		timeout = setTimeout(() => {

			func.apply(null, args);

		}, wait);

	};
};

//Returns a HTML object for each page requested(there are 10 resquests)
//that will be generated by the inputText value
const generateHtml = (results) => {
	return results.map((result) => {
		const title = `<span class="title-search">${result.title}</span>`;
		const snippet = `<span class="title-search">${result.snippet}</span>`;

		return `
		<div class="${localStorage.getItem('searchResultThemeClass')}">
			<article class="search-result-article">
				<a target="_blank" href="https://${document.body.dataset.language}.wikipedia.org/?curid=${result.pageid}">${title}</a>
			</article>
			<div class='summary'>
				${result.snippet}...
			</div>
		</div>
	`
	}).join('');
};

//this function will display the HTML object in the searchTerm element
const showResult = debounce(async () => {

	if (inputText.value.length === 0) {
		searchTerm.innerHTML = '';
		return;
	}

	try {
		const response = await fetch(`https://${document.body.dataset.language}.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${inputText.value}`);

		const searchResult = await response.json();

		const searchResultHtml = generateHtml(searchResult.query.search);

		searchTerm.innerHTML = searchResultHtml;

	} catch (error) {
		console.log(error);
	}

});

inputText.addEventListener('input', function () {
	showResult();
});