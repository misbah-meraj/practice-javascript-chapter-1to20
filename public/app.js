//Chapter 1 (Alerts
alert("Please Enter Your Details")

var FirstName = "Misbah ";
var LastName = "Mairaj ";
var Email = "xyz12@.gmail.com ";
var Password = "1234567 ";
var PhoneNum = "01234567891 ";

alert( FirstName
    + LastName +
    Email +
    Password)

// 2. Correct this statement: alert"You're learning JavaScript!";

alert("You're learning JavaScript");

//Chapter 2 (Variables for string)

//1. Declare any variable in the camelCase format.
var myAge = 23;
console.log(myAge);

//2. Declare a variable of your choice without defining it. Then, in asecond statement, assign it a string of your choice.
var myName;
myName = "misbah";
console.log(myName);

//3. Declare the variable teamName and Alert your Team name.

var teamName = "Aiza , Fatima , najma , Amna";
alert(teamName);

//4. This statement has already been coded. var bestMan = "Charlie";Assign the variable a new string
var bestMan = "Charlie";
  bestMan = "john";
console.log(bestMan)

//Chapter 3 (Variables for numbers)

//1. Declare a variable “caseQty”
//2. Assign to the variable caseQty, which has already been declared,the value 144.

var caseQty = "karachi";
caseQty = 144;
console.log(caseQty);

//3. Rewrite this statement so the variable can be used in a mathoperation. var num = "9";
//4. In one statement declare a variable. In a second statement assignit the sum of 2 numbers.

var sum = 9;
var sum2 = sum + 2;
console.log(sum2);

//5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(orderTotal);

//6. In the first statement declare a variable and assign it a number. In
//the second statement, change the value of the variable by adding
//it together with a number.

var num = 15;
var num2 = num + 5;
console.log(num2);

//Chapter 4 (Variable names Legal and Illegal)

//Correct this statement.var product cost = 3.45;

var productCost = 3.45;

//Rewrite this using camelCase.var Nameofband;

var nameofBand;

//In a single statement declare a legally-named variable and assign anumber to it.

var myNumber = 42;

//Declare a variable that is a combination of your first and lastnames. Use camelCase.

var myFullName = "Misbah Meraj";

//List the legal and Illegal Variables.

// var 10person (illegal)
// var person-1 (illegal)
// var $person (illegal)
// var pe%rson (illegal)
// var pe*rson (illegal)
// var person name (illegal)
// var alert (illegal)

// var person10 (legal)
// var person_1 (legal)

//Chapter 5 (Math Expression I)

// What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?

var remainder = 10 % 3; 


//What is the value of num?var num = 20 % 6;
var num = 20 % 6;
console.log(num);


//In a single statement, declare the variable largeNum and assign itthe result of 1,000 multiplied by 2,000.

var largeNum = 1000 * 2000;
console.log(largeNum);

//Assign to a variable the value represented by one variablesubtracted from the value represented by another variable

var num = 15;
var num2 = num - 5;
console.log(num2);

//Assign to a variable the remainder when one number is divided byanother. The variable hasn't been declared beforehand. Make upthe variable name.

var res1 = 20;
var res2 = 10;
var remainderResult = res1 % res2;
console.log(remainderResult);

//Code an alert that displays the result of a multiplication on 2numbers.

alert(largeNum);

//Chapter 6 (Math Expression II)

// Code a short form of x = x + 1; Use either of the two legal expressions.
var x = 3;
var x = x + 1;
console.log(++x);

//If x has a value of 100, what is the fastest way to reduce it to 99with a math expression?

var x = 100;
x--;
console.log(x);

//var x = 50;var y = x++;What is the value of y?

var x = 50;
var y = x++;
console.log(y);


// In a single statement, decrement num and assign its original valu to newNum.

var num = 7;
var newNum = --num;
console.log(newNum);


// In a single statement add 1 to a variable and assign its original value to another variable.
var num = 5;
var num2 = ++num;
var num3 = num2;
console.log(num3);

//7. Assign a number value to a variable.Increment the variable.Display the new value in an alert
 
var x = 7;
var y = ++x;
alert(y);

//Chapter 7 (Math Expression III)

// var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?

var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum);

//Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,clarified with parentheses, producing 56.

var cost = (2 + 2) * (4 + 10);
console.log(cost);

//Write a statement that assigns to units the result of 2 + 2 * 4 + 10,clarified with parentheses, producing 20.

var cost = 2 + (2 * 4 )+ 10;
console.log(cost);

//Write a statement that assigns to pressure the result of 4 / 2 * 4,clarified with parentheses, producing 5.

var cost =  4 / (2 * 4);
console.log(cost);


//Chapter 8 (Concatenating Text Strings)

//var num = "2" + "2";What is the value of num? Include quotation marks.

