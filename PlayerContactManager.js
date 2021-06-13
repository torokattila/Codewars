/*You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' 
info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.*/

function playerManager(players) {
	if (players == "" || players == null) return [];

	const cuttedString = players.split(",");
	const playersArray = [];
	const resultObjectArray = [];

	for (let i = 0; i < cuttedString.length; i += 2) {
		playersArray.push(cuttedString.slice(i, i + 2));
	}

	playersArray.forEach(player => {
		resultObjectArray.push({
			player: player[0].trim(),
			contact: Number(player[1].trim())
		});
	});

	return resultObjectArray;
}

console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));
