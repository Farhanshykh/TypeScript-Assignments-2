//1. Basic array operation:

//Create an array called fruits that contains the names of four different fruits.
//Perform the following operations:
// Add a new fruit to the end of the array.
// Remove the first fruit from the array.
// Add a new fruit to the beginning of the array.
// Find the index of a fruit and remove that fruit using the index.

let fruits: string[] = ["Mango", "Apple", "Banana", "Peach"];
fruits.push("Strawberry"); // Add a fruit in the last.
fruits.shift();// Remove the first element
fruits.unshift("Pineapple");// Add a new fruit at the first
console.log(fruits);

let indexToRemove: number = 2;
fruits.splice(indexToRemove, 1);

console.log(fruits);

//2. Working with multidimensional array:

//Define a 3x3 matrix of numbers as a multidimensional array. Write funtions to:
// Print the diagonal elements of the matrix.
// Calculate the sum of all elements in the matrix.

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
function diagonalElements (matrix: number[][]) {
    console.log("Diagonal Elements:");
    console.log(matrix[0][0]);
    console.log(matrix[1][1]);
    console.log(matrix[2][2]);
}
diagonalElements(matrix);

function sumOfMatrix (matrix: number[][]) {
    let sum = 0;
    for( let i = 0; i < matrix.length; i++) {
        for( let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}
let totalSum = sumOfMatrix(matrix);
console.log("Sum of all elements", totalSum);

//3. Filtering and searching in arrays of objects:

//Given an array of objects where each object represents a book with properties itle, author, and year
//Published,  Write functions to:
//Filter books published after the year 2000.
//Search for books by a specific author.

//Define the array of book objects and implement the functions:

interface Book {
    title: string;
    author: string;
    yearPublished: number;
}

let books: Book[] = [
    { title: "Book 1", author: "Author 1", yearPublished: 1998},
    { title: "Book 2", author: "Author 2", yearPublished: 2005},
    { title: "Book 3", author: "Author 3", yearPublished: 2010},
    { title: "Book 4", author: "Author 4", yearPublished: 1995},
    { title: "Book 5", author: "Author 5", yearPublished: 2022},
];
function filterBooks (books: Book[]) {
    return books.filter(books => books.yearPublished > 2000);
};
let recentBooks = filterBooks(books);
console.log("Book published after 2000", recentBooks);

function searchByAuthor (books: Book[], authorName: string) {
    return books.filter(books => books.author === authorName);
};

let booksByAuthor = searchByAuthor(books, "Author 2");
console.log("Author 2");
console.log(booksByAuthor);

//4. Using Array Methods:

//Create an array of numbers. Using array methods, Perform the following task:
// Create a new array with the squares of each number.
//Filter out all numbers greater than 50.
//Use the reduce method to find the sum of all numbers in the array

let numbers: number[] = [1, 2, 3, 4, 5];

let numbers2: number[] = [40, 50, 60, 70, 80];

let squares: number[] = numbers.map(num => num * num);

console.log("Original Array:", numbers);
console.log("Array With Squares:", squares);

let filteredNumbers: number[] = numbers2.filter(numbers2 => numbers2 > 50);

console.log("Original Array", numbers2);
console.log("Greater than 50", filteredNumbers);

let reduce: number = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Original Array", numbers2);
console.log("Sum of array", reduce);

//5. Advanced: Working with nested array and objects.

//Consider an array of objects where each object represents a student. Each student object has a name,
//id, and an array of grades. Write a function that calculates the average grade for each student and
//adds it as a new property averageGrade to each student object.

//Define the array of student objects and implement the function

interface Student {
    name: string;
    id: number;
    grades: number[];
    averageGrade?: number;
}

let students: Student[] = [
    {
        name: "Alice",
        id: 1,
        grades: [85, 90, 88]
    },
    {
        name: "Bob",
        id: 2,
        grades: [72, 79, 85, 91]
    },
    {
        name: "Charlie",
        id: 3,
        grades: [90, 92, 94, 88]
    }
];

function calculateAverageGrade(students: Student[]): void {
    students.forEach(student => {
        const sum: number = student.grades.reduce((total, grade) => total + grade, 0);
        const average: number = sum / student.grades.length;
        
        student.averageGrade = average;
    });
}

calculateAverageGrade(students);

console.log(students);