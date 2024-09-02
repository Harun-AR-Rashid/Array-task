// ### 1. Declare an array 

// let fruits = ['mango', 'apple', 'orange', 'guajava', 'lichi']
// console.log(fruits[3]);
// fruits[2]='jambura';
// console.log(fruits);

// ### 2. Add or remove elements
// let touristSpot = ['coxbazar', 'chattogram', 'sunderbon']

// touristSpot.push('rangamati');
// console.log(touristSpot);
// touristSpot.push('khagrachori', 'bandorban');
// console.log(touristSpot);
// touristSpot.pop();
// console.log(touristSpot);

// ### 3. Checking Array Membership with ‘includes’
// let books =['math', 'english', 'social-book', 'javascript-book', 'gk-book']
// console.log(books.includes('javascript-book'))
// if(books.includes('javascript-book')){
//     console.log('javascript book is in the array')
// }
// else{
//     console.log('javascript book is not in the array')
// }
// ### 4. Checking if it's an Array
const numbers= [2, 23, 32, 35, 65, 43];
const galib = 54;
console.log(Array.isArray(numbers));
if(Array.isArray(numbers)){
    console.log('numbers is an array')
}
else{
    console.log('numbers is not an array')
}
console.log(Array.isArray(galib));
if(Array.isArray(galib)){
    console.log('galib is an array')
}
else{
    console.log('galib is not an array')
}