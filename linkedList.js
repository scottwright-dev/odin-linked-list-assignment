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
        // Initialize a counter to keep track of the position of the current node index
        let position = 0;
         // Loop until the counter matches the index
         while (position < index) {
            // move to next node
            currentNode = currentNode.nextNode;
            // Increment the position counter
            position++;
         }
    return currentNode;
    }

    // Method to remove last node from the list
    pop() {
        if (this.head === null) { // the list is empty
            return null;
        } else if (this.length === 1) { // the list has only one element
            const poppedValue = this.head.value; // Store the value of the node to return it
            this.head = null; // remove the head
            this.length--; // Decrement list length
            return poppedValue; // return the value of the node that was removed
        } else { // list has more than one element
            let currentNode = this.head;
            let secondToLastNode; // This will keep track of the second-to-last node
             // Iterate to the second-to-last node
             while (currentNode.nextNode !== null) {
                secondToLastNode = currentNode;
                currentNode = currentNode.nextNode;
             }
        // Now currentNode is the last node and secondToLastNode is the second-to-last
        secondToLastNode.nextNode = null; // Remove last node
        this.length--; // Decrement length of the list
        return currentNode.value;
        }
    }

    contains(searchValue) {
        if (this.head === null) { // the list is empty, return false
            return false;
        } 
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === searchValue) { // Check if the current node's value matches the searchValue
                return true;
            } 
            currentNode = currentNode.nextNode; // Move to the next node       
            }
            return false; // If no match is found by the end of the loop, return false.
        }
    
    find(searchValue) {
        if (this.head === null) {
            return null;
        } 
        let currentNode = this.head;
        let currentIndex = 0; // Initialize index counter for tracking position
        while (currentNode !== null) {
            if (currentNode.value === searchValue) { // If search value is found, return the current index
                return currentIndex;
            }
        currentNode = currentNode.nextNode;
        currentIndex++; // Increment index counter 
        }
        return null; // If value not found, return null
    }

    toString() {
        if (this.head === null) { // Check for empty list
            return "List is empty.";
        }
        let currentNode = this.head;
        let string = ""; // Initialize empty string variable 
        while (currentNode !== null) { // Loop until the end of the list
            string += `(${currentNode.value}) -> `; // add current nodes value to string variable
            currentNode = currentNode.nextNode;
        }
        string += "null"; // When the end of the list is reached, append 'null' to indicate end of list.
        return string; // Return completed string
    }

    insertAt(newNodeValue, index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        const newNode = new Node(newNodeValue); 
    
        if (index === 0) { // Inserting at the head
            newNode.nextNode = this.head;
            this.head = newNode;
        } else if (index === this.length) { // Inserting at the end
            this.append(newNodeValue);
        } else { // Inserting at any other position
            let currentNode = this.head;
            let currentPosition = 0;
    
            // Traverse to the node just before the index
            while (currentPosition < index - 1) {
                currentNode = currentNode.nextNode;
                currentPosition++;
            }
    
            // Insert new node
            newNode.nextNode = currentNode.nextNode;
            currentNode.nextNode = newNode;
        }
    
        this.length++; // Increment the length of the list
    }

    removeAt(index) {
        // Validate the index
        if (index < 0 || index >= this.length) {
            return null;
        }
        // Remove from the start
        if (index === 0) {
            this.head = this.head.nextNode; // Move the head to the next node
            this.length--; // Decrement the list length
            return;
        } else {
            // Remove from middle or end positions
            let currentNode = this.head;
            let currentPosition = 0;
    
            // Traverse to the node just before the one to be removed
            while (currentPosition < index - 1) {
                currentNode = currentNode.nextNode; // Move to the next node in the list
                currentPosition++;  // Increment position counter to keep track of position in list
            }
    
            // Check if its not removing the last node
            if (currentNode.nextNode != null) {
                currentNode.nextNode = currentNode.nextNode.nextNode; // Adjust pointer to remove the desired node
            } else {
                currentNode.nextNode = null; // If it's the last node, set nextNode to null
            }
            // Update list length
            this.length--;
        }
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

const poppedValue = testList.pop();
console.log(`Popped value: ${poppedValue}`);

console.log('List after one pop:', testList);
console.log('length of list after pop:', testList.getSize());
console.log('Tail node after one pop is:', testList.getTail() ? testList.getTail().value : 'None');

console.log('List contains 3:', testList.contains(3)); // true
console.log('List contains 99:', testList.contains(9)); // false

// Testing find method
const valueToFind = 3;
const expectedIndexForFind = 2; // 3 is at index 2
const actualIndexForFind = testList.find(valueToFind);
console.log(`Expected index for value ${valueToFind}: ${expectedIndexForFind}, Actual: ${actualIndexForFind}`);

// Test toString method
console.log('test to string method:', testList.toString());

// Testing insertAt method
testList.insertAt(15, 0); // Insert 15 at the start (index 0)
console.log('List after inserting 15 at the start:', testList.toString());
console.log(`Expected head node value: 15, Actual: ${testList.getHeadNode().value}`);
// Insert a node in the middle of the list
testList.insertAt(20, 3); // Assuming you want to insert 20 at index 3
console.log('List after inserting 20 at index 3:', testList.toString());
console.log(`Expected value at index 3: 20, Actual: ${testList.at(3).value}`);
// Insert a node at the end of the list
testList.insertAt(25, testList.getSize()); // Insert 25 at the end
console.log('List after inserting 25 at the end:', testList.toString());
console.log(`Expected tail node value: 25, Actual: ${testList.getTail().value}`);

// Testing removeAt method
testList.removeAt(0); // Remove head node
console.log('List after removing head:', testList.toString());
console.log(`Expected head node value: 1, Actual: ${testList.getHeadNode().value}`);

testList.removeAt(2); // Remove a node from middle of the list
console.log('List after removing a middle node:', testList.toString());
console.log(`Value at index 2 after removal: ${testList.at(2).value}`);

testList.removeAt(testList.getSize() - 1); // Remove last node
console.log('List after removing the last node:', testList.toString());
console.log('Tail after removal is:', testList.getTail() ? testList.getTail().value : 'None');
console.log('Total length of list after removals:', testList.getSize());
