//Sum of all numbers in an array

//Anonymous function

var arr=[1,2,3,4,5];

var sumval = function(ar){
    var sum=0;
    for(var i=0;i<ar.length;i++)
    {
        sum+= +ar[i];
    }
    console.log(sum);
}
sumval(arr);

//IIFE

var arr=[1,2,3,4,5];

(function(ar){
    var sum=0;
    for(var i=0;i<ar.length;i++)
    {
        sum+= +ar[i];
    }
    console.log(sum);
})(arr);