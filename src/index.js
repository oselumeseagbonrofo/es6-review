// assignment
// var a;
// a = 10;
// b = 11;
// var c = 12;

// console.log("a = "+a+ "; b = "+b+ "; c= "+ c)

// //mutability of variables
// a = 13; //Reassign a new value of type number to a.
// console.log(a); //Prints out 13.
// a = "Another value which is a string"; //Reassign a new value of type string to a.
// console.log(a); //Prints out Another value which is a string.
// a = true; //Reassign a new value of type boolean - i.e. true or false.
// console.log(a); //Prints out true.

// primitive data types
// var d;
// console.log(d); //This will print out the value undefined.
// a = null;
// console.log(a); //This will print out the value null.


// Arithmetic operations
// a = 10; //Assign variable a the value of 10
// b = 20; //Assign variable b the value of 20
// c = a + b; //Add value in a and b and put the result in variable c.
// console.log(c); //This should print out 30
// console.log(b - a); //Subtract a value from b value; displays 10 in console.
// console.log(b/a); //Divide b value by a value; displays 2 in console.
// console.log(a*b); //Multiply a value by b value; displays 200 in console.
// console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console.
// console.log(a**2); //a value raised to power 2; displays 100 in console.
// a++; //Increment a value.
// console.log(a); //Displays 11 in console.
// b--; //Increment b value.
// console.log(b); //Displays 19 in console.

// String operations
// firstName = "Oselumese";
// lastName = "Agbonrofo";
// fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName
// console.log(fullName); //This should output the full name Oselumese Agbonrofo.


// comparison operations
// a = 10;
// console.log(a < 11); //Displays true in console
// var test = a > 20; //Declares a variable named test and gives it the value of false.
// console.log(test); //Displays false in console
// console.log(a >= 10);  //prints true
// console.log(a <= 20); //prints true
// console.log(a == 10); //prints true
// console.log(a === "10"); //prints false because a holds an integer value of 10 and not string value "10"
// console.log(a == "10") // prints true because it compares only variable values
// console.log(a != 20) // prints true
// console.log(a !== "10") // prints true

// a = 1;
// b = 2;
// console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
// console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
// console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
// console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
// console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.
// console.log(!(a < 3 && b > 3)) //prints True


// Ternary operations
// var age = 18;
// var adult = (age =  18)? "Yes" : "No";
// console.log(adult); //This should display the string "Yes"

// Bitwise operations
// console.log(5 << 1); //Equivalent of 5 * 2
// console.log(5 <<2); //Equivalent of 5 * 4
// console.log(5 <<3); //Equivalent of 5 * 8
// console.log(40 >> 1); //Equivalent of 40 / 2
// console.log(40 >>2); //Equivalent of 40 / 4
// console.log(40 >>3); //Equivalent of 40 / 8
// console.log(45 << 0); // Equivale)nt of 45 * 1

//typeof operator
// console.log(typeof "Oselumese Agbonrofo"); //Returns the value "string"
// console.log(typeof false); //Returns the value "boolean"
// console.log(typeof (10 + 10)); //Returns the value "number"
// console.log(typeof 33); //Returns the value "number"


// if/else statement
// var minimumVotingAge = 18;
// var age = 16;
// if (age < minimumVotingAge){
//     console.log("You will be eligible to vote in "+ (minimumVotingAge - age)+ " years")
// }else{
// console.log("Eligible to vote");
// }


// switch statement
// var dayOfTheWeekCount = 6;
// switch (dayOfTheWeekCount){
// case 1:
// console.log("Sunday");
// break;
// case 2:
// console.log("Monday");
// break;
// case 3:
// console.log("Tuesday");
// break;
// case 4:
// console.log("Wednesday");
// break;
// case 5:
// console.log("Thursday");
// break;
// case 6:
// console.log("Friday");
// break;
// case 7:
// console.log("Saturday");
// break;
// default:
// console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
// } //The switch statement prints out Friday


