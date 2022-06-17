/**
 * implement queue data structure in javascript
 * Queue structure principle is first in last out (FIFO)
 * so push will be from last and pop will be from fist
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
  push = (value) => {
    if (this.isEmpty()) {
      this._rear++;
      this._first++;
    } else if (this._maxLength !== this._items.length + 1) {
      this._rear = (this._rear + 1) % this._maxLength;
    }
    this._items[this._rear] = value;
  };

  // delete last element in queue
  pop() {
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

newQueue.push(10);
newQueue.push(20);
newQueue.push(30);
newQueue.push(40);
newQueue.pop();
newQueue.pop();
newQueue.pop();
newQueue.print();
newQueue.first();
newQueue.rear();
newQueue.search(30);
