// // // // // // // let fullName = "Sara khan";
// // // // // // // let age = 24;


// // // // // // // fullName = "Sara Ali Khan";

// // // // // // // const pi = 3.14;

// // // // // // // document.write(fullName);
// // // // // // // document.write(age);

// // // // // // // Datatypes

// // // // // //   // String
// // // // // //   let str = "Hello";
// // // // // //   document.write(typeof str + "<br>");

// // // // // //   // Number
// // // // // //   let num = 10;
// // // // // //   document.write(typeof num + "<br>");

// // // // // //   // Boolean
// // // // // //   let isActive = true;
// // // // // //   document.write(typeof isActive + "<br>");

// // // // // //   // Null
// // // // // //   let emptyValue = null;
// // // // // //   document.write(typeof emptyValue + "<br>");

// // // // // //   // Undefined
// // // // // //   let x;
// // // // // //   document.write(typeof x + "<br>");

// // // // // //   // BigInt
// // // // // //   let bigNumber = 1234567890123456789012345678901234567890n;
// // // // // //   document.write(typeof bigNumber + "<br>");

// // // // // let x = 10;
// // // // // let y = 3;

// // // // // document.write(x + y + "<br>"); // 13 (Addition)
// // // // // document.write(x - y + "<br>"); // 7  (Subtraction)
// // // // // document.write(x * y + "<br>"); // 30 (Multiplication)
// // // // // document.write(x / y + "<br>"); // 3.333... (Division)
// // // // // document.write(x % y + "<br>"); // 1  (Modulus)


// // // // // let a = 10;

// // // // // a += 5; // a = a + 5 → a = 15
// // // // // document.write("a += 5: " + a + "<br>");

// // // // // a -= 2; // a = a - 2 → a = 13
// // // // // document.write("a -= 2: " + a + "<br>");

// // // // // a *= 3; // a = a * 3 → a = 39
// // // // // document.write("a *= 3: " + a + "<br>");

// // // // // a /= 3; // a = a / 3 → a = 13
// // // // // document.write("a /= 3: " + a + "<br>");

// // // // // let x = 5;
// // // // // let y = 10;

// // // // // document.write(x == y + "<br>"); // false (5 is not equal to 10)
// // // // // document.write(x !== y + "<br>"); // true (5 is not strictly equal to 10)
// // // // // document.write(x < y + "<br>"); // true (5 is less than 10)
// // // // // document.write(x >= 5 + "<br>"); // true (5 is greater than or equal to 5)

// // // // // let a = true;
// // // // // let b = false;

// // // // // document.write(a && b + "<br>"); // false (AND: both must be true)
// // // // // document.write(a || b + "<br>"); // true  (OR: one must be true)
// // // // // document.write(!a + "<br>"); // false (NOT: negates the value)



// // // // // // let age = 18;
// // // // // // let canVote = (age >= 18) ? "Yes" : "No";

// // // // // // document.write(canVote + "<br>");  // Yes (since age is 18)

// // // // // let num_1 = 7;
// // // // // let num_2 = 3;
// // // // // // let num_3 = num_1 + num_2;


// // // // // let num_3 = num_1 % num_2;

// // // // // document.write("Addition " + num_3 + "<br>");
// // // // // document.write(num_3);


// // // // // let a = 10;
// // // // // a += 5; // a = a + 5
// // // // // document.write("a+=5: " + a + "<br>"); //15

// // // // // a -= 3; // a = a - 3 //15 - 3

// // // // // document.write("a-=3: " + a + "<br>"); //12


// // // // // a *= 10; //a = a * 10 //12 * 10
// // // // // document.write("a*=3: " + a + "<br>");

// // // // // a /= 10;
// // // // // document.write("a/=3: " + a + "<br>");


// // // // // let b = 30;
// // // // // b += 10;
// // // // // document.write(b);


// // // // // let a = 5;
// // // // // let b = "5";
// // // // // document.write(a > b + "<br>"); //true
// // // // // document.write(a < b + "<br>"); //true
// // // // // document.write(a >= b + "<br>"); //true
// // // // // document.write(a <= b + "<br>"); // false
// // // // // document.write(a == b + "<br>"); //false 
// // // // // document.write(a === b + "<br>");
// // // // // document.write(a != b + "<br>");
// // // // // document.write(a !== b + "<br>");