// var ageRange = 25;
// switch (ageRange){
// case "below 1":
// console.log("Infant");
// break;
// case "below 13":
// console.log("Pre-teen");
// break;
// case "below 20":
// console.log("Teenager");
// break;
// default:
// console.log("Adult")
// }//This switch statement should print out Adult

// for loop
// for (var c = 1; c < 11; c++){
//     console.log(c);
// }

// for (var c = 1; c < 11; c++){
//     if(c == 7) break;
//     console.log(c);
// }

// for (var c = 1; c < 11; c++){
//     if(c == 7) continue;
//     console.log(c);
// }

// while loop
// var n = 0;
// while(n != 5){
// n = Math.floor((Math.random() * 10));
// console.log(n)
// }

// do..while loop
// var x = 0;
// do{
// x+= 1;
// console.log(x)
// }while(x < 10)

// var readlineSync = require('readline-sync'); //make the module just installed available for use in our program
// var answer; //declare variable named answer;
// do{
// //use question() function to read input and assign the value to answer
// answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
// console.log('You asked me to '+ answer)
// }while(answer != 'exit')


// Readline inbuilt function use
// var readline = require('readline'); //load the readline module into the runtime environment
// //Next, create the input/output interface as required by readline module.
// var readlineAsync = readline.createInterface({
// input: process.stdin,
// output: process.stdout
// });
// //Next, declare and define a function named recursiveReadLineAsync
// function recursiveReadLineAsync() {
// readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){
// console.log('You asked me to ' + answer)
// if (answer == 'exit') //Condition for terminating further self call
// return readlineAsync.close(); //quit the function if answer == exit
// recursiveReadLineAsync(); //No exit yet. Call self again to ask another question.
// });
// };
// //Finally, invoke the defined function to start the recursion
// recursiveReadLineAsync();


// Functions
// //By direct declaration
// function addTwoNumbersA(number1, number2){
//     return number1 + number2; //Add the two numbers passed when function is called
//     }
// //By expression
//     var addTwoNumbersB = function(number1, number2){
//     return number1 + number2;
//     }

//     console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50).
//     console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).

//Define a function that receives a number to be squared
// function square(number){
//     number = number**2;
//     return number;
//     }
//     var number = 20; //Declare variable that holds number to be squared
//     var numberSquared = square(number); //Pass number (by value) to the square() function
//     console.log(numberSquared); //The function returns 400
//     console.log(number); //The value of number variable outside the function remains 20

// Allows one to pass in indefinite number of arguments to a function using arguments object
// function multiplier(){
//     var product = 1;
//     for (var x=0; x < arguments.length; x++){
//     product = product * arguments[x];
//     }
//     return product;
//     }
//     console.log(multiplier(10,30));//Prints 300 to the console
//     console.log(multiplier(10,30,10));//Prints 3000 to the console


// // illustration to show variable scope
// var accumulatedTotal = 0; //Declare and initialize a global variable.
// //Declare function named sum that expects two parameters named number1 and number2.
// function sum(number1, number2){
// //The variables named total, number1 and number2 below are function scope variables.
// //They are not visible from outside the function.
// var total = number1 + number2;
// //Update the global variable named accumulatedTotal.
// //Even though not declared within the function, it is visible.
// accumulatedTotal = accumulatedTotal + total;
// return total;
// }
// console.log(sum(2,3)); //Call sum() function and print to console the total returned.
// console.log(sum(10,20)); //Call sum() function and print to console the total returned.
// console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35

// standard built-in functions still in use
// w1 = encodeURI("http://www.website.com/?fullname=Oselumese Agbonrofo");
// console.log(w1);
// console.log(decodeURI(w1));
// w2 = encodeURIComponent("http://www.website.com/?fullname=Oselumese Agbonrofo");
// console.log(w2);
// console.log(decodeURIComponent(w2));



