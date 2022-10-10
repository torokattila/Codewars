/*
You have an 8-wind compass, like this:

https://image.shutterstock.com/image-vector/compass-rose-eight-abbreviated-initials-260nw-1453270079.jpg

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) 
and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, 
and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
*/

function direction(facing, turn) {
  const divisionResult = turn / 45;
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const startIndex = directions.indexOf(facing);
  const endIndex = (startIndex + divisionResult) % directions.length;

  return endIndex < 0
    ? directions[directions.length - Math.abs(endIndex)]
    : directions[endIndex];
}

console.log(direction('S', 180));
console.log(direction('SE', -45));
console.log(direction('W', 495));
console.log(direction('N', -450));
