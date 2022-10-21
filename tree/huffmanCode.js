//haffman编码
function getNodes(str) {
    let nodeArr = [];
    let map = {};
    for (let i in str) {
        if (!map[str[i].charCodeAt()]) {
            map[str[i].charCodeAt()] = 1;
        } else {
            let count = map[str[i].charCodeAt()];
            map[str[i].charCodeAt()] = ++count;
        }
    }

    for (let i in map) {
        let node = new Node(i, map[i]);
        nodeArr.push(node);
    }
    return nodeArr;
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
        console.log(this.data);
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
node.preOrder();
