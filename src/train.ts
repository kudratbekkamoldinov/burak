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

/* 
    traditional API
    Rest API
    GraphQL API
 */

/*
  Traditional FD => BSSR (Admin)=> EJS
  Modern FD      => SPA  (User) =>  React
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
