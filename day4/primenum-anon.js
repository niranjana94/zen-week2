//Return all the prime numbers in an array

//Anonymous function
var prime = function(num){
  
    var result = false;
    for(var n = num - 1; n > 1; n--){
        result = (num % n === 0) + result;
    }
    
    if(result === 0 && num > 1){
      return true;
    }return false;
  }
  
var arr=[1,2,3,4,5];
var newArr = []; 
  
  for(n=0; n<arr.length; n++){
    if(prime(arr[n])){
      newArr.push(arr[n]);
    }
  }
console.log(newArr.join(' '));

//IIFE
  
var arr=[1,2,3,4,5];
var newArr = []; 
  
  for(n=0; n<arr.length; n++){
    if((function(num){
  
    var result = false;
    for(var n = num - 1; n > 1; n--){
        result = (num % n === 0) + result;
    }
    
    if(result === 0 && num > 1){
      return true;
    }return false;
  })(arr[n])){
      newArr.push(arr[n]);
    }
  }
console.log(newArr.join(' '));
