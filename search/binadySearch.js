function binarySearch(arr, left, right, findVal) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);
    let midVal = arr[mid];

    if (findVal > midVal) {
        return binarySearch(arr, mid + 1, right, findVal);
    } else if (findVal < midVal) {
        return binarySearch(arr, left, mid - 1, findVal);
    } else {
        return mid;
    }
}


//查找多个值
function binarySearch2(arr, left, right, findVal) {

    if (left > right) {
        return [];
    }

    let mid = Math.floor((left + right) / 2);
    let midVal = arr[mid];

    if (findVal > midVal) {
        return binarySearch2(arr, mid + 1, right, findVal);
    } else if (findVal < midVal) {
        return binarySearch2(arr, left, mid - 1, findVal);
    } else {
        let resIndexArr = [];
        let temp = mid - 1;
        while (true) {
            if (temp < 0 || arr[temp] != findVal) {
                break;
            }
            resIndexArr.push(temp);
            temp--;
        }

        resIndexArr.push(mid);

        temp = mid + 1;
        while (true) {
            if (temp > arr.length - 1 || arr[temp] != findVal) {
                break;
            }
            resIndexArr.push(temp);
            temp++;
        }
        return resIndexArr;
    }
}


let arr = [1, 3, 5, 22, 32, 44, 52, 88];
console.log(binarySearch(arr, 0, arr.length - 1, 5))

let arr2 = [1, 3, 5, 22, 32, 44, 55, 55, 99, 1112];
console.log(binarySearch2(arr2,0,arr2.length-1,55));
