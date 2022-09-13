var max = 8;
var arr = new Array(max);


function judge(n) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === arr[n] || Math.abs(n - i) == - Math.abs(arr[n] - arr[i])) {
            return false;
        }
    }
    return true;
}

function check(n) {
    if (n === max) {
        print();
        return;
    }
    for (let i = 0; i < max; i++) {
        arr[n] = i;
        if (judge(n)) {
            check(n + 1);
        }
    }
}



function print() {
    for (let i = 0; i < max; i++) {
        process.stdout.write(arr[i] + '')
    }
    console.log()
}

check(0)