class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root = this.root) {
        if (root === null) { this.root = new TreeNode(val); return; }

        if (val < root.val) {
            if (root.left) {
                this.insert(val, root.left);
            } else {
                root.left = new TreeNode(val);
            }
        } else {
            if (root.right) {
                this.insert(val, root.right);
            } else {
                root.right = new TreeNode(val);
            }
        }

    }
   
    searchRecur(val, root = this.root) {
        if (root === null) { return false; }

        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
    }

    searchIter(val) {
        const q = [this.root];

        while (q[0]) {
            let parent = q.shift();
            if (parent.val === val) { return true; }

            if (val < parent.val) { q.push(parent.left); }
            if (val > parent.val) { q.push(parent.right); }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};