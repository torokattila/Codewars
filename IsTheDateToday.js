/*Write a simple function that takes as a parameter a date object and returns a boolean value 
representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.*/

function isToday(date) {
    const inputDate = new Date(date);
    const inputWithoutTime = `${inputDate.getFullYear()}-${inputDate.getMonth() + 1}-${inputDate.getDate()}`;
    const today = new Date();
    const todayWithoutTime = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    return inputWithoutTime === todayWithoutTime;
}

console.log(isToday(new Date('2022-03-02T18:09:52.956Z')));
