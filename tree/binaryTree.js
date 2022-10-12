class HeroNode {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.left = null;
        this.right = null;
    }
    //递归删除节点
    //1.如果删除的是叶子节点，则删除垓节点  如果是非叶子节点，则删除该子树
    delNode(no) {
        if (this.left != null && this.left.id == no) {
            this.left = null;
            return;
        }
        if (this.right != null && this.right.id == no) {
            this.right = null;
            return;
        }
        if (this.left != null) {
            this.left.delNode(no);
        }
        if (this.right != null) {
            this.right.delNode(no);
        }
    }


    //前序遍历: 先输出父节点，再遍历左子树和右子树
    preOrder() {
        this.print();
        if (this.left != null) {
            this.left.preOrder();
        }
        if (this.right != null) {
            this.right.preOrder();
        }
    }
    //中序遍历:先遍历左子树，再输出父节点，最后遍历右子树
    infixOrder() {
        if (this.left != null) {
            this.left.infixOrder();
        }
        this.print();
        if (this.right != null) {
            this.right.infixOrder();
        }
    }
    //后续遍历：先遍历左节点，再遍历右节点，最后输出父节点
    postOrder() {
        if (this.left != null) {
            this.left.postOrder();
        }
        if (this.right != null) {
            this.right.postOrder();
        }
        this.print();
    }
    print() {
        console.log(this.id, '-', this.name)
    }

    preOrderSearch(no) {
        if (this.id == no) {
            return this;
        }

        let result;
        if (this.left != null) {
            result = this.left.preOrderSearch(no);
        }
        if (result) {
            return result;
        }
        if (this.right != null) {
            result = this.right.preOrderSearch(no);
        }
        return result;
    }

    infixOrderSearch(no) {
        let result;
        if (this.left != null) {
            result = this.left.infixOrderSearch(no);
        }
        if (result) {
            return result;
        }
        if (this.id == no) {
            return this;
        }
        if (this.right != null) {
            result = this.right.infixOrderSearch(no);
        }
        return result;
    }

    postOrderSearch(no) {
        let result;
        if (this.left != null) {
            result = this.left.postOrderSearch(no);
        }
        if (result) {
            return result;
        }
        if (this.right != null) {
            result = this.right.postOrderSearch(no);
        }

        if (result) {
            return result;
        }
        if (this.id == no) {
            return this;
        }
        return result;
    }
}
class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {
        if (this.root) {
            this.root.preOrder();
        } else {
            console.log('二叉树为空 无法遍历')
        }
    }
    infixOrder() {
        if (this.root) {
            this.root.infixOrder();
        } else {
            console.log('二叉树为空 无法遍历')
        }
    }
    postOrder() {
        if (this.root) {
            this.root.postOrder();
        } else {
            console.log('二叉树为空 无法遍历')
        }
    }

    preOrderSearch(no) {
        if (this.root) {
            return this.root.preOrderSearch(no);
        }
        return null;
    }
    infixOrderSearch(no) {
        if (this.root) {
            return this.root.infixOrderSearch(no);
        }
        return null;
    }
    postOrderSearch(no) {
        if (this.root) {
            return this.root.postOrderSearch(no);
        }
        return null;
    }
    delNode(no) {
        if (this.root) {
            if (this.root.id == no) {
                this.root = null;
            } else {
                this.root.delNode(no);
            }
        }
    }
}


let root = new HeroNode(1, '宋江');
let node2 = new HeroNode(2, '吴用');
let node3 = new HeroNode(3, '卢俊义');
let node4 = new HeroNode(4, '林冲');
let node5 = new HeroNode(5, '关胜');

root.left = node2;
root.right = node3;
node3.right = node4;
node3.left = node5;

let binartTree = new BinaryTree(root);
binartTree.preOrder();//1,2,3,5,4
console.log('-------------')
binartTree.infixOrder();//2,1,5,3,4
console.log('-------------')
binartTree.postOrder();//2,5,4,3,1


console.log(binartTree.preOrderSearch(5));
console.log(binartTree.infixOrderSearch(5));
console.log(binartTree.postOrderSearch(15));

binartTree.delNode(3);
binartTree.preOrder();