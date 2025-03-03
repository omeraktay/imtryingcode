// Sort numbers below by using quick sort
// Use the last element as a pivot

const numbers = [
    12, 87, 203, 45, 176, 9, 234, 56, 147, 89,
    210, 33, 199, 140, 78, 251, 120, 17, 63, 92,
    222, 135, 41, 201, 30, 157, 75, 244, 189, 5,
    98, 215, 66, 143, 180
    ];

function quickSort(arr){
    let n = arr.length;
    if(n <= 1) return arr;
    let pivot = arr[n - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < n - 1; i++){
        if(arr[i] < pivot){
           left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(numbers));