function whatCentury(year) {
    let resultString = '';
    let century = '';

    if (!(parseInt(year) % 1000 == 0)) {
        year = year.substring(0, 2);   
    }

    if (parseInt(year) % 1000 == 0) {
        century += year.substring(0, 2);
    } else {
        century += (parseInt(year.substring(0, 2)) + 1).toString();
    }

    if (parseInt(century.substring(0, 1)) > 1 && century.substring(1, 2) == '3') {
        resultString += century + 'rd';
    } else if (parseInt(century.substring(0, 1)) == 1) {
        resultString += century + 'th'
    } else if (parseInt(century) % 10 === 0) {
        resultString += century + 'th';
    } else if (parseInt(century.substring(0, 1)) > 1 && century.substring(1, 2) == '1') {
        resultString += century + 'st';
    } else if (parseInt(century.substring(0, 2)) > 1 && century.substring(1, 2) == '2') {
        resultString += century + 'nd';
    }

    return resultString;
}

console.log(whatCentury("1456"));