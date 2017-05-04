const promiseButton = document.getElementById('promise').addEventListener("click", getData);


let promise = new Promise((resolve, reject) => {

resolve("result")



})




/*function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open( 'GET', 'data/data.json', true );
  xhr.onreadystatechange = function() {
   if( this.readyState === 4 && this.status !== 404 ) {
    console.log('true')
    return resolve( this.responseText )
   } else {
    console.log('false')
    return reject( err )
   }
  }
  xhr.send();
}*/
