//Return all the palindromes in an array

//Anonymous function

var arr=['madam','mom','noon','low'];

var palind = function(ar){
     var newarr=[];
    for(var i=0;i<ar.length;i++)
    {
       if(ar[i].split('').reverse().join('') === ar[i])
       {
         newarr.push(ar[i]);
       }
    }
    console.log(newarr.join(' '));
}
palind(arr);

//IIFE

var arr=['madam','mom','noon','low'];

(function(ar){
     var newarr=[];
    for(var i=0;i<ar.length;i++)
    {
       if(ar[i].split('').reverse().join('') === ar[i])
       {
         newarr.push(ar[i]);
       }
    }
    console.log(newarr.join(' '));
})(arr);