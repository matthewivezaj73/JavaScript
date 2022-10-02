//Log to console.
console.log("Hello world!");
console.log(123);
//Let and const have a huge advantage when it comes to block level scope.
console.log(true);
//Creating a variable.
var greeting = 'Hello';
//Logging the greeting to the console.
console.log(greeting);
//Logging a dictionary and numbers to the console.
console.log([1,2,3,4]);
console.log({a:1, b:2});
//Logging a table.
console.table({a:1, b:2});
//Logging errors.
console.error("This is some error.");
//Cleaaring the console.
console.clear();
console.warn("This is a warning");
console.time('Hello');
//Timing the series of hello worlds.
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
console.timeEnd('Hello');
/*
    Multi
    line
    comments.
*/
//Var, let const.
var my_name_is = "John Doe";
console.log(my_name_is);
my_name_is = "Steve Smith";
console.log(my_name_is);

var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);
/*
    Letters, numbers, ...
    can not start with number.
*/
//Giving the user an alert to enter their name.
alert("Please enter your log credentials.")
//Creating a placeholder for the name variable.
var $name = '';
//Creating a while loop for the user to enter their name, this loop will persist until a valid name is entered.
while ($name != "John")
{
    //Prompting the user for their name.
    $name = prompt("First, please enter your name:\t");
}
//Creating a variable to contain a user reponse for their password.
var $password = '';
//Creating a while loop for the user to enter their password, thisloop will persist until a valid password is entered.
while ($password != "&Fr4$nk1*NK_323")
{
    //Promptng the user to enter their password.
    $password = prompt("Please enter your password:\t");
}
// created a const variable.
const username = "Marie";
console.log(username);