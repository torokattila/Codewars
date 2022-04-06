/*Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), 
and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

The return value should be a string where each date is seperated by a space. The date should be formatted 
like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

If no end year is given, only return friday the thirteenths during the start year.

Examples
fridayTheThirteenths(1999, 2000) 
  // returns "8/13/1999 10/13/2000"
  
fridayTheThirteenths(2014, 2015) 
  // returns "6/13/2014 2/13/2015 3/13/2015 11/13/2015"
  
fridayTheThirteenths(2000)
  // returns "10/13/2000"
This kata was designed to use the built-in Date object. Dates can often be finicky, 
so while there are other methods to get the correct dates, I can't guarantee they will work.*/

function fridayTheThirteenths(start, end) {
    const months = end ? (end - start + 1) * 12 : 12;
    const results = [];

    for (let month = 0; month < months; month++) {
        let date = new Date(start, month, 13);
        if (date.getDay() === 5) {
            results.push(
                `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            );
        }
    }

    return results.join(' ');
}

console.log(fridayTheThirteenths(1937, 1946));
