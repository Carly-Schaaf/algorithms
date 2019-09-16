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
        this.val = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const oldTail = this.tail;
        const newTail = new Node(val);
        oldTail.next = newTail;
        newTail.next = null;
        this.tail = oldTail;
    }
    // head --> node --> node --> tail --> null

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.head === null && this.tail === null) return null;

        const oldTail = this.tail;
        let newTail;
        while (newTail.next !== oldTail) {
            newTail = newTail.next;
        }
        newTail.next = null;
        this.tail = newTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        const newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        const curr = this.head;
        while (curr !== null) {
            if (curr.val = target) return true;
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
