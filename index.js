// Comments are text that will not be executed in your code. Rather comments are for other programmers to read. 
// Single line comments start with //
/* Multiple line comments start with*/ /* and end with */ 

/* All of the exercises below are commented out. Write your Javascript code after each exercise. */


/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);  // <= this should print out sebastian the pug

/*
* #1
* Variables with a "String" value

* Declare variables named firstName, lastName, birthPlace, favFood, favDrink, favSong, favAnimal, favColor, favSport, favDoughnut.

* Assign your own string values to each variable and console.log each variable.
*/


var firstName = 'Jennifer';
var lastName = 'Enomoto-Hahn';
var birthPlace = 'Oahu Hawaii';
var favFood = 'Sushi';
var favDrink = 'Melon water';
var favSong = 'What you\'re into';
var favDoughnut = 'Chocolate sprinkles';

console.log(firstName);
console.log(lastName);
console.log(birthPlace);
console.log(favFood);
console.log(favDrink);
console.log(favSong);
console.log(favDoughnut);





/*var firstName = 'Jennifer';
var lastName = 'Enomoto-Hahn';
var birthPlace = 'Hawaii';
var favFood = 'Sushi';
var favDrink = 'watermelon juice';
var favSong = 'do not have one';
var favAnimal = 'Orange Tabby';
var favColor = 'green';
var favSport = 'tennis';
var favDoughnut = 'Cake';

console.log(firstName);
console.log(lastName);
console.log(birthPlace);
console.log(favFood);
console.log(favDrink);
console.log(favSong);
console.log(favAnimal);
console.log(favColor);
console.log(favSport);
console.log(favDoughnut);
/*
* #2
* Variables with a Number value
*
* Declare variables named favNumber, yourShoeSize, thatOnePrinceSong, floorsAlaMoanaHotel, numOfJapanPrefectures, numOfABCstoresinHi, and cheesecakesFlavAtCheeseCakeFac
*
* Assign your own number values to each variable and console.log each variable.
*/


var yourShoeSize =  'seven';
var thatOnePrinceSong = 'Purple Rain';
var floorsAlaMoanaHotel = '109';
var numOfJapanPrefectures = '12';
var numOfABCstoresinHi = '54';

console.log(yourShoeSize);
console.log(thatOnePrinceSong);
console.log(floorsAlaMoanaHotel);
console.log(numOfJapanPrefectures);
console.log(numOfABCstoresinHi);







/* var yourShoeSize = 7;
var thatOnePrinceSong = 1999;
var floorsAlaMoanaHotel = 38;
var numOfJapanPrefectures = 47;
var numOfABCstoresinHi = 57;
var cheesecakesFlavAtCheesecakeFac = 34;

console.log(yourShoeSize);
console.log(thatOnePrinceSong);
console.log(floorsAlaMoanaHotel);
console.log(numOfJapanPrefectures);
console.log(numOfABCstoresinHi);
console.log(cheesecakesFlavAtCheesecakeFac);


/*
* #3
* Variables with a Boolean value
*
* Declare variables named likesMcDonalds, eatsDoughnuts and ownsRedShoes.
*
* Assign your own boolean values to each variable and console.log each variable.
*
* 
* Now, use comparison and logic operators (>, <, >=, <=, ===, !==) to make the following variables True of False
*
* Console.log each variable.
*
*/

//For example:
//Make me True:
var booya1 = 3 === 3;
console.log(booya1);


/* var booya1 = 3 > 2; 
console.log(booya1);
*/
//Make me False:
/* var booya2 = 8 < 50;
*/

var booya = 9 !== 10;
console.log(booya);


//Make me True:
/* var booya3 = 10 >= 10;
*/
var booya3 = 10 >= 10;
console.log(booya3);


//Make me False:
/* var booya4 = 3 === '3';
*/
var booya4 = 2 === 2;
console.log(booya4); 
//Make me True:
var booya5 = 7 !== 'seven';  

