// H2-TASK
function getDigits(a: string): string {
  let numbers: string[] = [];
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(parseInt(a[i]))) {
      numbers.push(a[i]);
    }
  }
  return numbers.join("");
}

console.log(getDigits("m1312uihryu8qwgtryu123412312312jigaweyu8of"));

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
