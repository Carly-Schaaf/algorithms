# @param {Integer[]} nums
# @return {Integer}
def rob(nums):
    max_odd = 0
    max_even = 0

    for i, num in enumerate(nums):
        if i % 2 == 0:
            max_even += num
        else:
            max_odd += num 

    return max(max_even, max_odd)