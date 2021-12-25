import debounce from "./debounce.js";
import generateHtml from "./generateHtml.js";

const inputText = document.querySelector('#inputText');
const searchTerm = document.querySelector('.container-result');

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

	} 
   catch (error) {
		console.log(error);
	}

});

export default showResult;