import React from 'react';

class PromiseContainer extends React.Component {

  Promise() {
      // creates a promise which will get data from json file
      function getPromiseData() {
          return new Promise((resolve, reject) => {

              let xhr = new XMLHttpRequest()
              xhr.open('GET', 'data.json', true)

              xhr.onreadystatechange = function() {
                  const DONE = 4,
                      NOT_FOUND = 404;

                  if (this.readyState < DONE) {
                      // This empty verification should stay here. Otherwise the promise will return the first rejected state - and 'resolved' state won't fire, because promise return only the first state.
                  } else if (this.readyState === DONE && this.status !== NOT_FOUND) {
                      resolve(this.responseText)
                  } else {
                      reject({
                          status: this.status,
                          statusText: xhr.statusText
                      })
                  }
              }

              xhr.onerror = function() {
                  reject({
                      status: this.status,
                      statusText: xhr.statusText
                  })
              }

              xhr.send()
          })
      }

      // will handle and display data on a page
      function promiseHandler(data) {
          const resultsContainer = document.getElementById('result')
          const dataList = JSON.parse(data);

          const colorsArray = dataList.colorsArray
          const colorsList = colorsArray.map(key => '<br>' + key.colorName.toUpperCase() + ' (' + key.hexValue + ')')

          resultsContainer.innerHTML = 'Colors received with promise: ' + colorsList;
      };

      // get data received in promise and handle these data
      function dataOnClick() {
          return getPromiseData()
              .then(data => promiseHandler(data))
              .catch(err => { alert('Something wrong. Error status text: ', err.statusText) })
      };

      dataOnClick();
  };


  render() {
    return (
        <li id="promise" className="list-group-item" onClick={this.Promise}>Promises</li>
    )
  }
}

export default PromiseContainer;