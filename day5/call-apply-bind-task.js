//call-apply-bind problems:

var func = function() {
    console.log(this)
}.bind(1);

func();
//output - Number {1}

console.log(----------------------------):
//Error:
var func = function() {
    console.log(this)
}.bind(1);
 
 var obj = {
    callFun : func
 }
obj.callFun.func();

//VM60:8 Uncaught TypeError: obj.callFun.func is not a function at <anonymous>:8:13
//Fix:
var func = function() {
    console.log(this)
}.bind(1);
 
 var obj = {
    callFun : func
 }
obj.callFun();
//output - Number {1}

console.log(----------------------------):

function checkFun(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.call(1,2,3,4);
/*output
Number {1}
 2
 3
 4 */
 
console.log(----------------------------):

function checkFun(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.apply(1,[2,3,4]);
/*output
Number {1}
 2
 3
 4 */
 
console.log(----------------------------):

function sumOfNumbers() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers(1,2,3);
console.log(sum);
//output - 6

console.log(----------------------------):

function sumOfNumbers() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers.call(null,1,2,3);
console.log(sum);
//output - 6

console.log(----------------------------):

Error:
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var numbers = [1,2,3];
var sum = sumOfNumbers.apply(null, numbers);
console.log(sum);

Fix:
function sumOfNumbers() {  
var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var numbers = [1,2,3];
var sum = sumOfNumbers.apply(null, numbers);
console.log(sum);

//output -6

console.log(----------------------------):

var updateZipCode = function () {
    console.log(this);
};
updateZipCode.call({ zip: '11787'});

// output - {zip: "11787"}

console.log(----------------------------):

var updateZipCode = function (newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = {
    zip: '11787'
};
updateZipCode.call(zipCode, '11888', 'us');

//output - 11888 us

console.log(----------------------------):

"use strict";
var zipcode = {
    checkZipcode : function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this);
    }
}
zipcode.checkZipcode();

/*output - 
{checkZipcode: ƒ}checkZipcode: ƒ ()__proto__: Object
{checkZipcode: ƒ}*/

console.log(----------------------------):

"use strict";
var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

var name = person.prop.getName.bind(person); //error
console.log(name());

var  name = person.prop.getName(); //correct
console.log(name);

//output - Daniel
