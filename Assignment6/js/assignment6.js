// Assignment 6
// Sean Surjanto
// 148057177

// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = makeRequest(1);


function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	
	 var url = "https://reqres.in/api/users?page=" + pageNum;
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			document.querySelector("#data").innerHTML = "";
			for (var i = 0; i < jsData.data.length; i ++) {
				var tableSelector = document.querySelector("#data");
				var tableRow = document.createElement("tr");
				var colID = newColumn(jsData.data[i].id);
				var colFirst = newColumn(jsData.data[i].first_name);
				var colLast = newColumn(jsData.data[i].last_name);
				var colAvatar = avatarColumn(jsData.data[i].avatar);
				tableRow.appendChild(colID);
				tableRow.appendChild(colFirst);
				tableRow.appendChild(colLast);
				tableRow.appendChild(colAvatar);
				tableSelector.appendChild(tableRow);
			}
			

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	

// function to create no columns
function newColumn(data) {
	var column = document.createElement("td");
	var input = document.createTextNode(data);
	column.appendChild(input);
	return column;
}

// function to create new columns with pictures
function avatarColumn(pic) {
	var column = document.createElement("td");
	var image = document.createElement("img");
	image.src = pic;
	column.appendChild(image);
	return column;
}