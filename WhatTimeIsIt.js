/*Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, 
and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

*/

const AM_CONVERSIONS = {
    12: '00',
};

const PM_CONVERSIONS = {
    12: '12',
    11: '23',
    10: '22',
    '09': '21',
    '08': '20',
    '07': '19',
    '06': '18',
    '05': '17',
    '04': '16',
    '03': '15',
    '02': '14',
    '01': '13',
};

const getMilitaryTime = (input) => {
    const timeWithoutFormat = input.includes('AM')
        ? input.replace('AM', '')
        : input.replace('PM', '');
    const times = timeWithoutFormat.split(':');
    times[0] =
        input.includes('AM') && AM_CONVERSIONS[times[0]]
            ? AM_CONVERSIONS[times[0]]
            : input.includes('PM') && PM_CONVERSIONS[times[0]]
            ? PM_CONVERSIONS[times[0]]
            : times[0];

    return times.join(':');
};

console.log(getMilitaryTime('12:00:01AM'));
console.log(getMilitaryTime('11:46:47PM'));
console.log(getMilitaryTime('01:26:27PM'));
