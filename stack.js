// implement stack data structure in javascript

class Stack {
  constructor() {
    this._top = -1; // pointer
    this._items = []; // items
  }

  // return stack empty status
  isEmpty() {
    return this.top === -1;
  }

  // add element to stack
  push = (value) => {
    this._top++;
    this._items[this._top] = value;

    console.log(value);
  };

  // delete last element in stack
  pop() {
    if (!this.isEmpty()) {
      this._items = this._items.filter((item, index) => index !== this._top);
      this._top--;
    } else throw Error("stack not have any element to delete");
  }

  // return stack length
  length() {
    return this.isEmpty() ? 0 : this._top + 1;
  }

  // return all values in stack as string
  print() {
    console.log(`[ ${this._items.join(" , ")} ]`);
    return this._items;
  }

  // return first item
  peak() {
    if (this.isEmpty()) {
      throw Error("Stack is empty");
    } else {
      console.log(this._items[this._top]);
      return this._items[this._top];
    }
  }

  // search by item
  search(data) {
    const target = this._items.find((item) => item === data);
    console.log(target ? this._items.indexOf(target) : -1);
    return target ? this._items.indexOf(target) : -1;
  }

  // swap last two element
  swap() {
    const fistItem = this._items[this._top];
    const secondItem = this._items[this._top - 1];

    this._items[this._top] = secondItem;
    this._items[this._top - 1] = fistItem;

    this.print();
  }
}

const stackList = new Stack();

stackList.push(10);
stackList.push(20);
stackList.push(30);
stackList.push(40);
stackList.print();
stackList.peak();
stackList.pop();
stackList.print();
stackList.peak();
stackList.search(30);
stackList.swap();
