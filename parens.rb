# https://leetcode.com/problems/generate-parentheses/
# @param {Integer} n
# @return {String[]}
def generate_parenthesis(n)
    return [""] if n < 1
    if n == 1
        return ["()"]
    end
    result = []   
    permutations = generate_parenthesis(n - 1)
    permutations.each do |perm|
        (0..perm.length).each do |i|
            result << perm[0...i] + "(" + perm[i..-1]
        end
    end
    final_result = []
    result.each_with_index do |perm, i|
        (0..perm.length).each do |i|
            next_perm = perm[0...i] + ")" + perm[i..-1]
            final_result << next_perm if is_valid?(next_perm)
        end
    end
    final_result.uniq
    # final_result.select do |paren|
    #     is_valid?(paren)
    # end.uniq
end

def is_valid?(paren)
    stack = paren.split("")
    num_open = 0
        until stack.empty?
            top = stack.pop
            return false if top == "(" && num_open == 0
            num_open += 1 if top == ")"
            num_open -= 1 if top == "("
        end
    
    if num_open == 0
        true
    else
        false
    end
end