// Array Literals
//Declare a variable named vehicles and assign an array literal that contains three elements
// var vehicles = ["car","lorry","trailer", 1, [1,2,3]];
// console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ]
// //Declare a variable named basket and assign an empty array literal.
// var basket = [ ];
// console.log(basket); //Prints out the array literal [ ]
// //Declare a variable named myExpressions and assign an array literal which contains expressions.
// var myExpressions = ["car", 2+3, 10, true]; //The second element includes a plus operation
// console.log(myExpressions); //Prints out [ 'car', 5, 10, true]
// console.log(myExpressions[0]); //Prints out 'car'
// console.log(myExpressions[1]); //Prints out 5
// console.log(myExpressions[2]); //Prints out 10
// console.log(myExpressions[3]); //Prints out true

// myExpressions[3] = false; //Change the expression at position 3.
// console.log(myExpressions[3]); //Prints out false

// var myExpressions = ["car", , 10, true]; //The second element (i.e. index position 1), is undefined
// console.log(myExpressions[1]); //Prints out undefined



// Object Literal
// var myObject = {
//     name: {
//     firstName : "Oselumese",
//     surname: "Agbonrofo"
//     },
//     expertise: "Data Science",
//     languages: ["Python","JavaScript","Java","C"],
//     isStudent: true,
//     favouriteCombination: 2 + 2
// }

// Accessing object properties
// console.log(myObject.name); //Prints out { firstName: 'Oselumese', surname: 'Agbonrofo' }.
// console.log(myObject['name']); //Also prints out { firstName: 'Oselumese', surname: 'Agbonrofo' }.

// console.log(myObject.expertise); //Prints out Software design and development
// console.log(myObject['expertise']); //Also prints out Software design and development

// console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
// console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]

// console.log(myObject.isStudent); //Prints out false
// console.log(myObject['isStudent']); //Also prints out false

// console.log(myObject.favouriteCombination); //Prints out 6
// console.log(myObject['favouriteCombination']); //Also prints out 6

//Accessing nested objects
// console.log(myObject.name.firstName); //Prints out Oselumese.
// console.log(myObject['name']['firstName']); //Also prints out Oselumese.

// myObject.favouriteCombination = 9 + 9;
// console.log(myObject.favouriteCombination); //Prints out 18

// Adding new property to existing object
// myObject.newProperty = ["yes", "no"]
// console.log(myObject)

// var phones = {
//     make: 'Samsung',
//     model: 'S7',
//     cost: 500
//     }
//     console.log('make' in phones); //Prints out true
//     delete phones.make; //Delete property phones.make
//     console.log('make' in phones); //Prints out false


// User-created object blueprints
// function Person(firstName, lastName, height, weight){
// //Below are properties
// this.firstName = firstName;
// this.lastName = lastName;
// this.height = height;
// this.weight = weight;
// //Below is a method
// this.getFullName = function(){ return this.firstName + " " + this.lastName}
// }

// var person = new Person("Oselumese","Agbonrofo","5'11", "70kg")
// console.log (person.firstName); //Prints out Oselumese
// console.log(person.getFullName());

// // constructor is limited to created object
// console.log(person.constructor);

// // prototype refers to the blueprint
// console.log(Person.prototype);
// console.log(Person.constructor);

// // new attribute addition to prototype/ blueprint
// Person.prototype.complexion = "dark brown";

// console.log(person.complexion);

// // new method addition to prototype/ blueprint/ class
// Person.prototype.getComplexion = function ( ){
//     return this.complexion
//     }
//     Person.prototype.setComplexion = function (complexion){
//     this.complexion = complexion;
//     }
//     person.setComplexion('black'); //Use the method just added to blueprint person
//     console.log(person.getComplexion( )); //Prints out black.



// built-in object blueprints
// Math
// console.log(Math.E); //The static property E holds the value of Euler’s number i.e. 2.718281828459045.
// console.log(Math.PI); //The static property PI holds the value of Pi i.e. 3.141592653589793.
// console.log(Math.cos(45)); //Method returns the cosine of number passed as argument.
// console.log(Math.abs(-30)); //Method returns the absolute number equivalent of argument.
// console.log(Math.random( )); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1.
// console.log(Math.max(10,5,60)); //Method returns the maximum number among the arguments passed.
// console.log(Math.min(10,5,60)); //Method returns the minimum number among the arguments passed.

