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

export default chooseLanguage;