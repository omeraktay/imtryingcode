// Sort numbers below by using bubble sort
// Use optimized bubble sort

const numbers = [
    12, 87, 203, 45, 176, 9, 234, 56, 147, 89,
     210, 33, 199, 140, 78, 251, 120, 17, 63, 92,
     222, 135, 41, 201, 30, 157, 75, 244, 189, 5,
     98, 215, 66, 143, 180
    ];

    function bubbleSort(arr){
        let n = arr.length;
        let swapped = false
        for(let i = 0; i < n - 1; i++){
            for(let j = 0; j < n - i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true
                }
            }
            if(!swapped){
                break;
            }
        } 
        return arr;
    }

    console.log(`Sorted array of numbers: ${bubbleSort(numbers)}`);