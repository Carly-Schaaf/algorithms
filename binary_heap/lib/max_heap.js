class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2)
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return (idx * 2) + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        const parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
            
            this.siftUp(parentIdx);
        }

    }

    insert(val) {
        this.array.push(val);

        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        if (idx === this.array.length - 1) return;

        const leftChildIdx = this.getLeftChild(idx);
        let leftChild = this.array[this.getLeftChild(idx)];

        const rightChildIdx = this.getRightChild(idx);
        let rightChild = this.array[this.getRightChild(idx)];

        if (leftChild === undefined) leftChild = -Infinity;
        if (rightChild === undefined) rightChild = -Infinity;

        if (this.array[idx] < leftChild || this.array[idx] < rightChild) {
            let childIdx;
            if (leftChild > rightChild) {
                childIdx = leftChildIdx;
            } else {
                childIdx = rightChildIdx;
            }
            [this.array[idx], this.array[childIdx]] = [this.array[childIdx], this.array[idx]];
            
            this.siftDown(childIdx);
        }
    }

    deleteMax() {
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();
        const max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};