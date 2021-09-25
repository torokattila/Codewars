/*Task
Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. 
Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
The other letters don't have power and are only victims.
The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );

Example
alphabetWar("s*zz");           //=> Right side wins!
alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
alphabetWar("zzzz*s*");       //=> Right side wins!
alphabetWar("www*www****z");  //=> Left side wins!*/

function alphabetWar(fight) {
    const regex = new RegExp(".?\\*+.?", "g");
    const removedString = fight.replace(regex, "");
    const leftSide = {
		w: 4,
		p: 3,
		b: 2,
		s: 1
	};
	const rightSide = {
		m: 4,
		q: 3,
		d: 2,
		z: 1
	};
	let leftSideCounter = 0;
	let rightSideCounter = 0;

    if (removedString === "") {
        return "Let's fight again!";
    } else {
        removedString.split("").forEach(character => {
            if (leftSide[character]) {
                leftSideCounter += leftSide[character];
            } else if (rightSide[character]) {
                rightSideCounter += rightSide[character];
            }
        });

        console.log(leftSideCounter, rightSideCounter);

        return leftSideCounter > rightSideCounter ? "Left side wins!" : rightSideCounter > leftSideCounter ? "Right side wins!" : "Let's fight again!";
    }
}

console.log(alphabetWar("mptb*m**"));
