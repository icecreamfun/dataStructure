class BinarySortTree {

    constructor() {
        this.root = null;
    }

    add(node) {
        if (this.root == null) {
            this.root = node;
        } else {
            this.root.add(node);
        }
    }
    infixOrder() {
        if (this.root != null) {
            this.root.infixOrder();
        } else {
            console.log('二叉排序树为空');
        }
    }

    search(value) {
        if (this.root) {
            return this.root.search(value);
        } else {
            return null;
        }
    }
    searchParent(value) {
        if (this.root) {
            return this.root.searchParent(value);
        } else {
            return null;
        }
    }
    /**
     * 返回以node为根节点的二叉排序树的最小节点的值
     * 删除node 为根节点的二叉排序树的最小节点 
     * @param {*} node 传入的节点(当像二叉排序树的根节点) 
     */
    delRightTreeMin(node) {
        let targetNode = node;
        while (targetNode.left) {
            targetNode = node.left;
        }
        this.delNode(targetNode.value);
        return targetNode.value;
    }

    delNode(value) {
        if (this.root) {
            let targetNode = this.search(value);
            if (!targetNode) {
                return;
            }
            //如果发现当前这棵二叉排序树只有一个节点
            if (!this.root.left && !this.root.right) {
                this.root = null;
                return;
            }
            //找到targer的父节点
            let targetParent = this.searchParent(value);

            //删除的是叶子节点
            if (!targetNode.left && !targetNode.right) {

                if (targetParent.left && targetParent.left.value == value) {
                    targetParent.left = null;
                } else if (targetParent.right && targetParent.right.value == value) {
                    targetParent.right = null;
                }
            } else if (targetNode.left && targetNode.right) { // 删除有两棵子树的节点
                let minVal = this.delRightTreeMin(targetNode.right);
                targetNode.value = minVal;

            } else { // 删除只有一颗子树的节点
                if (targetNode.left) {
                    //如果targetNode是parent的左子节点
                    if (targetParent.left.value == value) {
                        targetParent.left = targetNode.left;
                    } else {
                        //如果targetNode是parent的右子节点
                        targetParent.right = targetNode.left;
                    }
                } else {
                    //如果要删除的targetNode有右子节点
                    if (targetParent.left.value == value) {
                        targetParent.left = targetNode.right;
                    } else {
                        targetParent.right = targetNode.right;
                    }

                }
            }

        } else {
            return;
        }
    }

}
class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    /**
     * 找到要删除的节点 
     * @param {*} value 
     * @returns 
     */
    search(value) {
        if (this.value == value) {
            return this;
        } else if (value < this.value) {
            if (this.left) {
                return this.left.search(value);
            }
            return null;
        } else {
            if (this.right) {
                return this.right.search(value);
            }
            return null;
        }
    }

    /**
     * 找到要删除节点的父节点 
     * @param {*} value 
     * @returns 
     */
    searchParent(value) {
        if ((this.left && this.left.value == value) || (this.right && this.right.value == value)) {
            return this;
        } else if (value < this.value && this.left) {
            return this.left.searchParent(value);
        } else if (value >= this.value && this.right) {
            return this.right.searchParent(value);
        } else {
            return null;
        }
    }

    add(node) {
        if (!node) {
            return;
        }
        if (node.value < this.value) {
            if (this.left == null) {
                this.left = node;
            } else {
                this.left.add(node);
            }
        } else {
            if (this.right == null) {
                this.right = node;
            } else {
                this.right.add(node);
            }
        }
    }

    infixOrder() {
        if (this.left != null) {
            this.left.infixOrder();
        }
        console.log(this.value);
        if (this.right != null) {
            this.right.infixOrder();
        }
    }
}
let arr = [7, 3, 10, 12, 5, 1, 9, 2];
let binarySortTree = new BinarySortTree();
for (let i in arr) {
    binarySortTree.add(new Node(arr[i]));
}
console.log('中序遍历二叉排序树');
binarySortTree.infixOrder();

console.log('测试删除节点');
binarySortTree.delNode(7);
binarySortTree.infixOrder();
