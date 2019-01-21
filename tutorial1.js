// function mma(arr) {
//     var max = arr[0];
//     var min = arr[0];
//     var sum = arr[0];
//     var x =[];
//     for (var i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max =arr[i] ;
//         }
//         if (arr[i] < min){
//              min = arr[i];
//         }
//         sum = sum + arr[i];

//     }
//     console.log("The minimum is " + min + " " + "The maximum is " + max + " " + "The Average is " + sum/arr.length);
//     x.push(max, min, sum/arr.length);
//     return x;

// }
// console.log(mma([3,6,9]));


// var mystring = [];
// function fizzbuzz(num){
//     for (var i = 1; i <= num; i++){
//     }
//     return mystring
// }

// console.log(fizzbuzz("this is wrong"))

// console.log(fizzbuzz(10))

// var str="",x,y,a;
// for (a=1;a<=15;a++)
// {
//     x = a%3 ==0;
//     y = a%5 ==0;
//     if(x)
//     {
//         str+="fizz"
//     }
//     if (y)
//     {
//         str+="buzz"
//     }
//     if (!(x||y))
//     {
//         str+=a;
//     }
//     str+="\n"
// }
// console.log(str);


// function fizzBuzz(num){
// 	var output;
// 	for(var i=1;i<=num;i++){
// 		output = '';
// 		if(i%3 === 0){
// 			output+='Fizz';
// 		} 
// 		if(i%5 === 0){
// 			output+='Buzz';
// 		} 
// 		if(output === '') {
// 			output+=i;
// 		}
// 		console.log(output);
// 	}
// }

// console.log(fizzBuzz(15))


// function validBraces(braces){
//     var pairs = {
//         ')' : '(',
//         ']' : '[',
//         '}' : '{'
//     };

//     var stack = [];

//     for (var i = 0; i < braces.length; ++i)
//         if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{')
//             stack.push(braces[i]);
//         else if (stack[stack.length-1] === pairs[braces[i]])
//             stack.pop();
//         else
//             return false; // catchall

//     return stack.length === 0;

// }


// bubble sort algoruithm 

// array to sort as an example
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// // swap helper function, this replaces the values from one index position such as array[i] to array[j]
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }


// // correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
// function bubbleSort(array) {
//   var swapped;
//   do {
//     swapped = false;
//     for(var i = 0; i < array.length; i++) {
//       if(array[i] > array[i + 1]) {
//         swap(array, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while(swapped);
//   return array;
// }

// console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// function coins(num){
// var dollar = 0;
// var quarter = 0;
// var dimes = 0;
// var nickel = 0;
// var pennies = 0;
//     console.log(dollar)
//     if (num - 100 >= 100){
//         dollar++ ;
//         console.log(dollar)
//     }

// }

// coins(500);



//  this is for the coin change problem 

// const generateCoinChange = cents => {
//     let dollar = 0;
//     let quarter = 0;
//     let dime = 0;
//     let nickel = 0;
//     let penny = 0;
//     let remainingChange = cents;

//     while (remainingChange >= 100) {
//         remainingChange -= 100;
//         dollar++;
//     }
//     while (remainingChange >= 25) {
//         remainingChange -= 25;
//         quarter++;
//     }
//     while (remainingChange >= 10) {
//         remainingChange -= 10;
//         dime++;
//     }
//     while (remainingChange >= 5) {
//         remainingChange -= 5;
//         nickel++;
//     }
//     while (remainingChange > 0) {
//         remainingChange -= 1;
//         penny++;
//     }
//     console.log(` We will need ${dollar} dollar(s), ${quarter} quarter(s), ${dime} dime(s), ${nickel} nickel(s), ${penny} penny/pennies`)
// };
// generateCoinChange(94);
// generateCoinChange(120);
// generateCoinChange(23);




//  users assignment 

//  var users = [
//     {
//       fname: "Kermit",
//       lname: "the Frog",
//       languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//       interests: {
//         music: ["guitar", "flute"],
//         dance: ["tap", "salsa"],
//         television: ["Black Mirror", "Stranger Things"]
//       }
//     },
//     {
//       fname: "Winnie",
//       lname: "the Pooh",
//       languages: ["Python", "Swift", "Java"],
//       interests: {
//         food: ["honey", "honeycomb"],
//         flowers: ["honeysuckle"],
//         mysteries: ["Heffalumps"]
//       }
//     },
//     {
//       fname: "Arthur",
//       lname: "Dent",
//       languages: ["JavaScript", "HTML", "Go"],
//       interests: {
//         space: ["stars", "planets", "improbability"],
//         home: ["tea", "yellow bulldozers"]
//       }
//     }
//   ]
  
//   function userLang(users){
//       for (var i = 0; i < users.length; i++)
//       {
//           console.log(`${users[i]["fname"]},  ${users[i]["lname"]},  knows ${users[i]["languages"]}`)
//       }
//       for (var i = 0; i < users.length; i++)
//       {
//           console.log(`${users[i]["fname"]} is also interested in  ${users[i]["interests"]["music"]} , ${users[i]["interests"]["dance"]}, ${users[i]["interests"]["television"]}`)
//       }
//       return ;
//   }

//   console.log(userLang(users));



function binaryIndexOf(searchElement) {
  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = (minIndex + maxIndex) / 2 | 0;
      currentElement = this[currentIndex];

      if (currentElement < searchElement) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > searchElement) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }

  return -1;
}

binaryIndexOf([1,2,3,4,5,6,7,8,9,12,13,14,13,34,56,76,78,89,99]);