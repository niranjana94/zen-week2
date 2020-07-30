//Remove duplicates from an array

//Anonymous function

var arr=[1,3,5,2,7];

var dup = function(ar){
     var newarr = [...new Set(ar)];
    console.log(newarr);
}
dup(arr);

//IIFE

var arr=[1,3,5,2,7];

(function(ar){
     var newarr = [...new Set(ar)];
    console.log(newarr);
})(arr);
