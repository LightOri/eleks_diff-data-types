$('#jQueryAJAX').click(function(){
	$.ajax({
	  url: "https://private-anon-71734f12f9-vam.apiary-mock.com/api/v1/profile",
	  headers: {"Content-Type": "application/json",
				"token": "475e90b88bfac57baec6218f22be982f"},
	  success: function(data){
	    console.log( data );
	    jQueryAJAXHandler(data);
	  }
	});
});

function jQueryAJAXHandler(data) {
	const resultsContainer = document.getElementById('result');

	//user data
	const email = data.data.profile.email
	const firstname = data.data.profile.firstname
	const lastname = data.data.profile.lastname
	const company = data.data.profile.company
	
	const userData = 'Firstname: ' + firstname + '<br>'
			+ 'Email: ' + email + '<br>'
			+ 'Lastname: ' + lastname + '<br>'
			+ 'Company: ' + company + '<br>'

	//show data on the page
	resultsContainer.innerHTML = userData;
};

