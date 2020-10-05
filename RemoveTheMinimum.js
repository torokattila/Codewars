function removeSmallest(numbers) {
    let minimum = Math.min.apply(null, numbers);
    let copiedNumbers = [...numbers];
    copiedNumbers.splice(numbers.indexOf(minimum), 1);

    return copiedNumbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5 , 1]));