//Make me False:
var booya6 = 7 !== 7;

var likesMcDonalds = 10 > 8;
var eatsDoughnuts = 6 === 6;
var ownRedShoes = 4!== 'four';

console.log(likesMcDonalds);
console.log(eatsDoughnuts);
console.log(ownRedShoes);


/*
* #4
* Variables with a Null value
*
* Declare variables named completedPrepClass, traveledToMars and buyVicADrink.
*
* Assign a null value to each variable and console.log each variable. 
*/

var completedPrepClass = null;
var traveledToMars = null;
var buyVicADrink = null;

console.log(completedPrepClass);
console.log(traveledToMars);
console.log(buyVicADrink);



/*
* #5
* Variables with a undefined value.
*
* Declare a variable named superBowlChamps, nextPres and hawaiiRail.
*
* Do not assign a value to the variable and console.log each variable.
*/

var superBowlChamps = undefined;
var nextPres = undefined;
var hawaiiRail = undefined;

console.log(superBowlChamps);
console.log(nextPres);
console.log(hawaiiRail);



/*
* #6
* Variables with an Array value
* 
* Declare a variable named plateLunch and assign it an array containing 5 of your favorite lunch items.
* Declare a variable named `donutBox` and assign it an array containing 5 donuts of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `hamajang` and assign it an array containing 6 different data types.
* Declare a variable named `dynamicDuos` and assign it an array containing 3 arrays, with each array containing items that match with one another.
*
* Console.log each variable.
*/
var plateLunch = ['sushi', 'pizza', 'sandwiches', 'korean food', 'watermelon'];
var donutBox = ['glazed', 'cake', 'blueberry', 'coffee', 'chocolate'];
var westCoast = ['Oregon', 'Washington', 'California', 'Arizona', 'Nevada'];
var lotteryResult = [3, 77, 86, 54, 98];
var hamajang = [3,'String', ['r','q'], undefined, null]
var dynamicDuos = [['cat', 'dog'], ['basketball', 'kickball'], ['beach', 'ocean']]

console.log(plateLunch);
console.log(donutBox);
console.log(westCoast);
console.log(lotteryResult);
console.log(hamajang);
console.log(dynamicDuos);

/*7
* Accessing values in Arrays
* var partyList = ["carrot cake", "gin & tonic", "kalua pork nachos", "double stuff oreos", "cool ranch doritos", "orange chicken"];

Console.log the entire array.
Console.log the length of this array.
Console.log only "carrot cake" from this array.
Console.log only "cool ranch doritos" from this array
*/
var partyList = ["carrot cake", "gin & tonic", "kalua pork nachos", "double stuff oreos", "cool ranch doritos", "orange chicken"];
console.log(partyList);
console.log(partyList.length);
console.log(partyList[0]);
console.log(partyList[4]);