// Date
// var today = new Date(); //Get today’s date
// console.log(today);
// //Instantiate new Date passing year, month-index and day in numbers
// var birthday = new Date(2005,5,22); //Note that month index is 0-11 for Jan-Dec
// console.log(birthday);
// //Instantiate new Date passing equivalent datetime string with date same as above
// var birthday = new Date('June 22, 2005 19:00:00');
// console.log(birthday);
// //Instantiate new Date passing date and time using numbers
// var birthday = new Date(2005, 5, 22, 19, 0, 0);//Passing year, month-index, day, hour, min, sec as numbers
// console.log(birthday);
// //Below is a simple function that calculates present age
// function calculateAge(birthday){
// var today = new Date();
// var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time
// //Get the equivalent year for difference
// var yearEquivalent = new Date(difference).getFullYear();
// //Subtract 1970 to get age.
// return yearEquivalent - 1970;
// }
// //Invoke function calculateAge()
// var birthday = new Date (2005,6,22);
// console.log(calculateAge(birthday)); //Prints out birthday

// function sleep(milliseconds) {
//     console.log("Going to sleep for " + milliseconds + " milliseconds...")
//     var begin = new Date().getTime();
//     do{
//     nextTime = new Date().getTime();
//     }while(nextTime - begin < milliseconds)
//     console.log("Sleep over");
//     }
//     //Call sleep
//     sleep(3000);


// RegExp
// var re = new RegExp('xyz'); //'xyz' is the pattern to be matched. option set
// //var re = /xyz/;

// var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
// //Simply check if pattern is in searchString using test() method.
// console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString.
// //Find index position using exec() method
// console.log(re.exec(searchString)); //Returns an array containing pattern, index and input as shown in comment below
// /*[ 'xyz',
// index: 7,
// input: 'Locate xyz pattern in this text. The xyz could be in XYZ location' ]*/
// //Find index position using search() method of String object passing the pattern as argument.
// console.log(searchString.search(re)); //Returns index position.

// // var re = new RegExp('xyz','g'); //'xyz' is the pattern to be matched; global option set.
// var re = /xyz/g; // literal version of RegExp


// // i option makes RegExp case insensitive
// var re = new RegExp('xyz','gi'); //'xyz' is the pattern to be matched; g and i options set.
// //var re = /xyz/gi;


// var result;
// while((result = re.exec(searchString))!= null){ //loop until no more match
// //display the index found and the string
// console.log("Index position " + result.index + " contains " + result[0]);
// }



// JSON String 
// var personJSON1 =' { \
//      "firstName":"Oselumese", \
//      "lastName": "Agbonrofo", \
//      "complexion": "brown", \
//      "heightInMeters": 1.82,\
//      "programmer" : true, \
//      "hackathonWin" : null, \
//      "degrees" : ["BSc"] \
//  }'

// // console.log(personJSON1);

// var personJSON2 =' { \
//     "names":{ \
//     "firstName":"Oselumese", \
//     "lastName": "Agbonrofo" \
//     }, \
//     "complexion": "brown", \
//     "heightInMeters": 1.82, \
//     "programmer" : true, \
//     "hackathonWin" : null, \
//     "degrees" : ["BSc"] \
//     } '

// // console.log(personJSON2)

// //Convert JSON string named personJSON1 to object equivalent
// var p1Object = JSON.parse(personJSON1);
// console.log(p1Object);
// //Convert JSON string named personJSON2 to object equivalent
// var p2Object = JSON.parse(personJSON2);
// console.log(p2Object);

// // Convert JSON object back to JSON string
// // var p1JSON = JSON.stringify(p1Object);
// // console.log(p1JSON)

// // Convert JSON object back to JSON string
// // var p2JSON = JSON.stringify(p2Object);
// // console.log(p2JSON)

// //dot notation approach to accessing object properties
// console.log(p1Object.complexion); //Returns brown
// console.log(p1Object.degrees[0]); //Returns BSc
// console.log(p2Object.names.firstName); //Returns Oselumese

