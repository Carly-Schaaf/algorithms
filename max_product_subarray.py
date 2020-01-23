def max_product(nums):
    if not nums:
        return 0
    
    max = nums[0]
    curr = nums[0]
    table = [] + [nums[0]]

    for idx, num in enumerate(nums):
        if idx == 0:
            continue
        else:
            product = table[-1] * num
            table.append(product)

            if product > max:
                max = product
            else:
                curr = num
                if curr > max:
                    max = curr
    
    return max

print(max_product([2,3,-2,4]))
print(max_product([10, -10, 10, -10]))
print(max_product([10, -10, 10, 60, -1]))
print(max_product([2, -5, -2, -4, 3]))