/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` from exercise 1 and store them into a new variable called `fullName` (don't forget to include a space between the firstName and lastName).
*
* Using the fullName and birthPlace variables, console.log the following:
*
* "Hi my name is fullName and I was born in birthPlace." 
*
* i.e "Hi my name is Bruce Wayne and I was born in Gotham."
*/
var fullName = firstName + " " + lastName;
console.log("Hi my Name is " + fullName + " and I was born in " + birthPlace);



/*
* #9 
* Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named sum.
* Subtract the two variables and store it to a new variable named difference.
* Mulitply the two variables and store it to a new variable named product.
* Divide the two variables and store it to a new variable named quotient.
* Find the remainder (modulus) of the two variables and store in to a new variable names leftOver.
*
* Console.log each new variable.
*/

var num1 = 3;
var num2 = 23;
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var leftOver = num1 % num2;

console.log(num1);
console.log(num2);
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(leftOver);


/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality (===).
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality (==).

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Console.log the variables. Do you see the difference between strict equality vs. equality?
*/
var isStrictlyEqual = 'Tacocat' === 'tacocat';
var sameNumba = '5' === 5;

console.log(isStrictlyEqual);
console.log(sameNumba);




/* 
* #11
* Logical AND Logical OR
* Use comparison and logic operators (>, <, >=, <=, ===, !==) with the logical && and logical || to make the following variables True of False:
*/

//Use && to make me True
var booya7 = 4 >= 3 && 8 <= 9;

//Use && to make me False
var booya8 = 'there' === 'their' && 'your' === 'your';

//Use || to make me True
var booya9 = 3 * 4 === 12 || 3 * 4 !== 12;

//Use || to make me False
var booya10 = 'Dallas' === 'Texas' || 'Portland' === 'Oregon';

//Console.log each variable
console.log(booya7);
console.log(booya8);
console.log(booya9);
console.log(booya10);



/*
* #12
* Assignments
* Variables with the outcome of an assignment operation (+=, -=, *=, /=, %=):
*
* Declare a variable named `myNum` and assign it with a number of your choosing.
* 
* Change the value of the muNum variable by using the assignment operators and console.log myNum after each assignment.
*/

var myNum = 333;


//increment and assign 3 (+=):
myNum += 3;
console.log(myNum);

//decrement and assign 1 (-=):
myNum -= 1;
console.log(myNum);

//multiple and assign 2 (*=);
myNum *= 2;
console.log(myNum);

//divide and assign 5 (/=);
myNum /= 5;
console.log(myNum);

//modulo and assign 4 (%=);
myNum %= 4;
console.log(myNum);


/*===================================================================*/

/*
* Final Boss 

* The following exercises are designed to further challenge you and give you a jump start on the next topic that'll be covered. Let the boss battle begin!
*
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named bakePie which has a single parameter ingredient.
* 
* When the function is invoked, it should return a string, "Today's special is ingredient pie." Where ingredient will be the value that you pass into the function.
* 
* For example, if the value is `blueberry`, it should return "Today's special is blueberry pie."
* 
* Declare a variable pieResult and assign it to the function call.
* Console.log the variable to see the result.*/

/*function bakePie(ingredient){
    return "Today's special is " + ingredient +" pie.";
}
//bakePie('apple');
var pieResult = bakePie('apple');
console.log(pieResult);*/

function bakePie(ingredient){
    return 'Today\'s special is ' + ingredient + ' pie.';
}

var pieResult = bakePie('strawberry');
console.log(pieResult);




/*
* Declare a Function named jump which has a single parameter, height.
* 
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* 
* For example, if the value is 9, it should return "You jumped 9 feet high!"

* Declare a variable jumpResult and assign it to the function call.
* Console.log the variable to see the result.
*/


/*function jump(height){
    return "You jumped " + height + " feet high!";
}
var jumpResult = jump(7);
console.log(jumpResult);*/


function jump(height){
    return 'You jumped ' + height + ' feet high!';
}
var jumpResult = jump(18);
console.log(jumpResult);




/*
* Declare a Function named makeFood which takes three parameters, ingredient1, ingredient2, recipeName.
* 
* This function should return a string ingredient1 and ingredient2 make a recipeName. Where ingredient1, ingredient2 and recipeName will be the values that you pass into the function.
* 
* For example, if the values are "Cheese", "Bacon", "pancake" it should return "Cheese and bacon make a pancake."
*
* Declare a variable foodResult and assign it to the function call. Console.log the variable to see the result.
*/

/*function makeFood( ingredient1, ingredient2, recipeName ){
    return ingredient1 + " and " + ingredient2 + " make a " + recipeName + ".";
}
makeFood( 'Lettuce', 'dressing', 'salad' )
var foodResult = makeFood( 'Lettuce', 'dressing', 'salad' );
console.log(foodResult)*/


function makeFood(ingredient1, ingredient2, recipeName){
    return ingredient1 + ' and ' + ingredient2 + ' make ' + recipeName + '.';
}
var foodResult = makeFood('Ice Cream', 'a Big Cookie', 'Pizzoki');
console.log(foodResult);
