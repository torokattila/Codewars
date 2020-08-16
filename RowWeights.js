function rowWeights(array) {
    let teamOneSum = 0;
    let teamTwoSum = 0;

    for (let i = 0; i <= array.length - 1; i+=2) {
        teamOneSum += array[i];
    }

    for (let i = 1; i <= array.length - 1; i+= 2) {
        teamTwoSum += array[i];
    }

    return [teamOneSum, teamTwoSum];
}