var num = "2" + "2";
console.log(num);

// message = ("Hello," + "Dolly")What is the value of message? (Include the quotation marks.)Alert the statement
 var message = "Hello," + "Dolly";
 alert(message);


 // alert("33" + 3); What message displays in the alert box?

 var message = ("33" + 3);
 alert(message);


 // Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
  
 var a =" Pakistan";
 var b = "Zindabad";
 alert(a + b);


 //Write a statement that assigns to a variable the concatenation ofa string with a number

 var x = "22";
 var y = 3;
 console.log(x + y);

 //Assign strings to two variables. Then concatenate them and assignthe result to a third variable.

 var a = "22";
 var b = "3";
 var c = (a + b)
 console.log(c)


 //Chapter 9 (Prompts)

 //Code a prompt with the message "Enter first name". The user's response is assigned to firstName.

 var username = prompt("Enter First Name");
 console.log(username);

//Code a prompt with the message "Country?" and the defaultanswer "China". The user's response is assigned to country.

 var country = prompt("Country?", "China");
 alert(country);


 // Code a prompt that specifies a string as the message Include adefault input.
 var Name = prompt("What is your name ?", "Misbah");
console.log(Name);

 //Assign strings to two variables. Code a prompt specifying the firstvariable as the message and the second variable as the defaultresponse. Assign the user's response to a third variable.

 var firstString = "where Are You From?";
var secondString = "Pakistan";
var userResponse = prompt(firstString, secondString);
console.log(userResponse);


// Display a prompt, including both a message and a defaultresponse.Display the user's response in an alert.

var userResponse = prompt("What's your favorite color?", "Red");
alert("Your favorite color is: " + userResponse);


//Chapter 10 (if statments)

//var city = "Karachi"
//if (city = "Karachi") {console.log("The City OF Lights") the above statement:Also try this statement by yourself

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}


// This is the first line of an if statement:if (x === y) {Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

var x = 5
var y = 5
if (x === y) {
  var z = prompt("Enter the value of z?");
  console.log(z);
}

//Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

var city =  10010
 if ( city === 10010 ){
  alert("karachi")
 }else{ alert("Please write correct city")
 }


 //Code an if statement. Test whether a variable has a particularnumerical value. If so, assign a new value to that variable, as in
 x = 1;
 var x = 1;
 if (x === 1) {
   x = 42;
 }
 console.log(x);

 //Chapter 11 (Comparison Operators)

//Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

 var num1 = 5; 
var num2 = 8; 
var result;
if (num1 !== num2) {
  result = num1 + num2;
}
console.log(result);

//Code the first line of an if statement that tests whether thevalue represented by a variable is greater than or equal to thevalue represented by another variable.

var value1 = 10; 
var value2 = 5;  
if (value1 >= value2) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

//Code an if statement. Test whether a variable is unequal to aparticular number. If so, assign a number to that variable.

var myVariable = 5; 

if (myVariable !== 10) {
  myVariable = 20; 
}
console.log(myVariable);

//Code an if statement that tests whether a number is unequal toa different number. If the condition is true (it will be), display acongratulations alert.
var number1 = 8; 
var number2 = 5; 
if (number1 !== number2) {
  alert("Congratulations! The numbers are unequal.");
}

//Code a prompt asking for your first name.
//Code an if statement that tests whether the name you enteredis unequal to another name.If the condition is true (it will be), display an alert that says "Nomatch"
var enterName = prompt("What is your first name?");
var anotherName = "Safa"; 
if (enterName !== anotherName) {
  alert("No match");
}

//Chapter 12 (if...else and else if statements)

//.1
var variable1 = 15;
var variable2 = 10;
if (variable1 >= variable2) { 
  alert("Variable1 is greater than or equal to Variable2!");
} else {
  alert("Variable1 is less than Variable2!");
}

//.2

var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
var subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
var subject5 = parseFloat(prompt("Enter marks for Subject 5:"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (totalMarks / 500) * 100;

var grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

//.3

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is " + a);
}

//.4

var userCity = prompt("Enter a city");
if (userCity.toLowerCase() === "karachi") {
  alert("Acknowledging it is Karachi");
} else if (userCity === "lahore") {
  
  alert("Acknowledging it's Lahore");
} else {
  alert("This city is not recognized or acknowledged.");
}


//Chapter 13 (Testing sets of conditions)

//.1
var a = 5;
var b = 5;
var c = 10;
var d = 10;

if (a === b && c === d) {
  console.log("Both conditions are true!");
}

//.2

var a = 5;
var b = 5;
var c = 10;
var d = 15;

if (a === b || c !== d) {
  console.log("Either or both conditions are true!");
}

//.3

var name = "Hamza"; 
var age = 30; 
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  console.log("Conditions are true!");
} else {
  console.log("Conditions are false.");
}

