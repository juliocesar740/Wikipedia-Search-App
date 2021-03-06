//Returns a HTML object for each page requested(there are 10 resquests)
//that will be generated by the inputText value
const generateHtml = (results) => {
	return results.map((result) => {
      
		const title = `<span class="title-search">${result.title}</span>`;

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

export default generateHtml;