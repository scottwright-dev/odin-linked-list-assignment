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

    // Method to add a new node to the END of the list
    append(value) {
        const newNode = new Node(value); // Create a new node with the given value

        // If the list is empty, the new node becomes the head of the list
        if (this.length === 0) {
            this.head = newNode;
        } else {
            // If the list is not empty, we need to find the last node
            let currentNode = this.head; // Start at the head of the list
            // Traverse the list until we find the last node (which points to null)
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode; // Move to the next node
            }
            // Once the last node is found, set its nextNode to the new node
            currentNode.nextNode = newNode;
        }
        // Increment the size of the list to reflect the addition of the new node
        this.length++;
    }

    // Method to add a new node to the START of the list
    prepend(value) {
        const newNode = new Node(value);

        // If the list is empty, the new node becomes the head of the list
        if (this.length === 0) {
            this.head = newNode;
        } else {
            // If the list is not empty
            newNode.nextNode = this.head; // Point the new node to the current head
            this.head = newNode; // The new node is now the new head of the list
        }
        // Increment the size of the list to reflect the addition of the new node
        this.length++;
    }
    // method to return the total number of nodes in list
    getSize() {
        return this.length;
    }

      // method to return the head node (the first node in the list)
    getHeadNode() {
        return this.head;
    }
    // Method to find the last node in the list (the tail)
    getTail() {
        // If list is empty return null
        if (this.head === null) {
            return null;
        }
            let currentNode = this.head;
              // Traverse the list until the last node
              while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
              }
        // Return the last node, which is the tail of the list
       return currentNode;
    }
    at(index) {
            // Check if index is valid
        if (index < 0 || index >= this.length) {
            return null;
        }

        // Start at head of list
        let currentNode = this.head;
        // Initialize a counter to keep track of the current node index
        let counter = 0;
         // Loop until the counter matches the index
         while (counter < index) {
            // move to next node
            currentNode = currentNode.nextNode;
            // Increment the counter
            counter++;
         }
    return currentNode;
    }
}

// testing area
const testList = new LinkedList();

testList.append(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.prepend(0);
testList.append(5);
console.log(testList);
console.log('Total length of list:', testList.getSize());
console.log('Head node is:', testList.getHeadNode().value);
console.log('Tail node is:', testList.getTail().value);

const testIndex = 1;
const nodeAtTestIndex = testList.at(testIndex);

console.log(`The value at index ${testIndex} is ${nodeAtTestIndex.value}`);