// // // // // let isStudent = true; // Variable to check if the person is a student
// // // // // let hasCard = true; // Variable to check if the student has a student card

// // // // // if (isStudent) { // If the person is a student
// // // // //     if (hasCard) { // Then check if the student has a card
// // // // //         document.write("You can enter the library."); // If yes, allow entry
// // // // //     } else {
// // // // //         document.write("You need a student card."); // If no card, show this message
// // // // //     }
// // // // // } else {
// // // // //     document.write("Only students are allowed."); // If not a student, show this message
// // // // // }


// // // // function greet() {
// // // //     console.log("Hello, welcome!");
// // // // }

// // // // greet(); // Calling the function



// // // // // Define a function named greetUser that takes one parameter 'name'
// // // // function greetUser(name) {
// // // //     // Display a greeting message in the console using the provided name
// // // //     console.log("Hello, " + name + "!");
// // // // }

// // // // // Call the function greetUser and pass "Ali" as the argument
// // // // greetUser("Ali"); // Define a function named 'add' that takes two parameters: a and b


// // // // function add(a, b) {
// // // //     // Return the sum of a and b
// // // //     return a + b;
// // // // }

// // // // // Call the 'add' function with arguments 5 and 7, and store the result in the variable 'sum'
// // // // let sum = add(5, 7);

// // // // // Print the value of 'sum' to the console (Output will be: 12)
// // // // console.log(sum);




// // // // const sayHi = function() {
// // // //     console.log("Hi!");
// // // // };

// // // // sayHi();



// // // // const add = (a, b) => a + b;

// // // // console.log(add(2, 3)); // Output: 5


// // // // let a = true;
// // // // let b = false;
// // // // document.write(a && b + "<br>"); //false
// // // // document.write(a || b + "<br>"); //true
// // // // document.write(!a + "<br>"); //false


// // // // let age = 20;
// // // // if (age >= 18) {
// // // //     document.write("You are eligible for vote!!")

// // // // } else {
// // // //     document.write("You are not eligible for vote!")
// // // // }
// // // // let score = 66;
// // // // if (score >= 90) {
// // // //     document.write("Grade: A+");
// // // // } else if (score >= 80) {
// // // //     document.write("Grade: A");
// // // // } else if (score >= 70) {
// // // //     document.write("Grade: B");
// // // // } else if (score >= 60) {
// // // //     document.write("Grade: C");
// // // // } else {
// // // //     document.write("You are fail");
// // // // }


// // // // let isStudent = false;
// // // // let hasCard = false;
// // // // if (isStudent) {
// // // //     if (hasCard) {
// // // //         document.write("You are enter in library!")
// // // //     } else {
// // // //         document.write("You need a student card!")
// // // //     }
// // // // } else {
// // // //     document.write("Only students are allowed")
// // // // }
// // // // let day = 10;
// // // // switch (day) {
// // // //     case 1:
// // // //         document.write("Monday");
// // // //         break;
// // // //     case 2:
// // // //         document.write("Tuesday");
// // // //         break;
// // // //     case 3:
// // // //         document.write("Wednesday");
// // // //         break;
// // // //     case 4:
// // // //         document.write("Thursday");
// // // //         break;
// // // //     case 5:
// // // //         document.write("Friday");
// // // //         break;
// // // //     case 6:
// // // //         document.write("Saturday");
// // // //         break;
// // // //     case 7:
// // // //         document.write("Sunday");
// // // //         break;

// // // //     default:
// // // //         document.write("Invalid day!")
// // // // }



// // // //Print iteration_01 to iteration_05


// // // // for (let i = 1; i <= 5; i++) {
// // // //     document.write("Iteration: ", i + "<br>");
// // // // }


// // // // for (let i = 1; i <= 10; i++) {
// // // //     document.write("5 X " + i + " = " + (5 * i) + "<br>");
// // // // }


// // // // let count = 0;

// // // // while (count <= 5) {
// // // //     document.write("Count: " + count + "<br>")
// // // //     count++;
// // // // }
// // // // let num = 2;
// // // // do {
// // // //     document.write("number : " + num + "<br>") //7
// // // //     num++;
// // // // }

// // // // while (num <= 5); //condition



// // // // alert("Welecome to our website");



// // // // let isConfirmed = confirm("do you want to delet this page");


// // // // let fname = prompt("what is your name?");


