class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head;
  tmp;

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tmp = node;
    } else {
      this.tmp = this.head;
      while (this.tmp.next) {
        this.tmp = this.tmp.next;
      }
      this.tmp.next = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    this.tmp = this.head;
    let counter = this.head ? 1 : 0;
    while (this.tmp.next) {
      this.tmp = this.tmp.next;
      counter++;
    }
    return counter;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    this.tmp = this.head;
    while (this.tmp.next) {
      this.tmp = this.tmp.next;
    }
    return this.tmp.value;
  }

  at(index) {
    const size = this.size();
    if (index >= size) {
      throw new Error('Index is larger than list size.');
    }
    this.tmp = this.head;
    let position = 0;
    while (this.tmp.next && position < index) {
      this.tmp = this.tmp.next;
      position++;
    }
    return this.tmp.value;
  }

  pop() {
    this.tmp = this.head;
    while (this.tmp.next.next) {
      this.tmp = this.tmp.next;
    }
    const node = this.tmp.next;
    this.tmp.next = null;
    return node.value;
  }

  contains(value) {
    this.tmp = this.head;
    if (this.tmp.value === value) return true;
    while (this.tmp.next) {
      this.tmp = this.tmp.next;
      if (this.tmp.value === value) return true;
    }
    return false;
  }

  find(value) {
    this.tmp = this.head;
    let index = 0;
    if (this.tmp.value === value) return index;
    while (this.tmp.next) {
      this.tmp = this.tmp.next;
      index++;
      if (this.tmp.value === value) return index;
    }
    return false;
  }

  toString() {
    let string = '';
    this.tmp = this.head;
    string += `( ${this.tmp.value} ) -> `;
    while (this.tmp.next) {
      this.tmp = this.tmp.next;
      string += `( ${this.tmp.value} ) -> `;
    }
    string += 'null';
    return string;
  }

  insertAt(value, index) {
    const size = this.size();
    if (index >= size) {
      throw new Error('Index is larger than list size.');
    }

    const node = new Node(value);
    this.tmp = this.head;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let position = 0;
    while (this.tmp.next && position < index - 1) {
      this.tmp = this.tmp.next;
      position++;
    }
    node.next = this.tmp.next;
    this.tmp.next = node;
  }

  removeAt(index) {
    const size = this.size();
    if (index >= size) {
      throw new Error('Index is larger than list size.');
    }

    this.tmp = this.head;
    if (index === 0) {
      this.head = this.tmp.next;
      return this.tmp.value;
    }

    let position = 0;
    while (this.tmp.next && position < index - 1) {
      this.tmp = this.tmp.next;
      position++;
    }
    const node = this.tmp.next;
    this.tmp.next = this.tmp.next.next;
    return node.value;
  }
}

const x = new LinkedList();
x.append('🔵');
x.append('🔴');
x.append('🟢');
x.append('🟠');
console.log(x.removeAt(0));
console.log(x.toString());
