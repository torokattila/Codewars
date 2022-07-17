/*An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). 
It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) 
(run, raced in that order and without a break. It hurts... trust me.

Your task is to take a distance that an athlete is through the race, and return one of the following:

If the distance is zero, return 'Starting Line... Good Luck!'.

If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, 
and the remaining race distance as the value.

If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

Finally, if the athlete has completed te distance, return "You're done! Stop running!".

All distance should be calculated to two decimal places.*/

const isSwimming = (num) => num > 0 && num <= 2.4;
const isCycling = (num) => num > 2.4 && num <= 112;
const isRunningAndMoreThan10Miles = (num, distance) =>
    num > 112 && distance - num > 10;
const isRunningAndLessThan10Miles = (num, distance) =>
    num > 112 && distance - num <= 10;

function iTri(s) {
    const TOTAL = 140.6;
    if (s === 0) return 'Starting Line... Good Luck!';
    if (s >= TOTAL) return `You're done! Stop running!`;
    const remainingDistance = (TOTAL - s).toFixed(2);

    const result = {};

    if (isSwimming(s)) result['Swim'] = `${remainingDistance} to go!`;
    if (isCycling(s)) result['Bike'] = `${remainingDistance} to go!`;
    if (isRunningAndMoreThan10Miles(s, TOTAL))
        result['Run'] = `${remainingDistance} to go!`;
    if (isRunningAndLessThan10Miles(s, TOTAL)) result['Run'] = 'Nearly there!';

    return result;
}

console.log(iTri(36));
console.log(iTri(103.5));
console.log(iTri(0));
console.log(iTri(140.6));
console.log(iTri(2));
console.log(iTri(128));
console.log(iTri(136));
