function radixSort(arr) {
    //得到数组中最大的数的位数
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    let maxLength = (max + '').length;
    console.log(maxLength);

    //定义一个二维数组，表示10个桶，每个桶就是一个一维数组
    //1.二维数组包含10个一维数组
    //2.为了防止在放入数的时候，数据溢出，则每个一维数组（桶） 大小定为arr.length
    //3.基数排序是使用空间换时间的经典算法
    let bucket = [];
    for (let i = 0; i <= 9; i++) {
        bucket.push(new Array(arr.length));
    }

    //为了记录每个桶中，实际存放了多少个数据,我们定义一个一维数组来记录各个桶的每次放入的数据个数
    //比如 bucketElementCounts[0] 记录就是bucket[0] 桶放入数据的个数
    let bucketElementCounts = new Array(10).fill(0);
    for (let i = 0, n = 1; i < maxLength; i++, n *= 10) {

        for (let j = 0; j < arr.length; j++) {
            //取出每个元素的对应位的值
            let digitOfElement = Math.floor(arr[j] / n) % 10;
            //放入到对应的桶中
            bucket[digitOfElement][bucketElementCounts[digitOfElement]] = arr[j];
            bucketElementCounts[digitOfElement]++;
        }

        let index = 0;
        for (let k = 0; k < bucketElementCounts.length; k++) {
            if (bucketElementCounts[k] != 0) {

                for (let l = 0; l < bucketElementCounts[k]; l++) {
                    arr[index++] = bucket[k][l];
                }
            }
            bucketElementCounts[k] = 0;
        }
        console.log(i+1 +' 轮 end ' + arr)
    }


}
let arr = [53, 3, 542, 748, 14, 214]
// for (let i = 0; i < 8000000; i++) {
//     arr.push(Math.ceil(Math.random()*100000));
// }
console.log('push end')
radixSort(arr);

console.log('end')