// api url
const api_url = "functions/hw.js";

// Defining async function

async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of Text
	var data = await response.text();
	
	
	console.log(data);
	
}

// Calling that async function

console.log (api_url);

getapi(api_url);



