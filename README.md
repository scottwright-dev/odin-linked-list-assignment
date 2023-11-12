# Odin Project Linked List Assignment

My solution to the [Linked List Assignment](https://www.theodinproject.com/lessons/javascript-linked-lists#solutions) from the Odin Project curriculum.

## Assignment

The task is to create a linked list data structure in vanilla JavaScript. This exercise aims to help understand the fundamental principles of a linked list. Linked lists are an alternative to standard arrays in scenarios where dynamic data manipulation is key, particularly when it comes to adding or removing elements efficiently.

## Linked List Structure

A linked list is a linear collection of data elements, known as 'nodes'. Each node points to the next one in the sequence. This connection is established through 'pointers'.
Every node in a linked list contains two key components:

- **Data:** The actual value stored in the node.
  <br>
- **Link/Pointer:** A reference to the next node in the list.
  <br>

The list begins with a "head node," the entry point to the list, and concludes with a "tail node," which marks the end.

## Features

- **append(value)** - Adds a new node containing `value` to the end of the list.
- **prepend(value)** - Adds a new node containing `value` to the start of the list.
- **size** - Returns the total number of nodes in the list.
- **head** - Returns the first node in the list.
- **tail** - Returns the last node in the list.
- **at(index)** - Returns the node at the given index.
- **pop** - Removes the last element from the list.
- **contains(value)** - Returns `true` if the passed-in value is in the list; otherwise, returns `false`.
- **find(value)** - Returns the index of the node containing `value`, or `null` if not found.
- **toString** - Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format is: `( value ) -> ( value ) -> ( value ) -> null`.
- **insertAt(value, index)** - Inserts a new node with the provided `value` at the given `index`.
- **removeAt(index)** - Removes the node at the given `index`.
