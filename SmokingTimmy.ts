/*
Smoking Timmy

Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own 
cigarettes and that's why he has to be extremely efficient in smoking.
It's now your task to create a function that calculates how many cigarettes 
Timothy can smoke out of the given amounts of bars and boxes:

a bar has 10 boxes of cigarettes,
a box has 18 cigarettes,
out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
of course the self made cigarettes also have an end which can be used to create a new one...
Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.
*/

export function startSmoking(bars: number, boxes: number): number {
  const cigarettesPerBox = 18;
  const boxesPerBar = 10;
  const stubsPerNewCigarette = 5;

  // total number of cigarettes Timothy starts with
  let totalCigarettes =
    bars * boxesPerBar * cigarettesPerBox + boxes * cigarettesPerBox;
  let totalStubs = totalCigarettes; // each cigarette creates 1 stub

  // keep rolling new cigarettes from stubs while possible
  while (totalStubs >= stubsPerNewCigarette) {
    const newCigarettes = Math.floor(totalStubs / stubsPerNewCigarette);

    totalCigarettes += newCigarettes;
    totalStubs = (totalStubs % stubsPerNewCigarette) + newCigarettes; // leftover stubs + new stubs
  }

  return totalCigarettes;
}

console.log(startSmoking(0, 1));
console.log(startSmoking(1, 0));
