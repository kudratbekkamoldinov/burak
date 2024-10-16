




// // TASK V 
// function countChars(str: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};
  
//   for (let char of str) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
  
//   return charCount;
// }

// console.log(countChars("programming"));



// // U-Task
// function sumOdds(number: number): Promise<number> {
//   const numbers: number[] = [];
//   const rnumbers: number[] = [];
//   return new Promise((resolse) => {
//     let count: number = 0;
//     const set = setInterval(() => {
//       count++;
//       numbers.push(count);
//       if (count === number) {
//         clearInterval(set);
//         numbers.map((ele) => {
//           if (ele % 2 !== 0) {
//             return rnumbers.push(ele);
//           }
//           return ele;
//         });
//         resolse(rnumbers.length - 1);
//       }
//     });
//   });
// }
// sumOdds(10).then((result) => {
//   console.log(result);
// });

// // TASK T
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// // TASK S
// function missingNumber(nums: number[]): number {
//   const n: number = nums.length;
//   const expectedSum: number = (n * (n + 1)) / 2;
//   const actualSum: number = nums.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// // TASK R
// function calculate(string: string) {
//   const numbers = string.split('+').map(Number);
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }

// console.log(calculate("1 + 9"));

// // TASK Q
// function hasProperty(object: object, string: string): boolean {

//   if(Object.keys(object).includes(string)) {
//     return true;
//   } else {
//     return false
//   }
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "name"));

// // TASK P
// function objectToArray(obj: Record<string, any>): [string, any][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({a: 10, b: 20}));

// // TASK O
// function calculateSumOfNumbers(array: any[]):number {
//   return array.reduce((sum: number, i: any) => {
//     if (typeof i === 'number') {
//       return sum + i
//     }
//     return sum
//   }, 0);
// }

// console.log(calculateSumOfNumbers([11, "10", {son: 10}, true, 35]));

// // TASK-N
// function palindromCheck(givenword: string): boolean {
//   const reverseWord = givenword.split("").reverse().join("");
//   return givenword === reverseWord;
// }

// console.log(palindromCheck("boy"));

// // TASK-M
// function getSquareNumbers(numbers: number[]): { number: number; square: number }[] {
//   return numbers.map(num => ({
//       number: num,
//       square: num * num
//   }));
// }

// console.log(getSquareNumbers([1, 2, 3, 4, 5, 6]))

// // TASK L
// function reverseSentence(string: string): string {
//   return string.split(" ").map(word => word.split("").reverse().join("")).join(" ");

// }
// console.log(reverseSentence("We like Coding!"))

// // TASK K
// function countVowels(w: string): number {
//   const vowels: string[] = ["a", "e", "i", "o", "u"];
//   let count: number = 0;
//   for (let char of w.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("I am Joseph!"));

// function findWord(getWord: string) {
//   return getWord.split(" ").reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   }, "");
// }

// const word = "I have passed KIIP 4 test. Congratulations!";
// console.log(findWord(word));

// // TASK - I
// function findMostFrequentNumber(numberArr: number[]) {
//   const sortedNum: number[] = numberArr.sort((a, b) => a - b);
//   let mostFrequentNum: number = sortedNum[0];
//   let maxCount: number = 1;
//   let currentCount: number = 1;

//   for (let i = 1; i < sortedNum.length; i++) {
//     if (sortedNum[i] === sortedNum[i - 1]) {
//       currentCount++;
//     } else {
//       currentCount = 1;
//     }

//     if (currentCount > maxCount) {
//       maxCount = currentCount;
//       mostFrequentNum = sortedNum[i];
//     }
//   }

//   return mostFrequentNum;
// }

// const numbers: number[] = [1, 2, 1, 1, 4, 3, 6, 3, 4];
// console.log(findMostFrequentNumber(numbers));

/* Project Standards:
  - Logging standards
  - Naming standards
      function, method, variable => CAMEL   goHome
      class => PASCAL                       MemberService
      folder => KEBAB           
      css => SNAKE                          button_style
  - Error handling

*/

/* Requests:
    traditional API (form POST)
    Rest API
    GraphQL API
 */

/* Frontend development
  Traditional FD => BSSR (Admin)=> EJS
  Modern FD      => SPA  (User) =>  React
 */

/* Coockies
    reques json
    self destroy
 */

/* Validation: VALIDATION: CLIENT vs DTO vs SERVER vs SCHEMA
Client validation
DTO validation
Server validation
Schema validation
*/

// // H2-TASK
// function getDigits(a: string): string {
//   let nums: string[] = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!isNaN(parseInt(a[i]))) {
//       nums.push(a[i]);
//     }
//   }
//   return nums.join("");
// }

// console.log(getDigits("m1312uihryu8qtryu123412312312jigaw8of"));

// // H-TASK
// function getPositive(a: number[]): string {
//   const positives = a.filter((num) => num > 0);
//   return positives.join("");
// }

// console.log(getPositive([1, -4, 2, 1]));

// // TASK-G
// function getHighestIndex(w: number[]): number {
//   const engkatta = w.slice().sort((a, b) => b - a);
//   return w.indexOf(engkatta[0]);
// }

// console.log(getHighestIndex([55, 2, 12, 21, 21, 80, 100]));
