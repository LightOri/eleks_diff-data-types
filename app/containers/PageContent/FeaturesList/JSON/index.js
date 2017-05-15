import React from 'react';

class JSONContainer extends React.Component {

  JSON() {
      function getData() {
          let xhr = new XMLHttpRequest();
          xhr.open('GET', 'data.json', true);
          xhr.onreadystatechange = function() {
              const DONE = 4,
                  NOT_FOUND = 404;
              if (this.readyState === DONE && this.status !== NOT_FOUND) {
                  jsonHandler(this.responseText);
              }
          }
          xhr.send();
      }

      function jsonHandler(data) {
          const resultsContainer = document.getElementById('result');
          const dataList = JSON.parse(data);
          const colorsArray = dataList.colorsArray;
          const colorsList = colorsArray.map(key => `<p style="color: ${key.hexValue}">${key.colorName.toUpperCase()} (${key.hexValue})</p>`);

          resultsContainer.innerHTML = '<h2>All colors in the JSON file:</h2>' + colorsList.join('');
      };

      getData();
  };

  render() {
    return (
        <li id="json" className="list-group-item" onClick={this.JSON}>json</li>
    )
  }
}

export default JSONContainer;