function binarySearch(arr, left, right, findVal) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);
    let midVal = arr[mid];

    if (findVal > midVal) {
        return binarySearch(arr,mid+1,right,findVal);
    }else if(findVal < midVal){
        return binarySearch(arr,left,mid-1,findVal);
    }else{
        return mid;
    }
}
let arr = [1, 3, 5, 22, 32, 44, 52, 88];
console.log(binarySearch(arr, 0, arr.length - 1, 5))