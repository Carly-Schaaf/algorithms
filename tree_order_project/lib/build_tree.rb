require 'byebug'
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

def build_tree(preorder, inorder)
    return nil if inorder.empty?
        
    root_idx = inorder.find_index(preorder[0])
    root = TreeNode.new(preorder.shift) 
    
    
    left_tree = inorder[0...root_idx]
    right_tree = inorder[root_idx + 1..-1]
  
    root.left = build_tree(preorder, left_tree)
    root.right = build_tree(preorder, right_tree)
    
    root
end


preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
p build_tree(preorder, inorder)