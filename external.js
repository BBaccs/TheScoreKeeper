// var first = prompt ("What's your first name friend?");
// var last = prompt ("What's your last name pal?");
// var age = prompt ("What's your age pal?");
// console.log ("hello " + first + " " + last);
// console.log ("You're " + age + " years old");


// var age = prompt ("What's youre age?");
// var days = age * 365;
// alert(age + " years is roughly " + days + " days");


// // get age and convert it to a #, prompt always returns a string?
// var age = Number(prompt("What's you age>"));

// if(age < 0) {
// 	console.log("Sorry you're age is negative");
// }

// else if(age === 21){
// 	console.log("Happy birthday!");
// }

// else if(age % 2 == 1){
// 	console.log("Your age is odd!");
// }

// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }


// //create secret #
// var secretNumber = 4;

// // ask user for guess
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);

// //check if they guess correctly

// if (guess === secretNumber){
// 	alert ("Coorect! It's 4!");
// }
// //otherwise u got it wrong
// else if (guess > secretNumber) {
// 	alert ("too high");
// }

// else {
// 	alert ("too low");
// }


// var king = 1;

// while(king < 36) {
// 	console.log("count is: " + king);
// 	king+=2;
// }


// var str = "hello";

// var count = 0;

// while(count < str.length) {
// 	console.log(str[count]);
// 	count++;
// }


// var num = 1;

// while (num <= 10){
// 	console.log(num);
// 	num +=2;
// }

// print all between -10-19
// var num = -10;
// while (num <= 19){
// 	console.log(num);
// num++;
// }


// evenumbers
// var evenNum = 10;
// while (evenNum <= 40){
// 	console.log(evenNum);
// 	evenNum+=2;
// }


// var theEven = 9;
// while (theEven <= 40){
// 	if (theEven % 2 == 0) {
// 		console.log(theEven);
// 	}
// theEven++;
// }

// print all odd # between 300 333
// var oddNum = 301;
// while (oddNum <=333){
// 	console.log(oddNum);
// 	oddNum+=2;
// }


// var crazyNum = 5;

// while (crazyNum <= 50) {
// 	if (crazyNum % 5 === 0 && crazyNum % 3 === 0){
// 	console.log (crazyNum);	
// 	}
// 		crazyNum+=1;
// 	}
	

	// var answer = prompt("are we there yet?");
	// while(answer.indexOf ("yes") === -1) {
	// 	var answer = prompt("are we there now?");
	// }
	// alert("yay!");



// var tenNineteen = -10

// for(var tenNineteen = -10; tenNineteen <= 19; tenNineteen++){
// 	console.log (tenNineteen);
// }


// for(var tenForty = 10; tenForty <= 40; tenForty+=2) {
// 	console.log (tenForty);
// } 

// for(var tenForty = 10; tenForty <= 40; tenForty++) {
// 	if (tenForty % 2 === 0) {
// 		console.log (tenForty);
// 	}
// }


// for(var threeHundred = 300; threeHundred <= 333; threeHundred++) {
// 	if (threeHundred % 2 !== 0) {
// 		console.log (threeHundred);
// 	}
// }	

// for(var hardOne = 5; hardOne <= 50; hardOne++) {
// 	if (hardOne % 5 === 0 && hardOne % 3 === 0) {
// 		console.log (hardOne);
// 	}
// }


// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true
// 	}
// 	if(num % 2 !== 0) {
// 		return false
// 	}
// }

// function isEven(num){
// 	return num % 2 === 0;
// }

	
// 	function factorial(num) secondNum = num -1)
// 		while (num <= 1) {
// 			return num * secondNum
// 		}


// 		// function square(x) {
// 		// 	return x * x;
		

// function factorial(num){
// 	//define a result variable
// 	var result = 1;   //dont GET THIS PART
// 	//calculate factorial & store value in result
// 	for (num > 0; num - 1)
// 	//return the result variable
// return num
// }

// function factorial(num){
// 	var result = 1;
// 	for (var i = 2; i <= num; i++){
// 		result = result * i;
// 	}
// 	return result;
// }


// function capitalize(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "paris";
// var capital = capitalize(city);


// function capitalize(str) {
// 	if(typeof str === "number") {
// 		return "thats not a string!"
// 	}
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

//only one return will run, returns short circuit the function and stop it.


// another syntax
// function declartion vs. function expression

