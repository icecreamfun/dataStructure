//快速排序
function quickSort(arr, left, right) {
    let l = left; //左下标
    let r = right;//右下标
    //pivot中轴值
    let pivot = arr[Math.floor((left + right) / 2)];
    let temp = 0;

    //while循环的目的是让比pivot值小放到左边 比pivot值大的放到右边
    while (l < r) {

        //在pivot的左边一直找,找到大于等于pivot值，才退出
        while (arr[l] < pivot) {
            l += 1;
        }
        //在pivot的右边一直找,找到小于等于pivot值,才退出
        while (arr[r] > pivot) {
            r -= 1;
        }
        //如果l>=r 说明pivot左右两的值，已经按照左边全部是小于等于pivot值，右边全部是大于等于pivot值
        if (l >= r) {
            break;
        }
        //交换 
        temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        //如果交换完后，发现这个arr[l] == pivot值  r--,前移(防止死循环)
        if (arr[l] == pivot) {
            r -= 1;
        }
        //如果交换完后，发现这个arr[r] == pivot值  l++,后移(防止死循环)
        if (arr[r] == pivot) {
            l += 1;
        }

    }
    //如果l==r 必须l++,r--,否则为出现栈溢出
    if (l == r) {
        l += 1;
        r -= 1;
    }
    //向左递归
    if (left < r) {
        quickSort(arr, left, r);
    }
    //向右递归
    if (right > l) {
        quickSort(arr, l, right);
    }

}

let arr = [-9, 78, 0, 23, -567, 70]
quickSort(arr, 0, arr.length - 1);
console.log(arr);

