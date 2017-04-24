const xhrButton = document.getElementById('xhr').addEventListener("click", mockXhrData);

function mockXhrData(){
	const request = new XMLHttpRequest();

	request.open('GET', 'https://private-anon-71734f12f9-vam.apiary-mock.com/api/v1/profile');

	request.setRequestHeader('Content-Type', 'application/json');
	request.setRequestHeader('token', '475e90b88bfac57baec6218f22be982f');

	request.send();

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
	    console.log('Status:', this.status);
	    console.log('Headers:', this.getAllResponseHeaders());
	    console.log('Body:', this.responseText);
	    xhrHandler(this.responseText);
	  }
	};
}

function xhrHandler(data) {
	const resultsContainer = document.getElementById('result');
	resultsContainer.innerHTML = data;
	
};