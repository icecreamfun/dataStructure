//haffman编码
function getNodes(str) {
    let nodeArr = [];
    let map = {};
    for (let i in str) {
        if (!map[str[i].charCodeAt()]) {
            map[str[i].charCodeAt()] = 1;
        } else {
            let count = map[str[i].charCodeAt()];
            map[str[i].charCodeAt()] = count + 1;
        }
    }

    for (let i in map) {
        let node = new Node(i, map[i]);
        nodeArr.push(node);
    }
    return nodeArr;
}
/**
 * 功能:将传入的node节点 的所有叶子节点的赫夫曼编码得到，放入到集合中
 * @param {*} node 传入节点 
 * @param {*} code 路径:左子节点是0 右子节点1 
 * @param {*} str 用户拼接路径 
 */
function getCodes(node, code, str) {
    let str2 = str;
    str2 += code;
    if (node) {
        if (!node.data) {
            getCodes(node.left, '0', str2);
            getCodes(node.right, '1', str2);
        } else {
            huffmanCodes[node.data] = str2;
        }
    }
}

function createHuffmanTree(arr) {
    arr.sort(function (a, b) {
        return a.weight - b.weight;
    })

    while (arr.length > 1) {
        let leftNode = arr[0];
        let rightNode = arr[1];
        let parentNode = new Node(null, leftNode.weight + rightNode.weight);
        parentNode.left = leftNode;
        parentNode.right = rightNode;

        arr.shift();
        arr.shift();
        arr.push(parentNode);
    }
    return arr[0];
}

class Node {

    constructor(data, weight) {
        this.data = data;
        this.weight = weight;
        this.left = null;
        this.right = null;
    }

    preOrder() {
        console.log(this.data, this.weight);
        if (this.left != null) {
            this.left.preOrder();
        }
        if (this.right != null) {
            this.right.preOrder();
        }
    }
}

let content = 'i like like like java do you like a java';
console.log(getNodes(content));

let node = createHuffmanTree(getNodes(content));
//node.preOrder();

let huffmanCodes = {};
let str = '';
getCodes(node, '', str);

console.log(huffmanCodes);
