/*
The national go-kart racing competition is taking place at your local town and you've been called 
for building the winners podium with the available wooden blocks. Thankfully you are in a wood-rich area, 
number of blocks are always at least 6.

Remember a classic racing podium has three platforms for first, second and third place. 
First place is the highest and second place is higher than third. 
Also notice that platforms are arranged as 2nd - 1st - 3rd.

The organizers want a podium that satisfies:

The first place platform has the minimum height possible
The second place platform has the closest height to first place
All platforms have heights greater than zero.
Task
Given the numbers of blocks available, return an array / tuple or another data structure 
depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

Examples (input -> output)
11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1]
*/

function racePodium(blocks) {
  let secondPlace = Math.ceil(blocks / 3);
  const firstPlace = secondPlace + 1;

  if (secondPlace + firstPlace === blocks) secondPlace--;

  const thirdPlace = blocks - (firstPlace + secondPlace);

  return [secondPlace, firstPlace, thirdPlace];
}

console.log(racePodium(11));
console.log(racePodium(6));
console.log(racePodium(10));
console.log(racePodium(100000));
console.log(racePodium(7));
console.log(racePodium(8));