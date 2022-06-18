/**
 * implement single linked list data structure in javascript
 * forward single linked list scenario will be implemented as a stack (LIFO)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  push(item) {
    let newNode = new Node(item);

    newNode.next = this.isEmpty() ? null : this.head;
    this.head = newNode;

    this.length++;
  }

  pop() {
    if (!this.isEmpty()) {
      this.head = this.head.next;
      this.length--;
    } else {
      throw Error("linkedlist is empty!");
    }
  }

  peak() {
    if (!this.isEmpty()) {
      console.log("peak is ", this.head.data);
      return this.head.data;
    } else throw Error("linkedlist is empty!");
  }

  length() {
    return this.length;
  }

  print() {
    if (!this.isEmpty()) {
      let temp = this.head;

      for (let i = 0; i < this.length; i++) {
        console.log(temp.data);
        temp = temp.next;
      }
    } else {
      console.log(null);
    }
  }
}

const newLinkedList = new SingleLinkedList();

newLinkedList.push(10);
newLinkedList.push(20);
newLinkedList.push(30);
newLinkedList.push(40);
newLinkedList.pop();
newLinkedList.peak();
newLinkedList.print();
