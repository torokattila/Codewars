function sortByLength(array) {
    return array.sort((a, b) => {
        return a.length - b.length;
    });
};

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));