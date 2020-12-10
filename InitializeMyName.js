/*Some people just have a first name; some people have first and last names and some people have first, 
middle and last names.
You task is to initialize the middle names (if there is any).*/

function initializeNames(name) {
    let nameArray = name.split(' ');
    let resultName = '';

    if (nameArray.length == 1 || nameArray.length == 2) {
        return name;
    } else {
        for (let i = 0; i < nameArray.length; i++) {
            if (i >= 1 && i < nameArray.length - 1) {
                nameArray[i] = nameArray[i].charAt(0) + '.';
            }

            resultName += nameArray[i] + ' ';
        }

        return resultName.slice(0, -1);
    }
}

console.log(initializeNames('Lois Mary Lane'));