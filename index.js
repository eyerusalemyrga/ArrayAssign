var arr1 = [3,7,34,90,12]
var arr2 = [true, "green", "where",12,56]
const last1 = arr1[arr1.length - 1];
const last2 = arr2[arr2.length - 1];

 console.log(last1);
 console.log(last2);

 var myPets = ["Cow", "Bird", "Snake", "Dog"];
 console.log(myPets.join());




 var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 const sortedarr3 = arr3.sort((a, b) => a - b);
 console.log(sortedarr3);

 
 let arr = ["boy", "man", "girl", "school", "girl", "woman"]; 
 let uniqueArr = []; 
 let duplicateArr = []; 
 let seen = {}; 
 for (let i = 0; i < arr.length; i++)
 { if (seen[arr[i]]) { duplicateArr.push(arr[i]); }
  else { seen[arr[i]] = true; uniqueArr.push(arr[i]); } }

 console.log("Array without duplicates:",uniqueArr );
 console.log("Array containing only duplicates:", duplicateArr);

 let arr5 = ["the", "way", "x", 4];
 function searchWord(array, item) {
     if (array.includes(item)) {
         return item; 
     } else {
         return "the search word was not found"; 
     }
 }
 console.log(searchWord(arr5, "food"));

 let word = "renniw"
let ascendingOrder = word.split('').sort().join('');
console.log(ascendingOrder);


var fruits = ["Orange", "Mango", "Pineapple", "Banana", "potato", "Tomato","Apricots","Grape","Avocado","Papaya","Lemon","Melon"];
fruits.splice(5, 0, "Tomato");
console.log(fruits);