function findMaxAndMin(arr) {
    let max = arr[0]; 
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max: max, min: min };
}

const numbers = [30, 10, 40, 10, 50, 90, 20, 60, 50, 30, 50];
const result = findMaxAndMin(numbers);

console.log(`Maximum value: ${result.max}`);
console.log(`Minimum value: ${result.min}`);


function MaxAndMin(brr){
    return [Math.max(...brr),Math.min(...brr)];
}
let brr=[10,20,30,40,50,60,80];
let [max,min]=MaxAndMin(brr);
console.log(max);
console.log(min);

