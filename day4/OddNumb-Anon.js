//Print odd numbers in an array 
//Anonymous function

var arr=[1,2,3,4,5];

var odd = function(ar){
    var newarr =[];
    for(var i=0;i<ar.length;i++)
    {
        if(ar[i] %2 != 0)
        {
           newarr.push(ar[i]);
        }
    }
    console.log(newarr.join(' '));
}
odd(arr);



//IIFE

var arr=[1,2,3,4,5];

(function(ar){
    var newarr =[];
    for(var i=0;i<ar.length;i++)
    {
        if(ar[i] %2 != 0)
        {
           newarr.push(ar[i]);
        }
    }
    console.log(newarr.join(' '));
})(arr);


