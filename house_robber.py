# @param {Integer[]} nums
# @return {Integer}
# [2, 1, 1, 2] --> 4
# at each step, calculate max: 
#   either add value to other, non-adjacent max
#   or keep the max of adjacent elements
# []

def rob(nums):
    if not nums:
        return 0
        
    table = []

    for i, num in enumerate(nums):
        if not table:
            table.append(num)
        elif len(table) == 1:
            table.append(max(num, table[0]))
        else:
            table.append(max(table[i - 1], table[i - 2] + num))

    return table[-1]
    

print(rob([1, 2, 3, 1]))
