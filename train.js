// TASK-G
function getHighestIndex(w) {
  const engkatta = w.slice().sort((a, b) => {
    return b - a;
  });
  return w.indexOf(engkatta[0]);
}

console.log(getHighestIndex([55, 2, 12, 21, 21, 80, 100]));
