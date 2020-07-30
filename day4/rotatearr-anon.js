//Rotate an array by k times and return the rotated array

//Anonymous function

var arr=[1,3,5,2,7];
var k=2;

var rotate = function(ar,k){
     for(var i=0;i<k;i++)
     {
         for(var j=ar.length-1;j>0;j--)
         {
             var temp=0;
              temp=ar[j];
              ar[j]=ar[j-1];
              ar[j-1] = temp;

         }
     }
     console.log(ar);
}
rotate(arr,k);

//IIFE

var arr=[1,3,5,2,7];
var k=2;

(function(ar,k){
     for(var i=0;i<k;i++)
     {
         for(var j=ar.length-1;j>0;j--)
         {
             var temp=0;
              temp=ar[j];
              ar[j]=ar[j-1];
              ar[j-1] = temp;

         }
     }
     console.log(ar);
})(arr,k);



