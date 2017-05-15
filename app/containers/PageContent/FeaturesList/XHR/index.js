import React from 'react';

class XHRContainer extends React.Component {

  XHR() {
      function mockXhrData() {
          const request = new XMLHttpRequest();

          request.open('GET', 'https://private-anon-71734f12f9-vam.apiary-mock.com/api/v1/profile');

          request.setRequestHeader('Content-Type', 'application/json');
          request.setRequestHeader('token', '475e90b88bfac57baec6218f22be982f');

          request.send();

          request.onreadystatechange = function() {
              const DONE = 4;
              if (this.readyState === DONE) {
                  xhrHandler(this.responseText);
              }
          };
      }

      function xhrHandler(data) {
          const resultsContainer = document.getElementById('result');
          const parsedData = JSON.parse(data);

          //user data
          const profile = parsedData.data.profile;
          const email = profile.email
          const firstname = profile.firstname
          const lastname = profile.lastname
          const company = profile.company
          const id = profile.id_company

          const userData = 'Firstname: ' + firstname + '<br>' + 'Email: ' + email + '<br>' + 'Lastname: ' + lastname + '<br>' + 'Company: ' + company + '<br>' + 'Company ID: ' + id + '<br>'

          //show data on the page
          resultsContainer.innerHTML = userData;
      };

      mockXhrData();
  };


  render() {
    return (
        <li id="xhr" className="list-group-item" onClick={this.XHR}>xmlHttpRequest</li>
    )
  }
}

export default XHRContainer;