//线索化二叉树
class HeroNode {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.left = null;
        this.right = null;

        //说明 leftType为0 表示指向的是左子树   为1 表示指向的是前驱节点
        //说明 rightType为0 表示指向的是右子树   为1 表示指向的是后继节点
        this.leftType= 0;
        this.rightType = 0;
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
            result = this.left.postOrderSearch(no);;
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

//定义ThreadedBinaryTree 实现了线索化二叉树
class ThreadedBinaryTree {
    constructor(root) {
        this.root = root;
        //为了实现线索化，需要创建要给指向当前节点得前驱节点的指针
        //在递归进行线索化时，pre总是保留前一个节点
        this.pre;
    }
    //遍历线索化二叉树
    threadedList() {
        let node = this.root;
        while (node) {
            //循环找到leftType ==1的节点 第一个找到就是8节点
            //后面随着遍历而变化,因为当leftType == 1时，说明该节点是按照线索化
            //处理后的有效节点
            while (node.leftType === 0) {
                node = node.left;
            }
            //打印当前这个节点
            console.log(node.id);
            //如果当前节点的右指针指向的是后继节点，就一直输出
            while (node.rightType === 1) {
                node = node.right;
                console.log(node.id);
            }
            //替换这个遍历的节点
            node = node.right;
        }
    }

    //编写对二叉树进行中序线索化的方法
    /**
     *
     * @param {*} node  就是当前需要线索化的节点
     */
    threadedNodes(node) {

        //node为null不能线索化
        if (!node) {
            return;
        }
        //1.先线索化左子树
        this.threadedNodes(node.left);
        //2.线索化当前节点
        //处理当前节点的前驱节点
        //以8节点来理解
        //8节点的.left = null 8节点的.leftType = 1
        if (!node.left) {
            //让当前节点的左指针指向前驱结点
            node.left = this.pre;
            //修改当前节点的左指针的类型，指向前驱节点
            node.leftType = 1;
        }
        //处理后继节点
        if (this.pre && !this.pre.right) {
            //让前驱节点的右指针指向当前节点
            this.pre.right = node;
            //修改前驱节点的右指针类型
            this.pre.rightType = 1;
        }
        // !!!每处理一个节点后，让当前节点是下一个节点的前驱节点
        this.pre = node;

        //3.线索化右子树
        this.threadedNodes(node.right);


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
    //删除节点
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
let root = new HeroNode(1, 'tom');
let node2 = new HeroNode(3, 'jack');
let node3 = new HeroNode(6, 'smith');
let node4 = new HeroNode(8, 'mary');
let node5 = new HeroNode(10, 'king');
let node6 = new HeroNode(14, 'dim');


root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;

let threadedBinaryTree = new ThreadedBinaryTree();
threadedBinaryTree.root = root;
threadedBinaryTree.threadedNodes(threadedBinaryTree.root);
//测试 以10节点测试

console.log(node5.left.id);
console.log(node5.right.id);

threadedBinaryTree.threadedList();
