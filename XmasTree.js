/*
Complete the function that returns a christmas tree of the given height. The height is passed through to the 
function and the function should return a list containing each line of the tree.

XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']
Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.

Examples
The final idea is for the tree to look like this if you decide to print each element of the list:

n = 5 will result in:

____#____              1
___###___              2
__#####__              3
_#######_              4
#########       -----> 5 - Height of Tree
____#____        1      
____#____        2 - Trunk/Stem of Tree
n = 3 will result in:

__#__                  1
_###_                  2
#####          ----->  3 - Height of Tree
__#__           1
__#__           2 - Trunk/Stem of Tree
*/

function xMasTree(n) {
  let sidePad = (n * 2 - 1 - 1) / 2;
  const trunkSidePad = sidePad;
  let tree = 1;
  const trunkTree = tree;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(
      `${'_'.repeat(sidePad)}${'#'.repeat(tree)}${'_'.repeat(sidePad)}`
    );
    sidePad--;
    tree += 2;
  }

  for (let i = 0; i < 2; i++) {
    result.push(
      `${'_'.repeat(trunkSidePad)}${'#'.repeat(trunkTree)}${'_'.repeat(
        trunkSidePad
      )}`
    );
  }

  return result;
}

console.log(xMasTree(3));
console.log(xMasTree(5));
console.log(xMasTree(7));
console.log(xMasTree(2));
console.log(xMasTree(4));
console.log(xMasTree(6));
