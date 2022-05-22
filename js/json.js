// api url
const api_url = "json/employees.json";

// Defining async function

async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	
	
	show(data);
	
}

// Calling that async function

console.log (api_url);
getapi(api_url);


// Function to define innerHTML for HTML table

function show(data) {
	 let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
         </tr>`;
	
	for(var i = 0; i < data.length; i++) {
		var r = data[i]; 
		tab += `<tr> 
    		<td>${r.name} </td>
    		<td>${r.age}</td>   		  		
		</tr>`;
    		}
	document.getElementById("employees").innerHTML = tab;
	
}


function updateJson () {
	const fs = require("fs");
	fs.readFile(api_url, "utf8", (err, jsonString) => {
  	if (err) {
    		console.log("File read failed:", err);
   	 return;
  	}
  	console.log("File data:", jsonString);
});
	
}
