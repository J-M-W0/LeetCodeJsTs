/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    const backtrack = (node) => {
        if (node === null) {
            return 0;
        }

        if (node.left === null && node.right === null) {
            return 1;
        }

        return backtrack(node.left) + backtrack(node.right) + 1;
    };

    return backtrack(root);
};

var countNodes2 = function(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 1;
    }

    const l = countNodes2(root.left);
    const r = countNodes2(root.right);
    return l + r + 1;
};
