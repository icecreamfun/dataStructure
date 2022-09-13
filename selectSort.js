//选择排序
function selectSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j];
                minIndex = j;
            }
        }
        if (i != minIndex) {
            arr[minIndex] = arr[i];
            arr[i] = min;
        }
    }
}

var arr = [33, 22, 53, 2, 1, 244, 536, 3];
selectSort(arr);
console.log(arr)
