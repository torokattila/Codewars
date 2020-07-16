function maxDiff(list) {
    let max = list[0];
    let min = list[0];

    if (list.length === 1 || list.length === 0) {
        return 0;
    } else {
        list.forEach((item) => {
            if (item > max) {
                max = item;
            } else if (item < min) {
                min = item;
            }
        });
    }

    return max - min;
};