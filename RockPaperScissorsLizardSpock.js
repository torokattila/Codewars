/*Rock-Paper-Scissors Big Bang Style
According to Sheldon Cooper the following is true:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
( and as it always has ) Rock crushes Scissors
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".*/

function rpsls(pl1, pl2) {
	if (pl1 === pl2) return 'Draw!';

	const objectWithEnemies = {
		scissors: ['rock', 'spock'],
		paper: ['scissors', 'lizard'],
		rock: ['paper', 'spock'],
		lizard: ['scissors', 'rock'],
		spock: ['lizard', 'paper']
	};

	return objectWithEnemies[pl1].includes(pl2)
		? 'Player 2 Won!'
		: 'Player 1 Won!';
}

console.log(rpsls('lizard', 'scissors'));
