class PatternList {
    #list;
    #capacity;

    getList() {
        return this.#list;
    }

    addToFront(pattern) {
        if (this.#list.length === this.#capacity) {
            console.log('The list has reached it\'s maximum capacity.');
            return;
        } else {
            this.#list.unshift(pattern);
        }
    }
    addToBack(pattern) {
        if (this.#list.length === this.#capacity) {
            console.log('The list has reached it\'s maximum capacity.');
            return;
        } else {
            this.#list.push(pattern);
        }
    }

    removeFromBack() {
        if (this.#list.length === 0) {
            console.log('The list is empty.');
            return;
        } else {
            this.#list.pop();
        }
    }
    removeFromFront() {
        if (this.#list.length === 0) {
            console.log('The list is empty.');
            return;
        } else {
            this.#list.shift();
        }
    }

    appendAtIndex(index, pattern) {
        this.#list[index] = pattern;
    }

    clear() {
        this.#list = [];
    }

    constructor(capacity = 6) {
        this.#list = [];
        this.#capacity = capacity;
    }
}

export default PatternList;
