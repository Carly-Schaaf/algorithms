function binarySearch(array, target) {
    if (array.length === 0) return false;

    const mid = Math.floor(array.length/2)

    if (array[mid] === target) return true;
    if (target < array[mid]) {
        return binarySearch(array.slice(0, mid), target);
    } else {
        return binarySearch(array.slice(mid + 1, array.length), target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length == 0) return -1;

    const mid = Math.floor(array.length / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
        return binarySearchIndex(array.slice(0, mid), target);
    } else {
        const result = binarySearchIndex(array.slice(mid + 1, array.length), target);
        return result === -1 ? -1 : result + mid + 1;
    }

}


module.exports = {
    binarySearch,
    binarySearchIndex
};