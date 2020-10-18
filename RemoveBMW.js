/*Your task is to write a function that takes one parameter str that MUST be a string and removes 
all capital and small letters B, M and W. If data of the wrong data type was sent as a parameter 
the function must throw an error (IllegalArgumentException in Groovy): "This program only works for text."*/

function removeBMW(str) {
    return typeof str != 'string' ? (function(){throw new Error("This program only works for text.")}()) : str.replace(/b|m|w|B|M|W/g, ''); 
}

console.log(removeBMW(2));