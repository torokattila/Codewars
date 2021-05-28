/*Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

Tips:
The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
The start time will always be before the end time.
*/

function elapsedSeconds(startDate, endDate) {
	const firstDate = new Date(startDate).getTime();
    const secondDate = new Date(endDate).getTime();

    return (secondDate - firstDate) / 1000;
}

console.log(elapsedSeconds('2013-02-01T00:00:01.000Z', '2013-02-01T00:00:20.000Z'));