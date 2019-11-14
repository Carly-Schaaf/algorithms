// left, self, right
function inOrderArray(root) {
    let result = [];
    if (root === null) return result;

    result = result.concat(inOrderArray(root.left));
    result.push(root.val);
    result = result.concat(inOrderArray(root.right));
    return result;
}
// left, right, self
function postOrderArray(root) {
    let result = [];
    if (root === null) return result;

    result = result.concat(postOrderArray(root.left));
    result = result.concat(postOrderArray(root.right));
    result.push(root.val);
    return result;
}



module.exports = {
    inOrderArray,
    postOrderArray
};