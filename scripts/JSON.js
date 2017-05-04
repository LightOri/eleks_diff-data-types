const jsonButton = document.getElementById('json').addEventListener("click", getData);

function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open( 'GET', 'data/data.json', true );
  xhr.onreadystatechange = function() {
   if( this.readyState === 4 && this.status !== 404 ) {
    jsonHandler( this.responseText );
   }
  }
  xhr.send();
}

function jsonHandler(data) {
	const resultsContainer = document.getElementById('result');
	const dataList = JSON.parse(data);

  const colorsArray = dataList.colorsArray
  const colorsList = colorsArray.map(key => '<br>' + key.colorName.toUpperCase() + ' (' + key.hexValue + ')')

  resultsContainer.innerHTML = 'All colors in the JSON file: ' + colorsList;
};