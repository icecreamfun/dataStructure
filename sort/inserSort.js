function insertSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let insertIndex = i - 1;
        let insertVal = arr[i];

        while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--;
        }
        arr[insertIndex + 1] = insertVal;
    }
}

function insert2(arr) {

    for (let i = 1; i < arr.length; i++) {
        let insertVal = arr[i];
        let insertIndex = i - 1;
        while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
            arr[insertIndex + 1] = arr[insertIndex];
            insertIndex--;
        }
        arr[insertIndex + 1] = insertVal;
    }
}

var arr = [101, 100, 119, 1];
insert2(arr);
console.log(arr);


//let insert = arr[1];
//let insertindex = 0;
//while (insertindex >= 0 && insert < arr[insertindex]) {
    //arr[insertindex + 1] = arr[insertindex];
    //insertindex--;
//}
//arr[insertindex + 1] = insert;

//console.log(arr)