// // declaration
// function capitalize(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }
// // expression
// var capitalize = function(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }
//if you change ur var (expression only) you've lost your function.





// isEven

// true = even false = odd

// function isEven(num) {
// 	if (num % 2 === 0) {
// 		return true;
// 	}

// 	else {
	/*return false
}*/
// }


// var age = prompt ("What's youre age?");
// var days = age * 365;


// var i = 109 - 1;
// function factorial(num) {
// 	for(var = i; i < 1; num - 1;) {
// 		console.log (num * i)
// 	}
// }


// function khabibVsHolloway(str) {
// 	var newStr = str.replace(/-/g, "_");
//  	return newStr;
// }



// var colors = ["red, orange, green"];
// var col = colors.pop();




// window.setTimeout(function() {


// var todos = ["Buy New Turtle", "GetAJob"];
// var input = prompt("What would you like to do?");

// 	while(input !== "quit") {
// 		//handle input
// 		if (input === "list"){
// 	console.log(todos);
// } else if (input === "new"){
// 	//ask for a new todo
// 	var newToDo = prompt("what would ya like to add?");
// 	//add todos array
// 	todos.push(newToDo);
// } 

// 		// var newToDo = prompt("what would ya like to add?");
// 		//ask for a new input
// 		input = prompt("What would you like to do?");
// 	}
// 	console.log("okay you quit.");





// }, 500);










// var todos = ["buy turtle"];

// var input = prompt ("what would u like 2 do?");

// if (input === "list") {
// 	console.log(todos);
// } else if (input === "new") {
// 	var newTodo = prompt("Enter new todo");
// 	todos.push(newTodo);
// }




// var todos = [];

// var input = prompt ("what would u like 2 do?");

// while(input !== "quit") {

// 	// var input = prompt ("what would you like to do then?");

// 	if (input === "list") {
// 		console.log(todos);
// 		// var input = prompt ("What else would you like 2 do?");

// 	} else if (input === "new") {
// 		var newInput = prompt ("I can do that for you, what would you like to add to the list?");
// 		todos.push(newInput);
// 	}
// 	 input = prompt ("What else would you like to do?");
// }
// console.log("ok u quit");

// //vars for greeting
// var greeting = 'howdy ';
// var name = 'Mollly';
// var message = ' , please check your order:';

// //concatonate 
// var welcomeMsg = greeting + name + message;

// //create variables to hold details about the sign..
// var sign = 'Montague House.'
// var tiles = sign.length;
// var shipping = 7;
// var subTotal = tiles * 5;
// var grandTotal = subTotal + shipping;

// //get the elemt with id = greeting
// var el = document.getElementById('greeting');

// //replace content of that element with a personalized greeing msg

// el.textContent = welcome;

// //get element that has an id of userSign and then update its content
// var elSign = document.getElementById('userSign');
// elSign.textContent = sign;

// //get element that has an id of tiles and then update its content
// var el = document.getElementById('tiles');
// el.tiles.textContent = tiles;

// //get the elemt that has an id of subTotal and then updaate its contents
// var elsubTotal = document.getElementById('subTotal');
// elSubTotal.textContent ='$' + subTotal;

// //get el
// var elshipping = document.getElementById('shipping');
// elshipping.textContent = '$' + shipping;

// //get e
// var elGrandTotal = document.getElementById('grandTotal');
// elGrandTotal.textContent = '$' + grandTotal; 

// You have a couple options when calling .forEach on an array:

// You can pass in an anonymous function:

// [1,2,3].forEach(function(el, i, arr) {
//   console.log(el, i, arr);
// });
// Or you can pass in a pre-written, named function.

// function logNums(el, i, arr) {
//   console.log(el, i, arr);
// }
 
// [1,2,3].forEach(logNums);


// var todos = ["Buy New Turtle"];

// var input = prompt("What would you like to do?");

// while (input != "quit") {
// 	//handle input
// 	if (input === "list") {
// 		todos.forEach(function(todo, i){    //buy adding i (can be called anything)we add the index
// 		console.log(i + ": " + todo);   //here we ad the index(i) and the color to the todo
// 	});
// } else if (input === "new") {
// 	//ask to add to the list
// 	var newToDo = prompt("Enter new todo");
// 	todos.push(newToDo);
// 	console.log("Added Todo");
// } else if (input === "delete") {
// 	//ask for index of todo to delete
// 	var index = prompt("Enter index of todo to delete");
// 	//delete that todo
// 	//splice()
// 	todos.splice(index, 1);
// 	console.log("Deleted Todo");
// }

