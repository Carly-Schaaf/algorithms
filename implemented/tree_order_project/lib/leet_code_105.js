// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (inorder.length === 0) { return null; }

    const root = new TreeNode(preorder.shift());
    const rootIdx = inorder.indexOf(root.val);
    const leftTree = inorder.slice(0, rootIdx);
    const rightTree = inorder.slice(rootIdx + 1, inorder.length);

    root.left = buildTree(preorder, leftTree);
    root.right = buildTree(preorder, rightTree);

    return root;
}
