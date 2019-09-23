// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (idx === array.length - 1) return true;
    // heap property will be true if each part is bigger than each of its children
    // which has to be true for each child --> requires touching each node --> O(n)

    const leftChildIdx = idx * 2;
    let leftChild = array[idx * 2];

    const rightChildIdx = (idx * 2) + 1;
    let rightChild = array[(idx * 2) + 1];

    if (leftChild === undefined) leftChild = -Infinity;
    if (rightChild === undefined) rightChild = -Infinity;

    if (array[idx] < leftChild || array[idx] < rightChild) {
        return false;
    }

    let leftHeap = null;
    let rightHeap = null; 

    if (leftChild !== -Infinity) {
        leftHeap = isMaxHeap(array, leftChildIdx);
    }

    if (rightChild !== -Infinity) {
        rightHeap = isMaxHeap(array, rightChildIdx);
    }

    if (leftHeap === false) return false;
    if (rightHeap === false) return false;

    return true;
}


module.exports = {
    isMaxHeap
};