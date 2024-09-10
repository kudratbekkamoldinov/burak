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
