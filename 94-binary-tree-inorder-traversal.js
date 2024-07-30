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
 * @return {number[]}
 */
var inorderTraversal = function (root) {

    let answer = [];

    const backtrack = (node) => {
        if (!node) {
            return;
        }
        backtrack(node.left);
        answer.push(node.val);
        backtrack(node.right);
    };

    backtrack(root);

    return answer;
};
