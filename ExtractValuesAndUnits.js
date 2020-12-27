/*Given a string representing a numerical value and a unit, e.g. "12px", return the value and units like so:

input: "12px"
output: {val: 12, units: "px"}
Assume all inputs have a numerical value, but not necessarily any specified units.

There may also be space(s) between the value and the unit, in which case ignore them.*/

function valAndUnits(s) {
    let output = {};
    let numbers = s.match(/[0-9\.-]/g).join('');
    let unit = s.match(/[a-zA-Z%]/g);

    output['val'] = parseFloat(numbers);
    
    if (unit != null) {
        output['units'] = unit.join('');
    } else {
        output['units'] = '';
    }

    return output;
}

console.log(valAndUnits("12"));