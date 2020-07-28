var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';
request.open('GET',url_string , true);
request.onreadystatechange = function () {  
    if (request.readyState === 4) 
	{  
        if (request.status === 200) {  
          console.log(request.responseText)  
        } else {  
           console.log("Error", request.statusText);  
        }  
    }  
};
request.send();

request.onload = function() {  
  if(request.status!=200)
  {
   console.log(xhr.statusText);
  }
  else
  {
var data = JSON.parse(this.response)
console.log(data);
}
};



  