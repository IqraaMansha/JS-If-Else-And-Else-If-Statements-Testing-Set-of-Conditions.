// Assigment No. 12 - 13

// If Else And Else If Statements,
// Testing Set of Conditions.


// Q.no.1
var a = prompt("Enter a single character");
if (a.charCodeAt() >= 65 && a.charCodeAt() <= 90) {
    alert("Capital Letter");
} else if (a.charCodeAt() >= 97 && a.charCodeAt() <= 122) {
    alert("Small Letter");
} else {
    alert("It is a number");
}

// Q.no.2

var number1 = parseInt(prompt("Enter Number1"));
var number2 = parseInt(prompt("Enter Number2"));
if (number1 > number2) {
    alert(number1 + " is larger number");
} else if (number2 > number1) {
    alert(number2 + " is larger number");
} else if (number1 === number2) {
    alert("Both numbers are equal");
}

// Q.no.3

var number = parseInt(prompt("Enter a number"));
if (number > 0) {
    alert(number + " is a positive number");
} else if (number < 0) {
    alert(number + " is a negative number");
} else if (number === 0) {
    alert("It is a 0");
}

// Q.no.4

var character = prompt("Enter a character(string of length 1");
if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
) {
    alert("True");
} else {
    alert("False");
}

// Q.no.5

var password = "validpassword";
var user_password = prompt("Enter your Password");
if (user_password === "") {
    alert("Please enter your password");
} else if (user_password === password) {
    alert("Correct! The password you entered matches the original password");
} else if (user_password != password) {
    alert("Incorrect password");
}

// Q.no.6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// Q.no.7

var time = parseInt(prompt("Enter time in 24 hour clock format"));
if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
}
