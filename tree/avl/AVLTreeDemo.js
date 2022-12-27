class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    //返回左子树的高度
    leftHeight() {
        if (!this.left) {
            return 0;
        } else {
            return this.left.height();
        }
    }

    rightHeight() {
        if (!this.right) {
            return 0;
        } else {
            return this.right.height();
        }
    }

    //返回以该节点为根节点的树的高度
    height() {
        return Math.max(!this.left ? 0 : this.left.height(), !this.right ? 0 : this.right.height()) + 1;
    }

    //左旋转方法
    leftRotate() {

        //创建新的节点,以当前根节点的值
        let newNode = new Node(this.value);
        //把新的节点的左子树设置成当前节点的左子树
        newNode.left = this.left;
        //把新得节点的右子树设置成当前节点的右子树的左子树
        newNode.right = this.right.left;
        //当前节点的值替换成右字节点的值
        this.value = this.right.value;
        //把当前节点的右子树设置成当前节点右子树的右子树
        this.right = this.right.right;
        //把当前节点的左子树(左子节点)设置成新的节点
        this.left = newNode;
    }

    rightRotate() {
        let newNode = new Node(this.value);
        newNode.right = this.right;
        newNode.left = this.left.right;
        this.value = this.left.value;
        this.left = this.left.left;
        this.right = newNode;
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

        //当添加完一个节点,如果（右子树的高度-左子树高度）> 1 ,左旋转
        if (this.rightHeight() - this.leftHeight() > 1) {
            this.leftRotate();
        }

        if (this.leftHeight() - this.rightHeight() > 1) {
            this.rightRotate();
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

class AVLTree {

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
                    if (targetParent) {
                        //如果targetNode是parent的左子节点
                        if (targetParent.left.value == value) {
                            targetParent.left = targetNode.left;
                        } else {
                            //如果targetNode是parent的右子节点
                            targetParent.right = targetNode.left;
                        }
                    } else {
                        this.root = targetNode.left;
                    }
                } else {
                    if (targetParent) {

                        //如果要删除的targetNode有右子节点
                        if (targetParent.left.value == value) {
                            targetParent.left = targetNode.right;
                        } else {
                            targetParent.right = targetNode.right;
                        }
                    } else {
                        this.root = targetNode.right;
                    }
                }
            }

        } else {
            return;
        }
    }

}

//let arr = [4, 3, 6, 5, 7, 8];
let arr = [10, 12, 8, 9, 7, 6];
let avlTree = new AVLTree();

for (let i in arr) {
    avlTree.add(new Node(arr[i]));
}

avlTree.infixOrder()
console.log('在平衡过后');
console.log('树的高度 ', avlTree.root.height());
console.log('树的左子树高度 ', avlTree.root.leftHeight());
console.log('树的右子树高度 ', avlTree.root.rightHeight())
