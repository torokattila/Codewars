/*Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string 
written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.*/

function findScreenHeight(width, ratio) {
    ratio = ratio.replace(":", "/");
    const ratioNumber = eval(ratio);
    const height = Math.round(width / ratioNumber); 

    return `${width}x${height}`;
}

console.log(findScreenHeight(1280, "16:9"));