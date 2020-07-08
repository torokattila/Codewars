function twoOldestAges(ages) {
    ages.sort((a, b) => {
        return a - b;
    });
    
    return [ages[ages.length -  2], ages[ages.length - 1]];
}