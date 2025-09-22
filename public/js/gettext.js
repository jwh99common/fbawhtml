async function getText ()  {
	const response = await fetch('https://falling-sea-d98a.john-hardie.workers.dev');
	
  	const text = await response.text();
	
	console.log (text);
	
	return (text);
}

