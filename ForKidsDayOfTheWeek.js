/*Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Frid*/

function dayOfTheWeek(date) {
    const dates = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const splittedDate = date.split('/');
    const year = splittedDate[2];
    const month = splittedDate[1];
    const day = splittedDate[0];
    const newDate = new Date(`${month}/${day}/${year}`);
    
    return dates[newDate.getDay()];
}

console.log(dayOfTheWeek('05/08/2015'));
