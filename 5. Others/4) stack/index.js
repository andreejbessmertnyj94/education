class Stack extends Array {
  constructor() {
    super();
    this.array = [];
  }

  get size() {
    return this.array.length;
  }

  isEmpty() {
    return !this.array.length;
  }

  print() {
    return `[${this.array.join(", ")}]`;
  }

  pop() {
    if (this.isEmpty()) {
      throw "Stack is empty!";
    }
    this.array.pop();
    return this;
  }

  push(...items) {
    this.array.push(...items);
    return this;
  }
}

window.Stack = Stack;

export default Stack;
