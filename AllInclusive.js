/*Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr (C returns 1)
false otherwise (C returns 0)
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true*/

function containAllRots(strng, arr) {
    if (strng.length === 0) return true;
    const allRotations = [];
    let length = strng.length - 1;
    let tempRotation;

    for (let j = 0; j < length + 1; j++) {
        let i = 0;
        tempRotation = strng[length];

        while (i < length) {
            tempRotation += strng[i];
            i++;
        }

        allRotations.push(tempRotation);
        strng = tempRotation;
    }

    return allRotations.every((item) => arr.includes(item));
}

console.log(
    containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])
);
console.log(
    containAllRots('Ajylvpy', [
        'Ajylvpy',
        'ylvpyAj',
        'jylvpyA',
        'lvpyAjy',
        'pyAjylv',
        'vpyAjyl',
        'ipywee',
    ])
);
