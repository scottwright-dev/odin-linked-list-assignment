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
}

// testing area
const testList = new LinkedList();

testList.append(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.prepend(0);
console.log(testList);
