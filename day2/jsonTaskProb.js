Problem1:

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
  var arr=[];
  for(var value in obj)
  {
	  arr.push(obj[value]);
  }
  return arr;
}
console.log(printAllValues(obj));

Problem2:

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllKeys(obj) {
    return Object.keys(obj);
}

console.log(printAllKeys(obj));

Problem3:

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    return Object.entries(obj)  
}
console.log(convertListToObject(obj));

Problem4:

var arr = ['GUVI', 'I', 'am', 'geek'];
function transformFirstAndLast(arr) {
    var obj={};
    obj[arr[0]]=arr[arr.length-1];
    return obj;
}
console.log(transformFirstAndLast(arr));

Problem5:

var arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
 ];
 function fromListToObject(arr) {
   var newObject = {};
   for (let i in arr) {
     newObject[arr[i][0]] = arr[i][1];
   }
   return newObject;
 }
 console.log(fromListToObject(arr));
 
Problem6:

var arr = [
  [
    ["firstName", "Vasanth"],
     ["lastName", "Raja"],
     ["age", 24],
     ["role", "JSWizard"],
   ],
   [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
   ],
  ];
 function transformEmployeeData(arr) {
  var arr1 = [];
   for (var i in arr) {
     let obj = {};
     for (var j in arr[i]) {
      obj[arr[i][j][0]] = arr[i][j][1];
     }
     arr1.push(obj);
   }
   return arr1;
 }
 console.log(transformEmployeeData(arr));
 
Problem7: 

var expected = { foo: 5, bar: 6 };
 var actual = { foo: 6, bar: 5 };
 function assertObjectsEqual(actual, expected, testName) {
   // your code here
   if (JSON.stringify(expected) == JSON.stringify(actual)) {
     return "Passed";
   } else {
    return `Failed ${testName} Expected ${JSON.stringify(
       expected
   )}, but got ${JSON.stringify(actual)}`;
   }
 }
 console.log(
   assertObjectsEqual(actual, expected, "detects that two objects are equal")
 );
 
Problem8: 

var securityQuestions = [
   {
     question: "What was your first pet’s name?",
     expectedAnswer: "FlufferNutter",
   },
   {
     question: "What was the model year of your first car?",
     expectedAnswer: "1985",
   },
   {
     question: "What city were you born in?",
     expectedAnswer: "NYC",
   },
 ];
 function chksecurityQuestions(securityQuestions, question, answer) {
   // your code here
   for (let i in securityQuestions) {
    if (
        securityQuestions[i].question == question &&
        securityQuestions[i].expectedAnswer == answer
     ) {
       return true;
     }
   }
   return false;
 }
 var ques = "What was your first pet’s name?";
 var ans = "FlufferNutter";
 var ques = "What was your first pet’s name?";
 var ans = "DufferNutter";
 var status = chksecurityQuestions(securityQuestions, ques, ans);
 console.log(status);
 
 Problem9: 
 var students = [
  {
      name: "Siddharth Abhimanyu",
      age: 21,
   },
   { name: "Malar", age: 25 },
   { name: "Maari", age: 18 },
   { name: "Bhallala Deva", age: 17 },
   { name: "Baahubali", age: 16 },
   { name: "AAK chandran", age: 23 },
   { name: "Gabbar Singh", age: 33 },
   { name: "Mogambo", age: 53 },
   { name: "Munnabhai", age: 40 },
   { name: "Sher Khan", age: 20 },
   { name: "Chulbul Pandey", age: 19 },
   { name: "Anthony", age: 28 },
   { name: "Devdas", age: 56 },
 ];
 function returnMinors(arr) {
   let result = [];
   for (let i in arr) {
     if (arr[i].age < 20) {
       result.push(arr[i].name);
     }
   }
   return result;
 }
 console.log(returnMinors(students));

