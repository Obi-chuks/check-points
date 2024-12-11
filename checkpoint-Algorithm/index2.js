function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Pick the current element
        let current = arr[i];
        let j = i - 1;

        // Shift elements of the sorted segment (0 to i-1) to the right
        // if they are greater than the current element
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element at the correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
let array = [8, 3, 5, 1, 9, 6];
console.log("Original Array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
