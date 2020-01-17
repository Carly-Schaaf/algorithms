def numTrees(n):
    table = [1, 1]

    for num in range(2, n+1):
        # num = 2
        trees = 0
        for root in range(1, num+1):
            # root = 2
            left_subtree = table[root-1] # --> 1
            right_subtree = table[num-root] # --> 1

            trees += left_subtree * right_subtree
            # trees = 5
        table.append(trees)
    
    return table[-1]
       




print(numTrees(1))
print(numTrees(3))
print(numTrees(4))
