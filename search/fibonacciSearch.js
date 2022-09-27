/**
 * 
 * @param {*} arr 
 * @param {*} key 查找
 * @retrun 返回对应的下标，没有就返回-1 
 */
function fibonacciSearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let k = 0;//表示fibonacci分割数值的下标
    let mid = 0;//存放mid值

    let f = fib(20); //得到fibonacci数列

    //获取到fibonacci分割数值的下标

    while (high > f[k] - 1) {
        k++;
    }
    //因为f[k]的值可能大于a的长度,需要构造一个新的数组。
    let temp = Array.from(new Set(arr));

    for (let i = 0; i < (f[k] - arr.length); i++) {
        temp.push(arr[arr.length - 1]);
    }
    while (low <= high) {
        mid = low + f[k - 1] - 1;
        if (key < temp[mid]) {
            high = mid - 1;
            //为什么是k--
            //1.全部元素 =前面的元素+后面的元素
            //2.f[k] = f[k-1] + f[k-2]
            //因为前面又f[k-1]个元素，所以可以继续拆分f[k-1] = f[k-2] + f[k-3]
            //即在f[k-1] 的前面继续查找k--
            //即下次循环mid = f[k-1-1] -1
            k--;
        } else if (key > temp[mid]) {
            //1.全部元素 =前面的元素+后面的元素
            //2.f[k] = f[k-1] + f[k-2]  
            //3.因为后面我们有f[k-2] 所以可以继续拆分f[k-1] = [k-3] +f[k-4]
            //4.即在f[k-2]的前面进行查找k-=2
            //5.即下次循环mid = f[k-1-2]-1;
            low = mid + 1;
            k -= 2;
        } else {
            if (mid <= high) {
                return mid;
            } else {
                return high;
            }
        }
    }
    return -1;
}

//非递归方法得到一个fibonacci数列
function fib(maxSize) {
    let f = [1, 1];
    for (let i = 2; i < maxSize; i++) {

        f.push(f[i - 1] + f[i - 2]);
    }
    return f;
}
let arr = [1, 8, 10, 89, 1000, 1234];
console.log(fibonacciSearch(arr,89));