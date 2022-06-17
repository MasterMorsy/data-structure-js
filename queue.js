/**
 * implement queue data structure in javascript
 * Queue structure principle is first in last out (FIFO)
 * so enqueue will be from last and dequeue will be from fist
 * will use equation [(target + 1) % max queue length] to get index of first or rear
 */

class Queue {
  constructor(maxLength) {
    this._first = -1; // pointer for first item
    this._rear = -1; // pointer for lat item
    this._maxLength = maxLength; // max queue length
    this._items = []; // items
  }

  // return queue empty status
  isEmpty() {
    return this._first === -1;
  }

  // add element to queue
  enqueue = (value) => {
    if (this.isEmpty()) {
      this._rear++;
      this._first++;
    } else if (this._maxLength !== this._items.length + 1) {
      this._rear = (this._rear + 1) % this._maxLength;
    }
    this._items[this._rear] = value;
  };

  // delete last element in queue
  dequeue() {
    if (
      !this.isEmpty() &&
      this._items.length > 1 &&
      this._items.length - 1 !== this._first
    ) {
      this._items[this._first] = "-";
      this._first = (this._first + 1) % this._maxLength;
    } else if (this._items.length === 1) {
      this._first = -1;
      this._rear = -1;
    } else console.log("Queue is finished or empty");
  }

  // return queue length
  length() {
    return this.isEmpty() ? 0 : this._first + 1;
  }

  // return all values in queue as string
  print() {
    console.log(`[ ${this._items.join(" , ")} ]`);
    return this._items;
  }

  // return first item
  first() {
    if (this.isEmpty()) {
      throw Error("queue is empty!");
    } else {
      console.log("first index = ", this._first);
      console.log("first item = ", this._items[this._first]);
      return this._items[this._first];
    }
  }

  // return last item
  rear() {
    if (this.isEmpty()) {
      throw Error("queue is empty!");
    } else {
      console.log("_rear index = ", this._rear);

      console.log("rear item = ", this._items[this._rear]);
      return this._items[this._rear];
    }
  }

  // search by item
  search(data) {
    const target = this._items.find((item) => item === data);
    console.log(target ? this._items.indexOf(target) : -1);
    return target ? this._items.indexOf(target) : -1;
  }
}

const newQueue = new Queue(5);

newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.print();
newQueue.first();
newQueue.rear();
newQueue.search(30);
