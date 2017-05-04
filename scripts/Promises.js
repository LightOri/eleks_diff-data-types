const promiseButton = document.getElementById('promise').addEventListener("click", dataOnClick)

// creates a promise which will get data from json file
function getPromiseData() {
    return new Promise((resolve, reject) => {
        console.log('progres...')

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'data/data.json', true)

        xhr.onreadystatechange = function() {
        	if (this.readyState < 4) {
        		console.log('ReadyState: ', this.readyState)
        	} else if (this.readyState === 4 && this.status !== 404) {
                console.log('ReadyState: ', this.readyState)
                resolve(this.responseText)
            } else {
            	console.log('false', this.readyState)
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
    console.log("www", data)
    const dataList = JSON.parse(data);

    const colorsArray = dataList.colorsArray
    const colorsList = colorsArray.map(key => '<br>' + key.colorName.toUpperCase() + ' (' + key.hexValue + ')')

    resultsContainer.innerHTML = 'Colors received with promise: ' + colorsList;
};

// get data received in promise and handle these data
function dataOnClick() {
    return getPromiseData()
        .then(data => promiseHandler(data))
        .catch(err => {console.error('Something wrong. Error: ', err.statusText) })
}
