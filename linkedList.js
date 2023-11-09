// Node class
class Node {
    constructor(value) {
        this.value = value; // The value stored in the node
        this.nextNode = null; // The reference to the next node in the list, initialized as null
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // The first node in the list
        this.length = 0; // The total number of nodes in the list
    }
}

// testing area
const testList = new LinkedList();

console.log(testList);
