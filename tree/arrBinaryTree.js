//编写ArrBinaryTree，实现顺序存储二叉树遍历
class ArrBinaryTree {

    constructor(arr) {
        this.arr = arr;
    }
    //顺序存储二叉树的前序遍历
    preOrder(index = 0) {
        if (!this.arr) {
            console.log('数组为空,不能按照二叉树的前序遍历');
        }
        //输出当前元素
        console.log(this.arr[index]);
        //向左递归遍历
        if (index * 2 + 1 < this.arr.length) {
            this.preOrder(2 * index + 1);
        }
        //向右递归
        if (index * 2 + 2 < this.arr.length) {
            this.preOrder(2 * index + 2);
        }

    }

}
let arr = [1, 2, 3, 4, 5, 6, 7];
let arrBinaryTree = new ArrBinaryTree(arr);
arrBinaryTree.preOrder();