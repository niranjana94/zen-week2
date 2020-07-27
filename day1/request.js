// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
//var url_string = 'https://restcountries.eu/rest/v2/all';
var url_string = 'https://dog.ceo/api/breeds/list/all';
//var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Bangalore,Karnataka&appid=008ffcc8199c2fd7456426b8b74a39e3';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}


fetch(url_string) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))

