export function abbrevName(name: string): string {
    let nameArray: string[] = name.split(" ");

    return nameArray.length > 2 ? 'it is wrong' :  nameArray[0].charAt(0).toUpperCase() + '.' + nameArray[1].charAt(0).toUpperCase();
}