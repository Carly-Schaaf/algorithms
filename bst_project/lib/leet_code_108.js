// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    this.balanceFactor = 0;
}

TreeNode.prototype.rebalance = function() {
    
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
            root.balanceFactor += -1;
        }
    } else {
        if (root.right) {
            insert(val, root.right);
        } else {
            root.right = new TreeNode(val);
            root.balanceFactor += 1;
        }
    }
    if (!-2 < root.balanceFactor < 2) {
        root.rebalance();
    }
}