// //Array style approach to accessing object properties
// console.log(p1Object["complexion"]); //Also returns brown
// console.log(p1Object["degrees"][0]); //Also returns BSc
// console.log(p2Object["names"]["firstName"]); //Also returns Oselumese



// String Object
// var x = 'This is a string literal';

// var y = new String ('This is a String object');
// console.log(x); //This will output 'This is a string literal'
// console.log(y); //This will output '[String: 'This is a String object']'
// console.log(y.toString()); //This will output 'This is a String object'

// var z = x + y;
// console.log (z); //This will output 'This is a string literalThis is a String object'. Notice that there is no need to invoke toString() method

// console.log(x.length); //This should print out 24 which is the length of the string 'This is a string literal'

// console.log(x.constructor); //This should output [Function: String]


// String methods
// concat()
// var firstName = 'Oselumese';
// var lastname = 'Agbonrofo';
// var fullName = firstName.concat(' ' , lastname); //Concatenate firstName, space and last name
// console.log(fullName); //This should output the string 'Oselumese Agbonrofo'
// var fullName = firstName + ' ' + lastname; //This is equivalent to the concat statement above.
// console.log(fullName); //This should also output the string 'Oselumese Agbonrofo'

// includes()
// console.log(fullName.includes('Oselumese')); //Outputs true

// search()
// var x = 'Let us search this text for Oselumese. If Oselumese is found, …';
// var regex = /Oselumese/gi; //All occurences of Oselumese independent of case
// console.log(x.search(regex)); //This will return only the index of the first occurrence of condition specified in the regular expression i.e. 28 which is the index for 'Oselumese'

// indexOf = doen't support case insensitive search
// var x = 'Let us search this text for oselumese. If Oselumese is found, …';
// var searchTerm = 'oselumese';
// var matchIndex;
// var startIndex = 0; //start from the beginning
// while((matchIndex = x.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
// console.log(matchIndex); //Output the index of match
// startIndex = matchIndex + 1; //change search start position to beyond the last match index
// }

// var regex = /oselumese/gi; //All occurences of oselumese independent of case
// var x = 'Let us search this text for oselumese. If Oselumese is found, …';
// var match;
// while((match = regex.exec(x))!= null){ //loop until no more match
// //Below should display the index found and the string. Expected output are:
// //Index position 28 contains oselumese
// //Index position 42 contains oselumese
// console.log("Index position " + match.index + " contains " + match[0]);
// }


// replace()
// var x = 'Let us search this text for oselumese. If oselumese is found, …';
// var regex = /oselumese/gi; //All occurences of oselumese independent of case
// var y = x.replace(regex,'Dominic'); //Replaces any match found with 'Dominic'
// console.log(y); // This should output the string 'Let us search this text for Dominic. If Dominic is found, …'
// console.log(x); // This remains 'Let us search this text for oselumese. If oselumese is found, …'


// slice()
// var x = 'Let us search this text for Oselumese. If Oselumese is found, …';
// var y = x.slice(39); //Counting from the beginning of the string (i.e. 0 index position), this will extract text from position 34 to the end.
// console.log(y); //Expected to output the string 'If Oselumese is found, …'
// var y = x.slice(28,37);//Counting from index position 28, extract text up to position 37
// console.log(y); // This should output the string 'Oselumese'

// extract text using the end of a string
// var x = 'Let us search this text for Oselumese. If Oselumese is found, …';
// var y = x.slice(-1); //Extract from the last position.
// console.log(y); // Should return the string '...'
// var y = x.slice(-35, -26); //Extract from the 16th position from the rear to the 12th position from the rear
// console.log(y); //Should output the string 'Oselumese'
// var y = x.slice(-21);// Extract the letters from position 21 from the rear
// console.log(y);//This should return 'Oselumese is found, …'

// Array Object

// //Create and initialize an array with 5 elements
// var languages = ['Python', 'JavaScript', 'Java', 'C', 'C++'];
// //Use the object's length property to return the number of elements in the array. This should return 5.
// console.log(languages.length);

