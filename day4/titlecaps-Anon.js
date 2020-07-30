//Convert all the strings to title caps in a string array

//Anonymous function

var strarr=['one','two','three'];

var caps = function(ar){
    var newarr =[];
    for(var i=0;i<ar.length;i++)
    {
        newarr.push(ar[i].charAt(0).toUpperCase() + ar[i].slice(1));
    }
    console.log(newarr.join(' '));
}
caps(strarr);

//IIFE

var strarr=['one','two','three'];

(function(ar){
    var newarr =[];
    for(var i=0;i<ar.length;i++)
    {
        newarr.push(ar[i].charAt(0).toUpperCase() + ar[i].slice(1));
    }
    console.log(newarr.join(' '));
})(strarr);
