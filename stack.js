//

/**
 * implement stack data structure in javascript
 * Create Stack class
 * create and set pointer to 0
 * create storage object
 * Create push method on Stack
 * Create pop method on Stack
 * Create size method on Stack
 * Create print method on Stack
 * Create peek method on Stack
 */

class Stack {
  constructor() {
    this.top = 0; //pointer
    this.storage = {}; //storage
  }

  // add element to storage
  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  // delete last element in storage
  pop() {
    this.top--;
    delete this.storage[this.top];
    return "deleted";
  }

  // return storage length
  length() {
    return this.top - 1;
  }

  // console storage
  print() {
    console.log(this.storage);
  }

  // return last item
  peek() {
    return this.storage[this.top - 1];
  }

  // return storage empty statue
  isEmpty() {
    return this.top === 0 ? true : false;
  }
}

const children = new Stack();
children.push("Mohamed");
children.push("Ali");
children.push("Osama");
children.print();
console.log(children.isEmpty());
