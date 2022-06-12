/*Complete function warning, accept an array arr and a function func as arguments. 
if the funtion can be used for the array.map(), return "Passed!". If not, return "Failed!".

Examples
arr=[1, 2, 3]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[1, 2, 3]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.toUpperCase()
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2","3"]  func= x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=["1","2","3"]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[[1],[2],[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=[true,false,true]  func = x=>x.toFixed(2)
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x+1
warning(arr,func)  ===  "Passed!"

arr=["1","2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Passed!"

arr=[1,"2",[3]]  func= x=>x.slice()
warning(arr,func)  ===  "Failed!"

arr=[1,"2",[3]]  func= x=>x.noSuchAFunction()
warning(arr,func)  ===  "Failed!"*/

function warning(arr, func) {
    let result = 'Passed!';

    try {
        arr.map((item) => {
            func(item);
        });
    } catch (error) {
        result = 'Failed!';
    }

    return result;
}

const callback = (x) => x.slice();

console.log(warning([1, '2', [3]], callback));
