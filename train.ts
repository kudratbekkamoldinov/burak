// TASK-G
function getHighestIndex(w: number[]): number {
  const engkatta = w.slice().sort((a, b) => b - a);
  return w.indexOf(engkatta[0]);
}

console.log(getHighestIndex([55, 2, 12, 21, 21, 80, 100]));
