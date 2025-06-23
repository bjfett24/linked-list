class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        ++this.length;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        ++this.length;
        return this;
    }

    at(index) {
        if (this.length > index) {
            if (index === 0) {
                return this.head;
            } else {
                return this.at(index - 1).next;
            }
        } else {
            return 'ERROR: Index not in list.';
        }
    }

    pop() {
        if (this.length > 1) {        
            const newTail = this.at(this.length - 2);
            this.at(this.length - 2).next = null;
            this.tail = newTail;
            this.length--;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            console.log('ERROR: There is nothing to pop.')
        }

    }

    contains(value) {
        let result = false;
        for (let i = 0; i < this.length; i++) {
            if (this.at(i).value === value) {
                 result = true;
            }
        }
        return result;
    }

    find(value) {
        let index = null
        for (let i = 0; i < this.length; i++) {
            if (this.at(i).value === value) {
                index = i;
            }
        }
        return index;
    }

    toString() {
        let str = '';
        for (let i = 0; i < this.length; i++) {
            if (i !== this.length - 1) {
                str += `( ${this.at(i).value} ) -> `;
            } else {
                str += `( ${this.at(i).value} ) -> null`;
            }
        }
        return str;
    }

    insertAt(value, index) {
        if (index <= this.length) {
            const newNode = new Node(value);
            if (index > 0 && index < this.length) {
                newNode.next = this.at(index);
                this.at(index - 1).next = newNode;
                this.length++;
            } else if (index == this.length) {
                this.append(value);
            } else {
                this.prepend(value);
            }
            
        } else {
            console.log("ERROR: Index is not in range.")
        }
    }


    removeAt(index) {

        if (index >= this.length) {
            console.log("Error: Cannot remove nonexistent index.")
        } else {
            if (index <= 0) {
                this.head = this.head.next;
                this.length--;
            } else {
                if (this.tail == this.at(index)) {
                    this.pop();
                } else {
                    const newNext = this.at(index).next;
                    // console.log(newNext);
                    // console.log(this.at(index - 1));
                    this.at(index - 1).next = newNext;
                    this.length--;
                }
            }
            
        }
    }

    removeVal(value) {
        const index = this.find(value);
        this.removeAt(index);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}








