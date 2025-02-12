// Sort veggies below by using quick sort
// Use a random element as a pivot

const groceryList = [
    "Apple", "Banana", "Cherry", "Grape", "Kiwi", "mango", "Orange", 
    "Pineapple", "papaya", "watermelon", "Strawberry", "Blueberry", 
    "Raspberry", "blackberry", "avocado", "Pomegranate", "Dragonfruit", 
    "lychee", "Guava", "Peach", "Carrot", "broccoli", "cucumber", 
    "eggplant", "lettuce", "Tomato", "Zucchini", "Potato", "spinach", 
    "Cauliflower", "Bell pepper", "Radish", "onion", "garlic", "Cabbage"
];

function quickSort(arr){
    let n = arr.length;
    if(n <= 1) return arr;
    const pivotIndex = Math.floor(Math.random() * n);
    const pivot = arr[pivotIndex];
    const left = [];
    const right = [];
    for(let i = 0; i < n; i++){
        if(i === pivotIndex) continue;
        if(arr[i].localeCompare(pivot) < 0){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(groceryList));