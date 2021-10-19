/*Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. 
Each duration represents the time taken by Santa to deliver a present. Determine whether 
he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, 
Santa can complete the delivery ;-) .

*/

function determineTime(durations) {
    if (durations.length === 0) return true;
    
	const dayInSeconds = 24 * 3600;
	const hours = durations
		.map(times => Number(times.split(':')[0]) * 3600)
		.reduce((accum, current) => accum + current);

	const minutes = durations
		.map(times => Number(times.split(':')[1] * 60))
		.reduce((accum, current) => accum + current);

	const seconds = durations
		.map(times => Number(times.split(':')[2]))
		.reduce((accum, current) => accum + current);

	return hours + minutes + seconds <= dayInSeconds;
}

console.log(determineTime(['06:00:00', '12:00:00', '06:30:00']));
