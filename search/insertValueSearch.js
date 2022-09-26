//插值查找
function insertValueSearch(arr, left, right, findVal) {
if (left > right || findVal < arr[0] || findVal > arr[arr.lengh - 1]) {
        return -1;
    }
    let mid = left + (right - left) * Math.floor((findVal - arr[left]) / (arr[right] - arr[left]));
    let midVal = arr[mid];
    if (findVal > midVal) {
        return insertValueSearch(arr, mid + 1, right);
    } else if (findVal < midVal) {
        return insertValueSearch(arr, left, mid - 1);
    } else {
        return mid;
    }
}

let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}

console.log(insertValueSearch(arr,0,arr.length-1,99));
