class Emp {

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.next = null;
    }
}


class EmpLinkedList {

    constructor() {
        this.head = null;
    }

    add(emp) {
        if (this.head == null) {
            this.head = emp;
            return;
        }

        let curEmp = this.head;
        while (true) {
            if (curEmp.next == null) {
                break;
            }
            curEmp = curEmp.next;
        }
        curEmp.next = emp;
    }

    list() {
        if (this.head == null) {
            console.log('链表为空');
            return;
        }
        let curEmp = this.head;
        while (true) {
            console.log('id =', curEmp.id, ' name = ', curEmp.name);
            if (curEmp.next == null) {
                break;
            }
            curEmp = curEmp.next;
        }
    }

    findById(id) {
        if (this.head == null) {
            console.log('链表为空');
            return null;
        }

        let curEmp = this.head;
        while (true) {
            if (curEmp.id == id) {
                break;
            }
            if (curEmp.next == null) {
                curEmp = null;
                break;
            }
            curEmp = curEmp.next;
        }
        return curEmp;
    }

}

class HashTab {
    constructor(size) {
        this.maxSize = size;
        this.empLinkedListArray = new Array(size);
        for (let i = 0; i < size; i++) {
            this.empLinkedListArray[i] = new EmpLinkedList();
        }
    }

    add(emp) {
        this.empLinkedListArray[this.hashFun(emp.id)].add(emp);
    }
    hashFun(id) {
        return id % this.maxSize
    }
    list() {
        for (let i = 0; i < this.maxSize; i++) {
            this.empLinkedListArray[i].list();
        }
    } 
    findEmpById(id) {
        return this.empLinkedListArray[this.hashFun(id)].findById(id);
    }
}

let emp = new Emp(1, 'zs');
let hashTab = new HashTab(5);
hashTab.add(emp);
hashTab.list();
let emp1 = hashTab.findEmpById(1);
console.log('emp1 ',emp1)