//.4
var num1 = 8;
var num2 = 12;
if (num1 < num2 || num1 > num2) {
  alert("The condition is true!");
} else {
  alert("The condition is false.");
}

//.5
var firstName = "YourFirstName"; 
var lastName = "YourLastName";  

var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");
if (userFirstName === firstName && userLastName === lastName) {
  alert("Names match! Welcome, " + userFirstName + " " + userLastName + "!");
} else {
  alert("Names do not match. Please check and try again.");
}



//Chapter 14 (If statements nested)

//.1

var password = prompt("Enter your password:");
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5.");
  } else {
    alert("OK");
  }
} else {
  alert("Password cannot be empty.");
}

//.2

var a = 1;
var c = "Max"; 
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

//.3

var a = 1; 
var c = "Max";
if (a === 1 && c === "Max") {
  alert("OK");
}

//.4

var num1 = 42;
var num2 = 42;
if (num1 === num2) {
  if (num1 <= num2) {
    alert("Conditions are true! The values are equal and num1 is less than or equal to num2.");
  }
}


//Chapter 15 (Array I)
//.1

var emptyArray = [];

//2.
var myArray = ["Hello, Students!"];
console.log(myArray[0]);


//.3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

//.4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;
alert("Total length of the array is: " + arrayLength);

//.5
var myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]);

//Chapter 16 (Array II)
//.1

var myArray = ["Hello, I am a student of class five"];

//var Alphabet=["h","i","j","k"]Remove the last element from the array Alphabet.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet);

//var Alphabet=["h","i","j","k"]Add a new element, a number, to the end of an array.

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);
console.log(Alphabet);

//Chapter 16 (Array III)

//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Remove the first element of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);

//Declare an array with one element.Add a second element to the beginning of the array.Create an alert whose message is the new first element.

let Array = ['hello'];
Array.unshift('Hey');
alert(Array[0]);

//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);


//var sizes = ["S", "M", "XL", "XXL", "XXXL"].Copy the first 3 sizes of the array and put them into a new array,regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);

//var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "rabbit", "fish", "parrot");
console.log(pets);

//var pets = ["dog", "cat", "ox", "duck", "frog"];Remove "cat" and "ox".

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets);


//var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];Reduce it to "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var selectedPets = pets.slice(3, 5);
console.log(selectedPets);


//Chapter 17 - 20 (for Loops)

//Write a statement in which loop is to run 10 times.

for (let i = 0; i < 10; i++) {
  console.log("Iteration number:", i + 1);
}

//Code the first line of a for loop with the usual counter name, usualstarting value, and usual increment. Run it 12 times using <= tospecify how many loops.

for (let i = 0; i <= 11; ++i) {
  console.log("Iteration number:", i + 1);
}

//What are the 5 characters missing from this code, excluding any
//spaces that are missing? Type them in order, with no spaces orcommas between them.for var i = 0 i <= 4 i++Note: Complete this statement by yourself

for (var i = 0; i <= 4; i++);

//Code the first line of a for loop with a counter name that's not i.Code the usual starting value and usual increment. Run it 100times using < to specify how many loops.

for (let counter = 0; counter < 100; counter++) {
  console.log("Iteration number:", counter + 1);
}

//Code the first line of a for loop with a counter name that's not i.Code the usual starting value and usual increment. Run it 100times using < to specify how many loops.

for (let count = 0; count < 100; count++) {
  console.log("Iteration number:", count + 1);
}

//The statement assigns the number of elements in the array to thevariable.

var array = [1, 2, 3, 4, 5];
var numberOfElements = array.length;
console.log("Number of elements:", numberOfElements);

//Set a variable named “flag” with an initial Boolean value of yourchoice.

var flag = true;
console.log(flag);

//Code the first line of a for loop with the usual counter, the usualstarting value, and the usual incrementing. Limit the number ofloops by the number of elements in the array pets.

for (let i = 0; i < pets.length; i++) {
  console.log("Iteration number:", i + 1);
}


var userNames = ["Maha", "Yusra", "Amna", "Aiza"];
var firstName = prompt("Enter first name");
for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) 
    alert("Enter");
     else {
    alert("Please write correct user name");
  }
}


//Complete this code to display an alert if a match isn't found.var matchFound = false;
//for (var i = 0; i < list.length; i++) {if (userInput === list[i]) {alert("Match found");
//matchFound = true;break}};


var matchFound = false;
var list = ["item1", "item2", "item3"];

var userInput = prompt("Enter something");
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if (!matchFound) {
  alert("No match found. Please try again.");
}


//12.

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    var result = firstArr[i] + secondArr[j];
    console.log(result);
  }
}