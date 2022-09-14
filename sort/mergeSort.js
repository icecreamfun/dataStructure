//分+合方法
function mergeSort(arr, left, right, temp) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2); //中间索引
        //向左递归进行分解
        mergeSort(arr, left, mid, temp);
        //向右递归进行分解
        mergeSort(arr, mid + 1, right, temp);
        //合并
        merge(arr, left, mid, right, temp);
    }
}

/** 合并的方法
 * @param {*} arr 排序的原始数组 
 * @param {*} left 左边有序序列的初始索引 
 * @param {*} mid 中间索引 
 * @param {*} right 右边索引 
 * @param {*} temp 做中转的数组 
 */
function merge(arr, left, mid, right, temp) {
    let i = left; //初始化i，左边有序序列的初始索引
    let j = mid + 1; // 初始化j,右边有序序列的初始索引
    let t = 0; //指向temp数组的当前索引

    //1.先把左右两边(有序)的数据按照规则填充到temp数组，直到左右两边的有序序列有一边处理完毕为止
    while (i <= mid && j <= right) {
        //如果左边的有序序列的当前元素，小于等于右边有序序列的当前元素 将左边的当前元素填充到temp数组 然后t++ i++
        if (arr[i] <= arr[j]) {
            temp[t] = arr[i];
            t += 1;
            i += 1;
        } else { //反之,将右边的当前元素填充到temp数组  
            temp[t] = arr[j]
            t += 1;
            j += 1;

        }
    }
    //2.把剩余数据的一边的数据依次全部填充到temp
    while (i <= mid) {  //左边的有序序列还有剩余的元素,全部填充到temp
        temp[t] = arr[i];
        t += 1;
        i += 1;
    }
    while (j <= right) { //右边的有序序列还有剩余的元素,全部填充到temp 
        temp[t] = arr[j];
        t += 1;
        j += 1;
    }
    //3.将temp数组的元素拷贝到arr
    t = 0;
    let tempLeft = left;
    //第一次合并tempLeft = 0,right =1   // 第二次  tempLeft = 2 ,right = 3  // 第三次 tempLeft = 0 , right=3  //最后一次 tempLeft = 0 right =7 
    while (tempLeft <= right) {
        arr[tempLeft] = temp[t];
        t += 1;
        tempLeft += 1;
    }
}

let arr = [8, 4, 5, 7, 1, 3, 6, 2];
let temp = new Array(arr.length).fill('');//归并排序需要一个额外的空间
mergeSort(arr, 0, arr.length - 1, temp);
console.log(arr);
