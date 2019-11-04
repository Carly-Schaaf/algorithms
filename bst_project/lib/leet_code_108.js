// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    this.balanceFactor = 0;
}

TreeNode.prototype.rebalance = function() {
    if (this.balanceFactor < 0) {
        const shouldRotateTwice = this.left.right;
        this.rotateRight(shouldRotateTwice);
    } else {
        // does my right child have a left child?
        const shouldRotateTwice = this.right.left;
        this.rotateLeft(shouldRotateTwice);
    }
}

TreeNode.prototype.rotateLeft = function(shouldRotateTwice) {
    if (shouldRotateTwice) {
        const newLeft = this.right.left;
        newLeft.left = this.right;
        this.right.left = null;
        this.right = newLeft;
        // what if right child has 2 children? --> level wouldn't exist b/c balance
    }

    this.left = new TreeNode(this.val);
    this.val = this.right.val;
    const newRight = this.right.left || this.right.right;
    this.right = newRight;
}

TreeNode.prototype.rotateRight = function(shouldRotateTwice) {
    if (shouldRotateTwice) {
        const newLeft = this.left.right;
        const oldLeft = this.left;
        this.left = newLeft;
        newLeft.left = oldLeft;
        oldLeft.right = null;
    }

    this.right = new TreeNode(this.val);
    this.val = this.left.val;
    this.left.val = this.left.left; 
}

function sortedArrayToBST(nums) {
    if (!nums.length) { return null; }
    const rootIdx = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[rootIdx]);
    nums = nums.slice(0, rootIdx).concat(nums.slice(rootIdx + 1, nums.length));
    nums.forEach(num => {
        insert(num, root);
    })
    return root;
}

function insert(val, root) {
    if (root === null) { return new TreeNode(val); }

    if (val < root.val) {
        if (root.left) {
            insert(val, root.left);
        } else {
            root.left = new TreeNode(val);
            // root.balanceFactor += -1;
        }
    } else {
        if (root.right) {
            insert(val, root.right);
        } else {
            root.right = new TreeNode(val);
            // root.balanceFactor += 1;
        }
    }
    if (!-2 < root.balanceFactor < 2) {
        // root.rebalance();
    }
}

function printBfs(root) {
    const q = [root];
    let counter = 0;
    let currentNode;
    while (counter < q.length) {
        currentNode = q[counter];
        if (currentNode.left) q.push(currentNode.left);
        if (currentNode.right) q.push(currentNode.right);
        counter ++;
    }
    const result = q.map(node => node.val);
    console.log(result);
}

const root = new TreeNode(3);
insert(1, root);
insert(4, root);
// console.log(root);
printBfs(root);
