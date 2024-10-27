// Part 1
let title = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitRows = title.split("\n");
console.log(splitRows);

// Part 2
let title2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = title2.split('\n');
console.log(rows);

const header = rows[0].split(','); // Creates the headers 

// The array
const bill = [];

let rowIndex = 1;

//Part 3
let x = 0; 
while(x < header.length) {
    header[x] = header[x].toLowerCase();
    x++
}


// Splitting rows
while (rowIndex < rows.length) {
    const currentRow = rows[rowIndex].split(',') // Splits the rows according to the index position
    const obj = {}; // curly brackets for creating objects
    let headerIndex = 0; //counter, to assign correct info to each header 

    while (headerIndex < header.length) {
        obj[header[headerIndex]] = currentRow[headerIndex]; //Adds each item to appropriate header for a row
        headerIndex++;
    }
    bill.push(obj); //Adds the object to the bill arrat\y
    rowIndex++
}
//console.log(bill);


//Part 4
const rem = bill.pop(); 
console.log(bill); 

const insertIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
bill.splice(1, 0, insertIndex1)

const insertLast = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
bill.push(insertLast)

console.log(bill); 

// Calculate the age
let totalAge = 0;
let ageCount = 0;

for (let i = 0; i < bill.length; i++) {
    totalAge += Number(bill[i].age) //This will convert strings to numbers
    ageCount++
}
console.log(totalAge);
console.log(totalAge/ageCount);

//Average Age
let avg = totalAge/ageCount;

// Since I rounded the age how about some bonus points Christina? (Pretty Please...)
console.log(Math.floor(avg));


// Part 5

//Extract the headers and join them
const k = Object.keys(bill[0]).join(',')
console.log(k); 

// Create row arrays by turning them to strings
const y = bill.map(obj => Object.values(obj).join(','));
console.log(y);

// Combine header and rows
const z = [k, ...y].join('\\n')
console.log(z);











