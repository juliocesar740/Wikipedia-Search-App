import configuration from './functions/configuration.js'
import toggleElementColorTheme from './functions/toggleElementColorTheme.js';
import toggleElementLanguage from './functions/toggleElementLanguage.js';
import chooseLanguage from './functions/chooseLanguage.js';
import showResult from './functions/showResult.js';

window.addEventListener('DOMContentLoaded', configuration());

document.body.addEventListener('click', function (e) {
	if (document.querySelector('container-language container-language-active') || e.target.closest('.language-settings') === null) {
		document.querySelector('.container-language').classList.remove('container-language-active');
	}
});

document.querySelector('#icon-theme').addEventListener('click',function(e){toggleElementColorTheme(e);});
document.querySelector('.choose-language-block').addEventListener('click',function(e){toggleElementLanguage(e)});
document.querySelector('.container-language').addEventListener('click',function(e){chooseLanguage(e)});

inputText.addEventListener('input', function () {showResult();});