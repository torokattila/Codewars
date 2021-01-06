function anArgument() {
    const argumentsArray = Array.from(arguments);
    let argumentsString = '';

    if (argumentsArray.length == 0) {
        return 'You didn\'t give me any arguments.';
    } else if (argumentsArray.length == 1) {
        return `You gave me 1 argument and it is \"${argumentsArray[0]}\".`;
    } else if (argumentsArray.length == 2) {
        return `You gave me 2 arguments and they are \"${argumentsArray[0]}\" and \"${argumentsArray[1]}\".`;
    } else {
        for (let i = 0; i < argumentsArray.length; i++) {
            if (i == argumentsArray.length - 1) {
                argumentsArray[i] = `and \"${argumentsArray[i]}\"`;
            } else if (i == argumentsArray.length - 2) {
                argumentsArray[i] = `\"${argumentsArray[i]}\" `;
            } else {
                argumentsArray[i] = `\"${argumentsArray[i]}\", `;
            }

            argumentsString += argumentsArray[i];
        }

        return `You gave me ${argumentsArray.length} arguments and they are ${argumentsString}.`;
    }
}

console.log(anArgument("pigs", "giraffes", "unicorns"));