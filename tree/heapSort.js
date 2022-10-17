//推排序

function heapSort(arr) {
    let temp = 0;
    //将无序序列构建成一个堆，根据升序降序需要选择大顶堆或小顶推
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        ajustHeap(arr, i, arr.length);
    }
    //将堆顶元素与末尾元素交换，将最大元素“沉”到数组末端
    //重新调整结构，使其满足堆定义，然后继续交换堆顶元素与当前末尾元素，反复执行调整+交换步骤，知道整个序列有序
    for (let j = arr.length - 1; j > 0; j--) {
        temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        ajustHeap(arr, 0, j);
    }

}
//功能:完成将以i 对应的非叶子节点的树调整为大顶堆
/**举例 arr = [4,6,8,5,9]  i =1  adjustHeap => 得到[4,9,8,5,6]
 * 如果再次调用ajustHeap 传入的是 i=0=>得到[4,9,8,5,6] => [9,6,8,5,4]
 * 
 * @param {*} arr 待调整的数组 
 * @param {*} i 表示非叶子节点在数组中的索引 
 * @param {*} length 表示对多少个元素继续调整， length 是在逐渐的减少
 */
function ajustHeap(arr, i, length) {

    let temp = arr[i];//先取出当前的值，保存在临时变量
    //开始调整
    //说明

    for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
        if (k + 1 < length && arr[k] < arr[k + 1]) { //说明左子节点的值小于右子节点的值
            k++; //k 指向右子节点   
        }
        if (arr[k] > temp) { //如果子节点大于父节点
            arr[i] = arr[k];//把较大的值赋予给当前节点
            i = k; //i指向k，继续循环比较
        } else {
            break;
        }
    }
    //当for 循环结束后,我们已经将以i 为父节点的树的最大值,放在了最顶（局部）
    arr[i] = temp; //将temp值放到调整后的位置

}
let arr = [4, 6, 8, 5, 9];
heapSort(arr);
console.log(arr);