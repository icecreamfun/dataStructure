function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


var arr= [33, 22, 53, 2, 1, 244, 536, 3];
bubbleSort(arr);
console.log(arr);