// // // // let age = prompt("what is your age?");
// // // // document.write(fname + "<br>");
// // // // document.write(age);


// // // // let val = parseInt("123.56");
// // // // document.write(val);


// // // // let val = parseInt(prompt("Enter your salary"));
// // // // console.log(val);


// // // // console.log("Math.floor(4.7):")



// // // function greet() {
// // //     console.log("Hello, Welcome");
// // // }


// // // greet(); //calling the function



// // // function greetUser(name) { //function definition
// // //     console.log("Hello " + name + "!");
// // // }
// // // greetUser("sara");


// // // function add(num_01, num_02) {
// // //     return num_01 + num_02;
// // // }



// // // let Sum = add(5, 7);
// // // console.log(Sum);



// // // sayHello(); //calling a function

// // // function sayHello() {


// // //     console.log("Hello");
// // // }


// // // //Function Expression

// // // const sayHi = function() {
// // //     console.log("Hi!");
// // // }
// // // sayHi();

// // // //Fat Arrow function


// // // const addition = (a, b) => a + b;
// // // console.log(addition(2, 3)); //Output: 5


// // // const lengthOfString = (text) => {
// // //     return text.length;
// // // }
// // // console.log("Length of string : ", lengthOfString("Hello"));



// // // let numbers = [1, 3, 2, 9, 5];
// // // numbers.reverse();
// // // console.log(numbers);
// // // // fruits[1] = "Orange";
// // // // console.log(fruits);


// // // let arr = [1, 2, 3, 4, 5];
// // // arr.slice(2, 4); // returns new length
// // // console.log(arr); // [1, 2, 3]


// // // let arr2 = ["a", "b", "c", "d"];
// // // let sliced = arr2.slice(1, 3);
// // // console.log(sliced); // ["b", "c"]


// // // let arr3 = [8, 7, 1, 2, 3, 4];
// // // arr3.splice(1, 2); // remove 2 elements from index 1
// // // console.log(arr3); // [1, 4]


// // // let para = document.getElementById("greeting");
// // // console.log(para.textContent);


// // let messages = document.getElementsByClassName("message");
// // alert(messages.length);



// // let headings = document.getElementsByTagName("h1");
// // console.log(headings);


// // let element = document.getElementById("text");
// // element.style.color = "Blue";
// // element.style.fontSize = "20px";


// // let pht = document.getElementById("photo").src = "https://media.istockphoto.com/id/1917023956/photo/happy-woman-with-a-yellow-hiking-backpack-enjoying-the-mountain-landscape.jpg?s=612x612&w=0&k=20&c=LDh1uRP8kBJ6ko8F6JdQYHiCxi9GvdJxmXS0goOszdA=";




// // function showMessage() {
// //     alert("Button clicked.....!")
// // }



// // let heading = document.getElementById("mainHeading");
// // let button = getElementById("changeBtn");
// // button.addEventListber("click", function() {
// //     heading.textContent = "Heading Changed!";
// //     heading.style.color = "green";
// // });

// // let str = "apple";


// // let result = str.match(/Apple/i);
// // console.log(result);


// // let str = "cat\nhen\ncow";
// // let result = str.match(/^d\w+/gm);
// // console.log(result);



// // let str = "hello_hello";
// // let regex = /hello/y;
// // regex.lastIndex = 6; // Move to position after first "hello"
// // let result = regex.test(str);
// // console.log(result); // true


// let str = "123abc456";

// let result = str.match(/[a-z|0-9]/g);
// console.log(result);


// let str1 = "abacafab";
// let result1 = str1.match(/a+/g);
// console.log(result1); // ["aaaa"]


// let str2 = "b";
// let result2 = str2.match(/a*/g);
// console.log(result2); // ["", ""]



// let str3 = "aaba";
// let result3 = str3.match(/a?/g);
// console.log(result3); // ["a", "a", "", ""

function data() {
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;
    let c = document.getElementById("n3").value;
    let d = document.getElementById("n4").value;



    if (a === "" || b === "" || c === "" || d === "") {
        alert("All Fields are necessary to fill....!")
        return false

    }

    let userIDRegex = /^[a-zA-Z0-9]{8,}$/;
    if (!userIDRegex.test(a)) {
        alert("user_id must be at least 8 characters and contain only numbers and letters");
        return false;
    }

}