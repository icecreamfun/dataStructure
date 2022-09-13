var arr = new Array(8)
for (let i = 0; i < arr.length; i++) {

    arr[i] = new Array(7).fill(0);
    if (i === 0 || i === 7) {
        for (let j = 0; j < 7; j++) {
            arr[i][j] = 1;
        }
    }

}
//左右全部设置为1
for (let i = 0; i < 8; i++) {
    arr[i][0] = 1;
    arr[i][6] = 1;
}
//设置挡板
arr[3][1] = 1;
arr[3][2] = 1;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
}
console.log('--------------------')
setWay2(arr, 1, 1);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
}

//使用递归回溯给小球找路
function setWay(arr, i, j) {
    if (arr[6][5] === 2) {//通路已经找到ok
        return true;
    } else {
        if (arr[i][j] === 0) { //如果当前这个点还没有走过
            //按照策略 下-右-上-左
            arr[i][j] = 2; //假设该点可以走通
            if (setWay(arr, i + 1, j)) { //向下走
                return true;
            } else if (setWay(arr, i, j + 1)) {
                return true;
            } else if (setWay(arr, i - 1, j)) {
                return true;
            } else if (setWay(arr, i, j - 1)) {
                return true;
            } else {
                arr[i][j] = 3;
                return false;
            }
        } else {
            return false;
        }
    }
}


function setWay2(arr, i, j) {
    if (arr[6][5] === 2) {
        return true;
    } else {
        if (arr[i][j] === 0) {
            arr[i][j] = 2;
            if (setWay(arr, i + 1, j)) {
                return true;
            } else if (setWay(i, j + 1)) {
                return true;
            } else if (setWay(arr, i - 1, j)) {
                return true;
            } else if (setWay(arr, i, j - 1)) {
                return true;
            } else {
                arr[i][j] = 3;
                return false;
            }
        } else {
            return false;
        }
    }
}