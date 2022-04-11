/*Fix this function so that it correctly outputs a list of the next five days (starting after the input date). 
Each date should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way.*/

const nextFiveDays = (date) => {
    const dateCopy = new Date(date);
    const result = [];

    for (let i = 0; i < 5; i++) {
        const newDate = new Date(dateCopy.setDate(dateCopy.getDate() + 1));

        result.push(`${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`);
    }

    return result.join(', ');
};

console.log(nextFiveDays(new Date('2000-02-27')));
