export function camelCase(str: string): string {
    let resultString: string = '';
    let stringArray: string[] = str.trim().split(' ');

    stringArray.forEach(function (item) {
        resultString += item.charAt(0).toUpperCase() + item.slice(1);
    });

    return resultString;
}

console.log(camelCase(" say hello "));