// forEach()
// var languages = ['Python', 'JavaScript', 'Java', 'C', 'C++'];
// //log each element in the forEach loop
// languages.forEach(function(element) {
// console.log(element); //This should output each element successively.
// });

// languages.forEach(function(language, index) {
// var output = index+1 + '. ' + language;
// console.log(output);
// });

// indexOf()
// var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
// console.log(languages.indexOf('JavaScript')); //This should output 1

//To return all occurrences, loop, indicating start Index each time, as we did for strings
// var searchTerm = 'JavaScript';
// var matchIndex;
// var startIndex = 0; //start from the beginning
// while((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
// console.log(matchIndex); //Output the index of match
// startIndex = matchIndex + 1; //change search start position to beyond the last match index
// }
//The above while loop should output 1 and 5 to the console.


// push()
// var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
// languages.push('C');
// console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript', 'C']

// pop()
// languages.pop();
// console.log(languages); //This should print out ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the last element, 'C'.

// shift()
// languages.shift();
// console.log(languages); //This should print out ['JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having removed the first element, 'Python'.

// unshift()
// languages.unshift('Python');
// console.log(languages); //This should print out ['Python','JavaScript', 'Java', 'C#', 'C++', 'JavaScript'] having added 'Python' to the beginning of the array

// map()
// var mynumbers = [10, 20, 30, 40, 50];
// var mydoublednumbers = mynumbers.map(function(number){
// return number * 2;
// })
// console.log(mydoublednumbers); //This should output [20, 40, 60, 80, 100]

// filter()
// var mynumbers = [1, 2, 3, 4, 5, 6];
// var myevennumbers = mynumbers.filter(function(number){
// return number % 2 == 0; //Test if the number is even
// })
// console.log(myevennumbers); //This should output [2, 4, 6]

// reduce() and reduceRight()
// var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
// return accumulatedValue + number; //Accumulate the sum iteratively
// })
// console.log(reduceOutput); //This should output 55.

// var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var reduceOutput = mynumbers.reduceRight(function(accumulatedValue, number){
// return accumulatedValue - number; //minus the sum in descending order iteratively
// })
// console.log(reduceOutput); //This should output -35.

// var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
// return accumulatedValue + number;
// }, 100)
// console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array

// var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //Define the reducer function
// var reducer = function(accumulatedValue, number){
// return accumulatedValue + number;
// }
// //Pass the reducer function to reduce() method
// var reduceOutput = mynumbers.reduce(reducer, 100)
// console.log(reduceOutput); //This should output 155 i.e. 100 + the accumulated values from array

// Number Object
// var a = 10; //Allocate a number literal to variable
// var b = Number('10'); //The function converts the string '10' to the number equivalent. b = Number(10) should give same result.
// var c = new Number(10); //Instantiates a new Number object. c = new Number ('10') should give the same result c.
// var d = a.valueOf(); //This works but is superfluous. d = a is enough
// var e = b.valueOf(); //This works but is superfluous. e = b is enough
// var f = c.valueOf(); //This is necessary for f to hold only the numeric value in c
// console.log(a); //This should output 10
// console.log(b); //This should output 10
// console.log(c); //This should output [Number: 10]
// console.log(d); //This should output 10
// console.log(e); //This should output 10
// console.log(f); //This should output 10


// Error Object
// try{
//     console.output('Provoking an error by calling a non-existent function');
//     }catch(error){
//     console.log (error.message); //Outputs the message 'console.output is not a function'
//     console.log (error.name); //Outputs 'TypeError'
// }


function multiplier(){
    var product = 1;
    if (arguments.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x=0; x < arguments.length; x++){
    product = product * arguments[x];
    }
    return product;
}

//Call function without arguments. Here error will be caught and message output to console
try{
    console.log(multiplier())
    }catch(error){
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1'
}

//Call function with arguments. No error here.
try{
    console.log(multiplier(2,3)); //This will output 6
    }catch(error){
    console.log(error.message);
}