// 	// ask again for new input
// 	var input = prompt("So, what would you like to do?");
// }
//   console.log("ok u quit the app.");





//printReverse() this function will take a single argument (assumed to be an array), use a loop. it will print out the elements in the array in reverse order.

// printReverse([1,2,3,4]);
//4
//3
//2
//1



// var numbers = [4,3,9,1];

// function printFace(dickface) {
// 	for (var i = dickface.length - 1; i >= 0; i--) {
// 		console.log(dickface[i]);
// 	}
// }
// printFace([1,7,8,9,1])
	






//isUniform takes an array as an argument
// returns true if all elements in the array are identical
// returns false if they are not

//hints
//use a loop
//have a variable that just keep track iof the very first item in the index and then youll compare that in the loop to the
//next item, and if equal compare to the next one, etc. until 
//if at any point they r != then you're done - just return false


// function unFuckable(giantDickHead) {
// 	var first = giantDickHead[0];
// 	for (var i = 1; i < giantDickHead.length; i++) {
// 		if (giantDickHead[i] != first){
// 			return false;
// 		}
// 	}
// 	return true;
// }
// unFuckable([1,1,1,1,]); //true
// unFuckable([2,1,1,]); //false because of 2



// sumArray takes a single array full of numbers, and sums every item inside of it
//hint use a loop
//have a variable called result/answer/sum where you store the answer and constantly add into it
//sumArray([1,2,3]); //6



// function sumArray (arr) {
// 	var sum = 0;
// 	for (var i = 0; i >= arr.length - 1; i++) {
// 		sumArray[i] + sum === finalSum;
// 	}
// 	return finalSum;
// }
// sumArray(3,6,10);



// var numberS = [1, 4, 5, 7];
// var Total = 0;

// 	numberS.forEach(function(number) {
// 		var i = 0;
// 		Total += number;
// 	});
	



// function sumArray(arr){
// 	var total = 0;
// 	arr.forEach(function(element){
// 		total += element;
// 	});
// return total;
// }
	
// sumArray([1,2,3,4]);
// 10



// max() 
//accepts an array of number and returns highest number in the array
// we need a var to keep track of the maximum


// function max(arr){
// 	var max = arr[0];
// 	arr.forEach(function(element){
// 		if (element > max) {
// 			max(element = max);
// 		}
// 	}
// 	return max;
// }




// function max(arr){
// 	var max = arr[0];
// 	for (var i = 1; i < arr.length; i++) {
// 		if(arr[i] > max){
// 			max = arr[i];
// 		}
// 	}
// 	return max;
// }	


// function(1,3,11,20,2,4)



// var movies = [
// {
// 	title: "Matrix",
// 	hasWatched: true,
// 	rating: 9.75
// },
// {
// 	title: "Gladiator",
// 	hasWatched: false,
// 	rating: 10
// }
// ]

//  movies.forEach(function(movie){
// 	var result = "You have ";
// 	if (movie.hasWatched = true) {
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.title + "\" -";
// 	result += movie.rating + " stars";
// 	console.log(result)	
// });




// MOVIE DB EXCERCISE OBJECTS SECTION
// var movies = [
// 	{title: "Matrix",
// 	haveWatched: true,
// 	rating: 5
// 	},
// 	{title: "Cool-Aid-Man",
// 	haveWatched: false,
// 	rating: 1
// 	} 
// ]

// movies.forEach(function(movie) {
// 	var result = "You have ";
// 	if (movie.haveWatched) {
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	} 
// 	result += movie.title
// 	result += movie.rating + " stars"
// 	console.log(result)
// })


// function print(arr) {
// 	arr.forEach(function(el){
//     console.log(el);
// });
// }



// function print(arr) {
// 	arr.forEach(function(el){
//     console.log(el);
// });
// }


// comments.print = function print(arr) {
// 	arr.forEach(function(el){
//     console.log(el);
// });
// }

// document.getElementById("first");


//navbar with named function












var toggleMenu = function(){
	var mobileMenu = document.getElementById("mobile-menu");
	mobileMenu.classList.toggle("hidden");
};


function toggleMenu2 (){
	var mobileMenu = document.getElementById("mobile-menu");
	mobileMenu.classList.toggle("hidden");
}

var button = document.getElementById("hamburger"); 
button.addEventListener("click", toggleMenu);
