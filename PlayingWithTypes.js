/*You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.*/

function typing(param) {
    if (Array.isArray(param)) {
        return (typeof param).toString() + '=[' + param.toString() + ']';
    } else if (typeof param == 'object') {
        let result = '';
        for (const [key, value] of Object.entries(param)) {
            result = (typeof param).toString() + '={"' + key + '":"' + value + '"}'; 
        }
        return result;
    } else if (param === undefined) {
        return 'undefined';
    } else if (typeof param === 'string') {
        return (typeof param).toString() + '="' + param.toString() + '"';
    } else {
        return (typeof param).toString() + '=' + param.toString();
    }
}