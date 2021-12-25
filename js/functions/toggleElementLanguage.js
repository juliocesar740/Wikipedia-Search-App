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

export default toggleElementLanguage;