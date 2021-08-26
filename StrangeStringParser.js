/*Here you have a connected to a socket, and the data looks very strange. 
It seems to be separated by a random special character! Oh No! 
We need your help to find the special character, parse the data, and return it translated! 
There isn't much time, hurry we need your help!*/

function wordSplitter(string) {
	return string.replace(/[^a-zA-Z0-9.-]/g, " ").split(' ');
}

console.log(wordSplitter("RADIO+FREQ+12500+NW+1600+END"));