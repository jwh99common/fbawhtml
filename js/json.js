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
const data = {
	"age": 83,
	"name": "Mini Corp."
	}


	set fso = CreateObject("Scripting.FileSystemObject"); 
    	set s   = fso.CreateTextFile("json/filename.txt", True);	

	
	var firstName = document.getElementById('FirstName');
    	var lastName  = document.getElementById('lastName');
 
    	s.writeline("First Name :" + FirstName);
    	s.writeline("Last Name :" + lastName);
 
    	s.writeline("-----------------------------");
    	s.Close();
  
}
