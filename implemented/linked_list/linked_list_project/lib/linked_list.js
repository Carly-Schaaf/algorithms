// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        this.length += 1;
        const newTail = new Node(val);
        if (this.tail) {
            const oldTail = this.tail;
            oldTail.next = newTail;
        }
        if (!this.head) this.head = newTail;
        this.tail = newTail;
        newTail.next = null;
        return this;
    }
    // head --> node --> node --> tail --> null

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        if (this.tail === null || this.head === null) return null;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        }
        this.length -= 1;
        const oldTail = this.tail;
        let newTail = this.head;
        for (let i = 0; i < this.length; i++) {
            if (newTail.next === oldTail) {
                newTail.next = null;
                this.tail = newTail;
                return oldTail;
            } else {
                newTail = newTail.next;
            }         
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        this.length += 1;
        const newHead = new Node(val);
        if (this.head) {
            newHead.next = this.head
        }
        if (this.tail) {
            newHead.next = this.tail;
        } else {
            this.tail = newHead;
        }
        this.head = newHead;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        const oldHead = Object.assign({}, this.head);
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = this.head.next;
            this.head.next = null;
            this.head = newHead;
        }
        this.length -= 1;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.value === target) return true;
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let node = this.head;
        for (let i = 0; i <= index; i++) {
            if (node === null) return null;
            if (i === index) {
                return node;
            }   
            node = node.next;         
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.head;
        for (let i = 0; i <= index; i++) {
            if (node === null) return false;
            if (i === index) {
                node.value = val;
                return true;
            }
            node = node.next;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let nextNode = this.head;
        let prevNode;
        for (let i = 0; i <= index; i++) {
            if (nextNode === null) return false;
            if (i === index) {
                this.length += 1;
                const newNode = new Node(val);
                newNode.next = nextNode;
                if (prevNode) prevNode.next = newNode;
                if (i === 0) this.head = newNode;
                if (i === this.length) this.tail = newNode;
                return true;
            }
            prevNode = nextNode;
            nextNode = nextNode.next;

        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        let currNode = this.head;
        let prevNode;
        for (let i = 0; i <= index; i++) {
            if (!currNode) return undefined;
            if (i === index) {
                this.length -= 1;
                if (prevNode) prevNode.next = currNode.next;
                if (i === 0) this.head = currNode.next;
                if (i === this.length) {
                 prevNode.next = null;
                 this.tail = prevNode;   
                }
                return currNode;
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

const linkedList = new LinkedList();
linkedList.addToTail('C');
linkedList.addToHead('A');
linkedList.insert(1, 'B');
