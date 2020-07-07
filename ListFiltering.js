function filter_list(l) {
    const newArray = l.filter((x) => {
        return typeof x !== 'string';
    });

    return newArray;
}

console.log(filter_list([1,2,'aasf','1','123',123]));