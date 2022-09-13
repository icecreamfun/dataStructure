//希尔排序位移法
var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0]
let temp = 0;
function shellSort(arr) {
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            //遍历各组中所有的元素(共gap组) 步长gap
            for (let j = i - gap; j >= 0; j -= gap) {
                if (arr[j] > arr[j + gap]) {
                    temp = arr[j];
                    arr[j] = arr[j + gap];
                    arr[j + gap] = temp;
                }
            }
        }
    }
}

shellSort(arr);
console.log(arr);

/*
for (let i = 5; i < arr.length; i++) {

    for (let j = i - 5; j >= 0; j -= 5) {

        if (arr[j] > arr[j + 5]) {

            temp = arr[j];
            arr[j] = arr[j + 5];
            arr[j + 5] = temp;
        }
    }
}
console.log(arr);
for (let i = 2; i < arr.length; i++) {

    for (let j = i - 2; j >= 0; j -= 2) {

        if (arr[j] > arr[j + 2]) {

            temp = arr[j];
            arr[j] = arr[j + 2];
            arr[j + 2] = temp;
        }
    }
}
console.log(arr);
for (let i = 1; i < arr.length; i++) {

    for (let j = i - 1; j >= 0; j -= 1) {

        if (arr[j] > arr[j + 1]) {

            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);
*/