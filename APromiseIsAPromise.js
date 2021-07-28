/*Create a resolved javascript Promise that will return 'Hello World!'.*/

function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        resolve("Hello World!")
    });
}

promiseHelloWorld().then(response => {
    console.log(response);
})
