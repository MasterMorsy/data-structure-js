/**
 * implement stack data structure in javascript
 * Create Stack class
 * create and set pointer to 0
 * create storage object
 * Create push method on Stack
 * Create pop method on Stack
 * Create length method on Stack
 * Create print method on Stack
 * Create peek method on Stack
 * Create swap method on Stack
 */

class Stack {
  constructor() {
    this._top = 0; //pointer
    this._storage = {}; //storage
  }

  // add element to storage
  push = value => {
    this._storage[this._top] = value;
    this._top++;
  };

  // delete last element in storage
  pop = () => {
    this._top--;
    if (this._top > 0) delete this._storage[this._top];
    else throw new Error("Storage not have any element to delete");
  };

  // return storage length
  length = () => {
    return this._top - 1;
  };

  // return all values in storage as string
  print = () => {
    return Object.values(this._storage).join(" - ");
  };

  // return last item
  peek = () => {
    return this._storage[this._top - 1];
  };

  // return storage empty statue
  isEmpty = () => {
    return this._top === 0 ? true : false;
  };

  // swap last two element
  swap = () => {
    const lastElement = this._storage[this._top - 1];
    const lastBeforeElement = this._storage[this._top - 2];

    this._storage[this._top - 1] = lastBeforeElement;
    this._storage[this._top - 2] = lastElement;
  };
}
